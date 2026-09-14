const email = "yp@electrodifusa.com";

function sendMail(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const subject = document.querySelector(".email-subject").value;
    const message = document.querySelector(".email-msg").value;
    const body = `${message}\n\nNombre: ${name}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return false;
}