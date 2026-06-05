// Crown of Thorns — Pre-Launch Script
// iOS Safari safe: no const/let, no template literals, no optional chaining

(function() {
  'use strict';

  // Waitlist form submission via Formspree
  var form = document.getElementById('waitlistForm');
  var successMsg = document.getElementById('waitlistSuccess');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var btn = form.querySelector('.form-btn');
      var originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      var data = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', form.action, true);
      xhr.setRequestHeader('Accept', 'application/json');

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 || xhr.status === 302) {
            form.style.display = 'none';
            if (successMsg) {
              successMsg.style.display = 'flex';
            }
          } else {
            btn.textContent = originalText;
            btn.disabled = false;
            alert('Something went wrong. Please email hello@geodm.us directly.');
          }
        }
      };

      xhr.send(data);
    });
  }

  // Subtle entrance animations (no IntersectionObserver for max compatibility)
  function onLoad() {
    var heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      heroInner.style.opacity = '0';
      heroInner.style.transform = 'translateY(20px)';
      heroInner.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      setTimeout(function() {
        heroInner.style.opacity = '1';
        heroInner.style.transform = 'translateY(0)';
      }, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onLoad);
  } else {
    onLoad();
  }

})();
