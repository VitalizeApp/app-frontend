document.getElementById("criar").addEventListener("click", function() {
    const novaDiv = document.createElement("div");
  
    novaDiv.style.width = "280px";
    novaDiv.style.height = "80px";
    novaDiv.style.backgroundColor = "aliceblue"; 
    novaDiv.style.marginBottom = "10px";
    novaDiv.style.borderRadius = "25px";
    novaDiv.style.flexShrink = "0";

  
    document.getElementById("dep").appendChild(novaDiv);

  });