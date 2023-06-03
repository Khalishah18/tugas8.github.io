document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.getElementById("greeting");
    const dateTime = document.getElementById("date-time");

    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greetingText = "";
    if (currentHour < 12) {
        greetingText = "Guten Morgen, Lisa!";
    }
    else if (currentHour < 18) {
        greetingText = "Guten Tag Lisa!";
    }
    else {
        greetingText = "Gute Nacht Lisa!";
    }

    greeting.textContent = greetingText;

    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };

    const currentDate = new Intl.DateTimeFormat("id-ID", options).format(currentTime);

    dateTime.textContent = currentDate;
});
