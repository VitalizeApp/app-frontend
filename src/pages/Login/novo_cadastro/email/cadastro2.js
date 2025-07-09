document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const continueButton = document.querySelector('.continue-button');
  const continueLink = document.querySelector('.continue-link');

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  emailInput.addEventListener('input', function () {
    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
      continueButton.disabled = false;
      continueLink.classList.remove('disabled');
      continueLink.setAttribute('tabindex', '0');
      continueLink.removeAttribute('aria-disabled');
    } else {
      continueButton.disabled = true;
      continueLink.classList.add('disabled');
      continueLink.setAttribute('tabindex', '-1');
      continueLink.setAttribute('aria-disabled', 'true');
    }
  });
});
