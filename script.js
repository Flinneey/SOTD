console.log("Script is running...");

window.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");

    console.log("dateElement:", dateElement);

    if (!dateElement) {
        console.error("No element with id 'date' found!");
        return;
    }

    const today = new Date();
    dateElement.textContent = today.toDateString();
    console.log("Date set to:", today.toDateString());
});
