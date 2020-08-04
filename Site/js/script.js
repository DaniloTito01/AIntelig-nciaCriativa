window.addEventListener("scroll", function () {
    var  header =  document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
    console.log("Teste ")

})

function toggle(){

    var  header =  document.querySelector("header");
    header.classList.toggle("active");

}