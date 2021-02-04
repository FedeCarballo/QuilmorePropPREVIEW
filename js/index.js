<script>
  AOS.init();
</script>
const inicio = document.getElementById("inicio");

window.addEventListener("scroll", function()
  {
  let offset = window.pageYOffset;
  inicio.style.backgroundPositionY = offset * 1.5 + "px"

})


