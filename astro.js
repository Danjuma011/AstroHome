
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");

}

var counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
     if(counter > 4){
      counter = 1;
    }
}, 5000);


document.querySelectorAll(".slc").forEach(ele=>{
    ele.addEventListener("click",function(e){
        e.stopPropagation()
        let id = this.id
        counter = id.slice(5)
    })
})