// app.js
const defaultMessages = [
    "¡Eres capaz de lograr todo lo que te propongas!",
    "¡Hoy es un gran día para alcanzar tus metas!",
    "¡La perseverancia es la clave del éxito!",
    "¡No te rindas, sigue adelante!",
    "¡Cree en ti y todo será posible!"
];

document.addEventListener("DOMContentLoaded", () => {
    const messagesList = document.getElementById('messages-list');
    defaultMessages.forEach(msg => {
        const li = document.createElement('li');
        li.innerText = msg;
        messagesList.appendChild(li);
    });
});

function setAlarm() {
    const alarmTime = document.getElementById('alarm-time').value;
    const alarmMessage = document.getElementById('alarm-message').value || getRandomMessage();

    if (!alarmTime) {
        alert("Por favor, ingresa una hora válida para la alarma.");
        return;
    }

    const alarmStatus = document.getElementById('alarm-status');
    alarmStatus.innerText = `Alarma configurada para las ${alarmTime}.`;

    const alarmDate = new Date();
    const currentTime = new Date();

    const [hours, minutes] = alarmTime.split(':');
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);

    const timeToAlarm = alarmDate.getTime() - currentTime.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            triggerAlarm(alarmMessage);
        }, timeToAlarm);
    } else {
        alert("La hora seleccionada ya ha pasado. Por favor, configura una hora futura.");
    }
}

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * defaultMessages.length);
    return defaultMessages[randomIndex];
}

function triggerAlarm(message) {
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.play();

    const alarmStatus = document.getElementById('alarm-status');
    alarmStatus.innerText = `¡Alarma! ${message}`;
    alert(message);
}