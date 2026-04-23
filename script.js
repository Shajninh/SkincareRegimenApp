(function () {
  var cta = document.getElementById("cta-start");
  if (!cta) return;

  cta.addEventListener("click", function () {
    window.location.hash = "login";
  });
})();
