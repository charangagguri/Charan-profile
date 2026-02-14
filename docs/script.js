// Typing Animation
let text="Welcome to My Portfolio";
let i=0;

function typing(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,70);
  }
}
typing();


// Scroll Fade Animation
window.addEventListener("scroll", function(){
  let about=document.querySelector(".about");
  let position=about.getBoundingClientRect().top;
  let screen=window.innerHeight;

  if(position<screen-100){
    about.classList.add("show");
  }
});


// Scroll Progress Bar
window.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let scrolled=(scrollTop/height)*100;
  document.getElementById("progress").style.width=scrolled+"%";
});