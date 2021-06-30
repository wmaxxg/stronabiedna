const article = document.querySelector('article')
const p = document.getElementById('pe')
const menuBoxDivs = document.getElementsByClassName('menubox');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const navWrapper = document.getElementById('navwrapper');
const menuBtn = document.getElementById('slimwrap');

//animacja menu poziomego
document.addEventListener('scroll', ()=>{
    if(window.innerWidth>600)
    {
      if(article.offsetTop-navWrapper.offsetTop+4<=0)
      {
         p.style.display="block"
         nav.style.justifyContent="flex-end"
         navWrapper.style.background="#202020"
         for(i=0;i<4;i++)
            menuBoxDivs[i].classList.remove('onbanner');
   
      }
      else
      {
         p.style.display="none"
         nav.style.justifyContent="center"
         navWrapper.style.background="transparent"
         for(i=0;i<4;i++)
         menuBoxDivs[i].classList.add('onbanner');
      }
    }
 })
//animacja menu burgerowego
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.style.height=`${window.innerHeight-header.offsetHeight}px`
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.style.height="0"
    menuOpen = false;
  }
});
//przekierowanie do stron z klasą
function chgWindow(klasa)
{
   header.style.height="0"
   article.style.opacity="0"
   sessionStorage.setItem("class",klasa)
   setTimeout(()=>{location.href="list.html"}, 1000)
}