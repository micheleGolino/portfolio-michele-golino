/* Michele Golino — Portfolio interactions */
(function () {
  "use strict";

  /* ----- Mobile navigation toggle ----- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Chiudi menu di navigazione" : "Apri menu di navigazione");
    });

    // Close the menu when a link is selected (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.closest("a") && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri menu di navigazione");
      }
    });
  }

  /* ----- Reveal sections on scroll ----- */
  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- Current year in footer ----- */
  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }

  /* ----- Profile image fallback (show initials if it fails to load) ----- */
  var avatarImg = document.getElementById("avatarImg");
  if (avatarImg) {
    var handleAvatarError = function () {
      var avatar = avatarImg.closest(".avatar");
      if (avatar) { avatar.classList.add("avatar--fallback"); }
      if (avatarImg.parentNode) { avatarImg.parentNode.removeChild(avatarImg); }
    };
    avatarImg.addEventListener("error", handleAvatarError);
    // Catch images that already errored before the listener was attached
    if (avatarImg.complete && avatarImg.naturalWidth === 0) { handleAvatarError(); }
  }
})();
