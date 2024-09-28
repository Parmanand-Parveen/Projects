var imgs = document.querySelectorAll(".crousel img");
var i = 0;

function crousel(){
    imgs[i].style.display = "none";
    i = (i+1) % imgs.length;
    imgs[i].style.display = "block";
    imgs[i].classList.add("active"); 
    setTimeout(crousel,5000);
}

crousel();