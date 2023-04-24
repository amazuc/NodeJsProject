async function loadDataNavbar() {
    const response = await fetch("http://localhost:3000/categorys");
    const jsonData = await response.json();
    jsonData.forEach(element => {
        var linkCat = document.createElement("a");
        linkCat.href = "categorie.html?id=" + element.id;
        var linkCat_text = document.createTextNode(element.name);
        linkCat.appendChild(linkCat_text);
        document.getElementById("navLinks").appendChild(linkCat);
    });

    var button = document.getElementById("connectButton");
    if (localStorage.getItem("tokens")) {
        button.innerHTML = "Se deconnecter";
    }else{
        button.innerHTML = "Connexion";
    }
    button.setAttribute("onClick", "buttonConnexion();");

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarLinks = document.querySelector('.navbar-links');
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    });
}

function buttonConnexion() {

    var button = document.getElementById("connectButton")
    if (button.textContent == "Connexion") {
        document.location.href = "./login.html";
    } else {
            button.innerHTML = "Se deconnecter";
                localStorage.removeItem("tokens");
                window.location.reload();
        }
    }

    document.addEventListener("DOMContentLoaded", function(){
        loadDataNavbar();
});