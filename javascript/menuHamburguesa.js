const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");

btn.onclick = ()=>{

    menu.classList.toggle("abrir");
    uno.classList.toggle("uno");
    dos.classList.toggle("dos");
    tres.classList.toggle("tres");
}