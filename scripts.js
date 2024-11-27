document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("login").scrollIntoView({ behavior: "smooth" });
    });
});
