const dayContent = document.querySelector("#day");
const christmasTime = new Date("2023-12-25");

function getClock(){
    const date = new Date();
    const day = christmasTime-date;
    const dDay = String(Math.floor(day / (1000*60*60*24))).padStart(3,"0");
    const dHour = String(Math.floor((day / (1000*60*60))%24)).padStart(2,"0");
    const dMinutes = String(Math.floor((day/ (1000*60)) % 60)).padStart(2,"0");
    const dSeconds = String(Math.floor((day/ (1000)) % 60)).padStart(2,"0");

    dayContent.innerText = `${dDay}d ${dHour}h ${dMinutes}m ${dSeconds}s`;
};

getClock();
setInterval(getClock,1000);