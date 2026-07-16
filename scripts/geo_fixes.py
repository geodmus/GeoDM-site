#!/usr/bin/env python3
"""GEO fixes for geodm.us: de-obfuscate emails, bake stat values, clean sitemap.
Idempotent - safe to run repeatedly. Runs via GitHub Actions."""
import re, pathlib, glob

EMAIL = 'hello@geodm.us'
MAILTO = 'mailto:' + EMAIL
changed = []

def save(path, s, orig):
    if s != orig:
        pathlib.Path(path).write_text(s, encoding='utf-8')
        if path not in changed: changed.append(path)

for f in glob.glob('**/*.html', recursive=True):
    p = pathlib.Path(f); s = p.read_text(encoding='utf-8'); orig = s
    # Cloudflare email-protection spans -> plain email
    s = re.sub(r'<span class="__cf_email__"[^>]*>\[email(?:&#160;|\s)*protected\]</span>', EMAIL, s)
    s = re.sub(r'\[email&#160;protected\]', EMAIL, s)
    # data-em anchors -> real mailto links
    def fix_a(m):
        attrs = m.group(1) + m.group(2)
        attrs = attrs.replace('href="#"', 'href="%s"' % MAILTO)
        attrs = attrs.replace(' data-show="1"', '')
        if 'href=' not in attrs: attrs = (' href="%s"' % MAILTO) + attrs
        return '<a' + attrs + '>'
    s = re.sub(r'<a([^>]*?) data-em="1"([^>]*?)>', fix_a, s)
    # Remove obfuscation scripts (both variants)
    s = re.sub(r'<script>\(function\(\)\{var u="hello",d="geodm"\+"\.us".*?</script>\n?', '', s, flags=re.S)
    s = re.sub(r"<script>\s*\(function\(\)\{\s*var e=\['hello','geodm\.us'\]\.join\('@'\);.*?</script>\n?", '', s, flags=re.S)
    # Stat counters: bake real values into HTML for crawlers
    s = re.sub(r'(data-count="(\d+)"[^>]*>)0(</)', r'\g<1>\g<2>\g<3>', s)
    # JS zero-out so the count-up animation still plays for humans
    common = "var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.querySelectorAll('[data-count]')"
    if common in s and "el.textContent='0'" not in s:
        s = s.replace(common, "document.querySelectorAll('[data-count]').forEach(function(el){el.textContent='0';});" + common)
    save(f, s, orig)

# contact.html: real mailto hrefs + drop the click-wiring block
p = pathlib.Path('contact.html'); s = p.read_text(encoding='utf-8'); orig = s
for i in ['email-btn-2','email-btn-es','ft-email']:
    s = s.replace('<a href="#" id="%s"' % i, '<a href="%s" id="%s"' % (MAILTO, i))
s = re.sub(r'  // Email links\n.*?\n  \}\);\n\n(  // Scroll reveal)', r'\1', s, flags=re.S)
save('contact.html', s, orig)

# faq.html: dead button -> working mailto anchor
p = pathlib.Path('faq.html'); s = p.read_text(encoding='utf-8'); orig = s
def btn(m):
    style = m.group(1).replace('cursor:pointer;', 'cursor:pointer;text-decoration:none;')
    return '<a href="%s" id="email-btn"%s>EMAIL US DIRECTLY</a>' % (MAILTO, style)
s = re.sub(r'<button type="button" id="email-btn"([^>]*)>EMAIL US DIRECTLY</button>', btn, s)
save('faq.html', s, orig)

# geo.html: zero-out for its custom counter
p = pathlib.Path('geo.html'); s = p.read_text(encoding='utf-8'); orig = s
if "el.textContent='0'" not in s:
    s = s.replace("var counted = false;", "var counted = false;\n  document.querySelectorAll('[data-count]').forEach(function(el){el.textContent='0';});", 1)
save('geo.html', s, orig)

# sitemap.xml: remove ghost URLs (pages that don't exist)
p = pathlib.Path('sitemap.xml'); s = p.read_text(encoding='utf-8'); orig = s
s = re.sub(r'  <url><loc>https://geodm\.us/(?:web-design-chicago|ai-automation-chicago|social-media-marketing-chicago|web3-blockchain-chicago)\.html</loc>[^\n]*</url>\n', '', s)
save('sitemap.xml', s, orig)

# _config.yml: keep scripts/ out of the published site
p = pathlib.Path('_config.yml'); s = p.read_text(encoding='utf-8'); orig = s
if 'scripts/' not in s:
    s = s.rstrip() + '\n  - scripts/\n'
save('_config.yml', s, orig)

print('Changed %d files:' % len(changed))
for c in sorted(changed): print(' ', c)
