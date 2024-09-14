// const menuBtn = document.querySelector("#menu-btn");
// const navLinks = document.querySelector("#nav-links");
// const menubtnIcon =menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e)=>{
//     navLinks.classList.toggle("open");
//   console.log(navLinks);
//   const isOpen = navLinks.classList.contains("open");
  
//     if(navLinks.className== isOpen){
//         menubtnIcon.className="ri-close-line";
//     }
//     else {
//         menubtnIcon.className="ri-menu-line";
//     }
// });
// navLinks.addEventListener("click",(e)=>{
//     navLinks.classList.remove("open");
//     menubtnIcon.setAttribute("class",ri-menu-line);
// });


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption ={
  origin : "top",
  distance:"50px",
  duration:1000
};
ScrollReveal().reveal(".home h3" ,{
  ...scrollRevealOption,
  origin:"right",
  } );
  ScrollReveal().reveal(".home h1" ,{
    ...scrollRevealOption,
    // origin:"right"
    delay:2000,
    } );
    ScrollReveal().reveal(".home p" ,{
      ...scrollRevealOption,
      // origin:"right"
      delay:500,
      } );
      ScrollReveal().reveal(".content button" ,{
        ...scrollRevealOption,
        // origin:"right"
        delay:500,
        } );
    ScrollReveal().reveal(".header__content h1" ,{
      ...scrollRevealOption,
      // origin:"right"
      delay:1000,
      } );
      ScrollReveal().reveal(".header__btns" ,{
        ...scrollRevealOption,
        origin:"top",
        delay:1500,
        } );
        // ScrollReveal().reveal(".displaybox" ,{
        //   ...scrollRevealOption,
        //   delay:3000,
        //   } );