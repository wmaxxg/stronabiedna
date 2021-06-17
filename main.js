let main = document.querySelector('article')
const p = document.getElementById('pe')
const menuBoxDivs = document.getElementsByClassName('menuboxdiv');
const nav = document.querySelector('nav');
const navWrapper = document.getElementById('navwrapper')
const glowna = document.querySelector('article')
const k2D = document.getElementById('k2D')
const k2B = document.getElementById('k2B')
const k1P = document.getElementById('k1P')
//animacja menu
document.addEventListener('scroll', ()=>{
   article = main
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
 })

//wybor klasy
 nav.addEventListener('click', (event)=>{
   switch(event.target.innerHTML){
      case 'Główna':
         glowna.style.display="block"
         k2D.style.display="none"
         k2B.style.display="none"
         k1P.style.display="none"
         main = glowna
         break;
      case 'Klasa 2D':
         glowna.style.display="none"
         k2D.style.display="block"
         k2B.style.display="none"
         k1P.style.display="none"
         main = k2D
         break;
      case 'Klasa 2B':
         glowna.style.display="none"
         k2D.style.display="none"
         k2B.style.display="block"
         k1P.style.display="none"
         main = k2B
         break;
      case 'Klasa 1P':
         glowna.style.display="none"
         k2D.style.display="none"
         k2B.style.display="none"
         k1P.style.display="block"
         main = k1P
         break;
   }
 })
 function chgGrp(GroupNr,klasa)
 {
   location.href=`kl${klasa}gr${GroupNr}.html`
 }