# GDM Contentos v2.2
### Content Dashboard — geodm.us/contentos

---

## Overview

Contentos is your all-in-one social media content planning dashboard for the GeoDMus ecosystem. Plan posts on a calendar, write captions, generate on-brand copy with the AI engine, save your best captions to a vault, and track what's been posted — all in one place.

Everything saves automatically to your browser. No login. No accounts. Just open and go.

---

## Layout

### Desktop (wide screen)
Three columns side by side:

```
[ Sidebar ]  [ Editor ]  [ AI Panel ]
  Calendar    Write &      Generate
  Post List   Edit Posts   Vault / Stats
```

### Mobile / Tablet
Single column with two drawer buttons in the top bar:

```
[ ☰ ]  GDM CONTENTOS  [ + New Post ]  [ ✍ AI ]
         Full editor takes up the screen
```

- **☰ button** (top left) → opens the sidebar drawer (calendar + posts)
- **✍ AI button** (top right) → opens the AI caption panel drawer
- Tap anywhere outside a drawer to close it

---

## The Top Bar

| Element | What It Does |
|---|---|
| **GDM CONTENTOS** logo | Branding |
| **☰** | Opens sidebar on mobile |
| **＋ New Post** | Creates a new post for today |
| **✍ AI** | Opens the AI panel on mobile |
| **Venture dropdown** | Filter calendar and post list by venture |
| **Done X/X** | Shows posted vs total posts |

---

## Creating a Post

**Option A — From the calendar:**
1. Open the sidebar (☰ on mobile, left panel on desktop)
2. Tap any day on the calendar
3. No post on that day → a new one is created automatically
4. Post already exists → it opens that post

**Option B — New Post button:**
1. Tap **＋ New Post** in the top bar
2. A post is created for today's date

---

## The Editor

Once a post is open you'll see:

### Toolbar (top of editor)

| Button | Action |
|---|---|
| 📅 Cal / 😂 Meme / 📊 Data / 🎬 Reel / 🔥 Hot | Set the post type |
| 💾 Save | Saves the post |
| 📋 Copy | Copies caption + hashtags to clipboard |
| ✓ Posted? | Marks post as published — turns green |
| 🗑 | Deletes the post permanently |

### Fields

- **Date** — change the date if needed
- **Venture** — which brand this post is for
- **Platforms** — tap IG / X / FB / TT to toggle platforms
- **Caption** — write here, or generate with AI and tap Use
- **Hashtags** — auto-loaded for the selected venture. Tap any tag to copy it
- **Visual Notes** — image description, video direction, or asset link

---

## The Calendar

### Color indicators on dates:

| Indicator | Meaning |
|---|---|
| Magenta dot | Post scheduled on that day |
| Green dot | All posts on that day are marked posted |
| Cyan highlight | Currently selected post's date |
| Bold cyan number | Today |

### Navigation:
- **‹ ›** arrows to navigate months
- Tap any date to open or create a post

---

## The AI Caption Panel

### Desktop — always visible as the right column
### Mobile — tap **✍ AI** in the top bar

### How to generate a caption:

1. **Tone** — pick how you want to sound:
   - *Bold & Direct* — confident, no fluff
   - *Community First* — warm, people-focused, Chicago roots
   - *Educational* — informative, positions you as the expert
   - *Hype Energy* — high energy, urgency, excitement

2. **Format** — pick the structure:
   - *Hook + Story* — strong opening, body, CTA
   - *Question Lead* — opens with a question
   - *Stat + Insight* — leads with data or a number
   - *List / Tips* — value-driven list format

3. **Context** *(optional but recommended)* — describe the post. Example: *"Announcing our new AI automation package for barbershops, $799/mo"*

4. **Language** — 🇺🇸 English or 🇲🇽 Español

5. Tap **✦ Generate Caption**

6. After generation:
   - **✓ Use** — drops the caption into your editor
   - **🗄 Save** — saves it to the Vault for later
   - **↺ Redo** — regenerates with the same settings

---

## The Vault

Stores your saved captions for reuse across posts and ventures.

- Generate a caption → tap **🗄 Save**
- **Vault tab** shows all saved captions
- **Use** — loads it into the current editor
- **Copy** — copies caption + hashtags to clipboard
- **✕** — removes it from the vault

Vault data persists across sessions.

---

## Stats Tab

| Stat | What It Shows |
|---|---|
| Total Posts | All posts in your planner |
| Posted | Posts marked as done |
| Remaining | Posts still to publish |
| Vault | Captions saved in vault |

Also has a direct link to **Metricool** for scheduling and publishing.

---

## Workflow Example

1. Open `geodm.us/contentos`
2. Tap ☰ → open the sidebar
3. Tap a day on the calendar → post is created
4. Set the **Venture** (e.g. Juice Yoga Body) and **Platforms** (IG, TT)
5. Set **Post Type** (e.g. 🎬 Reel)
6. Open AI panel → Tone: *Hype Energy*, Format: *Hook + Story*
7. Add Context: *"New mango jalapeño lemonade drop"*
8. Tap **✦ Generate Caption**
9. Tap **✓ Use** → caption drops into editor
10. Tweak if needed → tap 💾 **Save**
11. After posting → tap **✓ Posted?** → turns green on the calendar

---

## Tips

- **Planning a full week:** Tap each day in sequence — posts stack in the list
- **Bilingual content:** Switch Language to Español in the AI panel
- **Multiple ventures:** Use the venture filter to focus on one brand at a time
- **Copy one hashtag:** Tap any hashtag chip individually
- **Copy everything:** 📋 Copy button grabs caption + all hashtags together

---

## Data & Storage

- All data saves to **localStorage** in your browser automatically
- Data is **per device per browser** — does not sync across devices
- Clearing your browser data will erase posts
- Storage keys: `gdm_posts_v3` (posts) and `gdm_vault_v3` (vault)

---

*GDM Contentos v2.2 — Built by Geo Digital Media*
*geodm.us · hello@geodm.us · 773.236.1831*
