let tablinks=document.getElementsByClassName('tab-links');
let tabcontents=document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab');
}

// -----------------scripting for the side menu---------------//

let sideMenu=document.getElementById('sideMenu')

function openMenu(params) {
    sideMenu.style.right='0'
}
function closeMenu(params) {
    sideMenu.style.right='-200px'
    
}