document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");
  const continueLink = document.querySelector(".continue-link");
  const continueBtn = continueLink.querySelector(".continue-button");

  cpfInput.addEventListener("input", () => {
    let v = cpfInput.value.replace(/\D/g, "").slice(0, 11);
    let formatado = "";
    if (v.length > 0) formatado = v.slice(0, 3);
    if (v.length >= 4) formatado += "." + v.slice(3, 6);
    if (v.length >= 7) formatado += "." + v.slice(6, 9);
    if (v.length >= 10) formatado += "-" + v.slice(9, 11);
    cpfInput.value = formatado;

    if (v.length === 11) {
      continueLink.classList.remove("disabled");
      continueLink.removeAttribute("tabindex");
      continueLink.setAttribute("aria-disabled", "false");
      continueBtn.disabled = false;
    } else {
      continueLink.classList.add("disabled");
      continueLink.setAttribute("tabindex", "-1");
      continueLink.setAttribute("aria-disabled", "true");
      continueBtn.disabled = true;
    }
  });

  cpfInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!continueBtn.disabled) {
        continueLink.click();
      }
    }
  });
});
