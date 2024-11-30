let a1 = document.getElementById("a-1")
let a2 = document.getElementById("a-2")
let a3 = document.getElementById("a-3")
let title = document.getElementById("title")

a1.addEventListener("click" , () => {
    a1.style.transition="all 0.8s"
    title.style.transition="all 0.8s"
    title.innerHTML=`<h1 class=" text-center mt-3 fw-bolder text-uppercase "id="title">Protofulio</h1>`
    a1.classList.add("bg-primary","rounded")
    a2.classList.remove("bg-primary","rounded")
    a3.classList.remove("bg-primary","rounded")
} )
a2.addEventListener("click" , () => {
    a2.style.transition="all 0.8s"
    title.style.transition="all 0.8s"
    title.innerHTML=`<h1 class=" text-center mt-3 fw-bolder text-uppercase "id="title">About</h1>`
    a2.classList.add("bg-primary","rounded")
    a1.classList.remove("bg-primary","rounded")
    a3.classList.remove("bg-primary","rounded")
} )
a3.addEventListener("click" , () => {
    title.style.transition="all 0.8s"
    a3.style.transition="all 0.8s"
    title.innerHTML=`<h1 class=" text-center mt-3 fw-bolder text-uppercase "id="title">Contact</h1>`
    a3.classList.add("bg-primary","rounded")
    a1.classList.remove("bg-primary","rounded")
    a2.classList.remove("bg-primary","rounded")
} )
