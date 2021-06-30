const groupChoose = document.getElementById('groups')
const p = document.getElementById('pe')
const menuBoxDivs = document.getElementsByClassName('menubox');
const nav = document.querySelector('nav');
const navWrapper = document.getElementById('navwrapper');
const menuBtn = document.getElementById('slimwrap');
if(window.innerWidth<=600)
  nav.style.height=`${window.innerHeight-navWrapper.offsetHeight}px`;
//animacja menu poziomego
setTimeout(()=>{
  nav.style.justifyContent="flex-end"
  navWrapper.style.background="#202020"
  for(i=0;i<4;i++)
    menuBoxDivs[i].classList.remove('onbanner');}, 100)
setTimeout(()=>{
  p.style.display="block"
  p.style.opacity="100%"
}, 1200)
//animacja menu burgerowego
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.style.width='100%'
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.style.width="0"
    menuOpen = false;
  }
});
//przekierowanie do stron z klasą
function chgWindow(klasa)
{
   sessionStorage.setItem("class",klasa)
   setTimeout(()=>{location.href="list.html"}, 1000)
}
groupChoose.addEventListener('click', (event)=>
{
  groupChoose.style.opacity="0"
  setTimeout(()=>{groupChoose.style.display="none"}, 500)
  getsitelist(`${sessionStorage.getItem('class')}${event.target.parentNode.id}`)
})