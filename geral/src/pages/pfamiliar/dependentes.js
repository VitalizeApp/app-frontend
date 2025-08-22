document.getElementById("criar").addEventListener("click", function() {
    const novaDiv = document.createElement("div");
  
    novaDiv.style.width = "30vh";
    novaDiv.style.height = "10vh";
    novaDiv.style.marginBottom = "2vh";
    novaDiv.style.borderRadius = "2vh";
    novaDiv.style.alignSelf = "center"
    novaDiv.style.flexShrink = "0"
    novaDiv.style.border = "0.3vh solid aliceblue";
    novaDiv.style.boxShadow = "0 1vh 2vh rgba(0, 0, 0, 0.1)";
    novaDiv.style.transition = "background-color 0.3s ease";

    const cores = ["rgb(136, 187, 220)", "rgb(29, 52, 66)"];
    const indiceCor = document.querySelectorAll("#depsection > div").length % 2;
    novaDiv.style.backgroundColor = cores[indiceCor];
  
    document.getElementById("depsection").appendChild(novaDiv);

  });