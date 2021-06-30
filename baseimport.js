const sitelist = document.getElementById('list')
function getsitelist(base)
{
    fetch(`${base}.json`)
    .then(response => {
    return response.json();
    })
    .then(data => {
        sites=""
        data.forEach(site => {
            sites+=`<div class="site" onclick="window.open('${site.Address}')"><img src="${site.img}" onerror="this.src='miniaturki/notavaliable.jpg'"><p>${site.Name}</p></div>`
        });
        sitelist.innerHTML=sites
    });
}