const secondHand = document.querySelector('.ss-hand');
const minuteHand = document.querySelector('.mn-hand');
const hoursHand = document.querySelector('.hh-hand');
function setDate () {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    // converting seconds into percentage
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    // console.log('seconds: ', secondsDeg);

    // converting minutes into percentage
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    // console.log('minutes: ', minutesDeg);

    // converting hours into percentage
    const hoursDeg = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
    console.log('hours: ', hoursDeg, 'minutes: ', minutes, 'seconds: ', seconds);
}

setInterval(setDate, 1000); // 1초마다 setDate 함수 실행