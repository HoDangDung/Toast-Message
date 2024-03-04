function showSuccessToast() {
  toast({
    title: "Success",
    message: "Anyone with access can view your invited vistors",
    type: "success",
    duration: 1000,
  });
}
function showErrorToast() {
  toast({
    title: "Error",
    message: "Anyone with access can view your invited vistors",
    type: "error",
    duration: 3000,
  });
}

function toast({title = "", message = "", type = "", duration = 0}) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Button Close the toast message
    toast.onclick = function(e){
      console.log(e.target);
    }

    toast.classList.add("toast", `${type}`);
    const icons = {
      success: "fa-solid fa-circle-check",
      error: "fa-solid fa-circle-info",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.style.animation = `slideShow 0.5s linear forwards, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
          <div class="toast__icon">
            <i class="${icon}"></i>
          </div>
          <div class="toast__body">
            <div class="toast__title">
              <h3>${title}</h3>
              <p class="toast__message">${message}</p>
            </div>
          </div>
          <div onclick=onClose() class="toast__close">
            <i class="fa-solid fa-xmark"></i>
          </div>
    `;
    main.appendChild(toast);

    setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);
  }
}
