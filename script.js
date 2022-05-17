const btn = document.getElementById('accordion');
const sideBar = document.getElementById('sideBar');
console.log(btn)
console.log(sideBar)

btn.addEventListener('click', function(){
    sideBar.classList.toggle('open')
})