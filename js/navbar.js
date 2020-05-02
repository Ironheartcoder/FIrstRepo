document.getElementById('openMenu').addEventListener('click',openMenu);
document.getElementById('fadded').addEventListener('click',closeMenu);

function closeMenu(e){
    let fadded =document.getElementById('fadded');
    let menuSlider =document.getElementById('menuSlider');
    fadded.style.display = "none";
    menuSlider.style.width = "0vw";
    e.preventDefault();
}
function openMenu(e){
    let fadded =document.getElementById('fadded');
    let menuSlider =document.getElementById('menuSlider');
    let viewportWidth = window.innerWidth;
    console.log(viewportWidth);
    fadded.style.display = "block";
    if(viewportWidth<=550){
            menuSlider.style.width="40vw";
    }
    else{
    menuSlider.style.width = "20vw";
    }
    e.preventDefault();
}
