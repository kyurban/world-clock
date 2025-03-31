const dayjs = require ('dayjs');

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc)
dayjs.extend(timezone)

setInterval(updateTime, 1000)

function updateTime() {
    var timezone = dayjs.tz.setDefault("America/Los_Angeles");
    document.querySelector('.timezone').innerText = timezone;

    const now = dayjs().format('h:mm:ss');
    document.querySelector('.time').innerText = now;

    var date = dayjs().format('dddd, MMMM D, YYYY');
    document.querySelector('.date').innerText = date;
}