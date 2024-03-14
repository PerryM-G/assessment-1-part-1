let navbar = document.getElementById("navbar");
let navItems = navbar.getElementsByClassName("navItem")

for(let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active","");
    this.className += " active";
  });
}