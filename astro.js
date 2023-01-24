
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

}

var counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
     if(counter > 4){
      counter = 1;
    }
}, 5000);
