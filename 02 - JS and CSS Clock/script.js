const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secondsDegree = (seconds * 6 + 90) % 360;
    const minutesDegree = (minutes * 6 + seconds / 10 + 90) % 360;
    const hoursDegree = (hours * 15 + seconds / 120 + 90) % 360;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(date);
}

setInterval(setTime, 1000);