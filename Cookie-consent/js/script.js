document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");

    // Show popup only if consent is NOT given
    if (!localStorage.getItem("cookieConsent")) {
        cookiePopup.classList.remove("hidden");
    }

    // Handle button click - Accept cookies
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true"); // Store consent
        cookiePopup.classList.add("hidden"); // Hide popup
    });
});
