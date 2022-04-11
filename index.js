let btn = document.querySelector("#togglebtn");
let content = document.querySelector(".content");
console.log(btn)

btn.addEventListener("click", () => {
        content.classList.toggle('active');
       const atrib =  content.getAttribute("id");
       console.log(typeof(+atrib))
    })
