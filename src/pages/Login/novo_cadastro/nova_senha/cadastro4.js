document.addEventListener("DOMContentLoaded", () => {
    const senhaInput = document.getElementById("new-password");
  
    const reqs = {
      length: document.getElementById("req-length"),
      upper: document.getElementById("req-upper"),
      lower: document.getElementById("req-lower"),
      number: document.getElementById("req-number"),
      special: document.getElementById("req-special"),
    };
  
    senhaInput.addEventListener("input", ({ target }) => {
      const v = target.value;
      reqs.length.checked = /.{8,}/.test(v);
      reqs.upper.checked = /[A-Z]/.test(v);
      reqs.lower.checked = /[a-z]/.test(v);
      reqs.number.checked = /\d/.test(v);
      reqs.special.checked = /[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]/.test(v);
    });
  });
  