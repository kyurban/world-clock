const dayjs = require ('dayjs');

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

const MicroModal = require('micromodal');
document.addEventListener("DOMContentLoaded", function () {
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true, 
        awaitCloseAnimation: true,
        onClose: function(modal) {
            if (document.activeElement.tagName === "SELECT") {
                return false;
            }
        }
    });

    const icon = document.getElementById('icon');
    icon.addEventListener('click', function() {
        MicroModal.show('modal-1');
    });

    const closeButton = document.querySelector('modal__close');
    closeButton.addEventListener('click', function() {
        MicroModal.close('modal-1');
    });
});

dayjs.extend(utc)
dayjs.extend(timezone)

setInterval(updateTime, 1000)

function updateTime() {
    const defaultTimezone = "America/Los_Angeles";
    var timezone = defaultTimezone.replace(/_/g, " ");
    document.querySelector('.timezone').innerText = timezone;

    const now = dayjs().format('hh:mm:ss');
    document.querySelector('.time').innerText = now;

    var date = dayjs().format('dddd, MMMM D, YYYY');
    document.querySelector('.date').innerText = date;
}

//browserify main.js -o bundle.js