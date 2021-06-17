const p = document.getElementById('pe')
const menuBoxDivs = document.getElementsByClassName('menuboxdiv');
const nav = document.querySelector('nav');
const navWrapper = document.getElementById('navwrapper')
const article = document.querySelector('article')
//animacja menu
document.addEventListener('scroll', ()=>{
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
