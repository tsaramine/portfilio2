const button = document.getElementById("button")
const ul = document.getElementById("ul")

button.addEventListener("click", ()=>{
hhh();
})
function hhh(){
    button.classList.toggle("is-active");
    ul.classList.toggle("is-active");
}
document.getElementById("sun").onclick=function sun(){
    document.getElementById("section1").style.backgroundColor="white";
    document.getElementById("h1").style.color="black";
    document.getElementById("contact").style.color="black";
}