document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".number-group");
  
    inputs.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.inputType !== "deleteContentBackward" && input.value) {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
  
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  
    // Timer de 5 minutos
    let time = 300;
    const timerDisplay = document.querySelector(".timer");
  
    function updateTimer() {
      const minutes = String(Math.floor(time / 60)).padStart(1, '0');
      const seconds = String(time % 60).padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
  
      if (time > 0) {
        time--;
        setTimeout(updateTimer, 1000);
      }
    }
  
    updateTimer();
  });
  