const sitelist = document.getElementById('lista')
fetch(`${base}.json`)
.then(response => {
   return response.json();
})
.then(data => {
    sites=""
    data.forEach(site => {
        sites+=`<div class="site" onclick="window.open('${site.address}')"><img src="${site.img}"><p>${site.Name}</p></div>`
    });
    sitelist.innerHTML=sites
});