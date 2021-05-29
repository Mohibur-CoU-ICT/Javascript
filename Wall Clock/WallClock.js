function myClock(){
    let curDate = new Date(); //object of date()
    let curHour = curDate.getHours();
    let curMinute = curDate.getMinutes();
    let curSecond = curDate.getSeconds();

    let hrRatio = 30 * curHour + curMinute / 2; //converting current time
    let minRatio = 6 * curMinute + curSecond / 10;
    let secRatio = 6 * curSecond;

    hour.style.transform = `rotate(${hrRatio}deg)`;
    minute.style.transform = `rotate(${minRatio}deg)`;
    second.style.transform = `rotate(${secRatio}deg)`;
}

myClock();
setInterval(myClock, 1000);