
//Essa função pode ser usada para mudar em todas as páginas, apenas conecte esse JS a todas as telas e defina um modo escuro para os elementos no CSS

let html = document.querySelector ("html");

function tema() {
    let tema = html.getAttribute("data-theme");

    if (tema === "light") {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }else{
        html.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let temaSalvo = localStorage.getItem("theme");
    if (temaSalvo) {
        html.setAttribute("data-theme", temaSalvo)
    }
})
