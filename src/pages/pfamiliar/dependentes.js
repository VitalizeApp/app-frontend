document.getElementById("criar").addEventListener("click", function() {
    const novaDiv = document.createElement("div");
  
    novaDiv.style.width = "30vh";
    novaDiv.style.height = "10vh";
    novaDiv.style.backgroundColor = "aliceblue"; 
    novaDiv.style.marginBottom = "2vh";
    novaDiv.style.borderRadius = "2vh";
    novaDiv.style.alignSelf = "center"
    novaDiv.style.flexShrink = "0"
    novaDiv.style.border = "1px solid black";
    novaDiv.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    novaDiv.style.transition = "background-color 0.3s ease";

    const cores = ["aliceblue", "rgb(19, 149, 255)"];
    const indiceCor = document.querySelectorAll("#depsection > div").length % 2;
    novaDiv.style.backgroundColor = cores[indiceCor];
  
    document.getElementById("depsection").appendChild(novaDiv);

  });