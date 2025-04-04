const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const MicroModal = require('micromodal');

// Extend Day.js
dayjs.extend(utc);
dayjs.extend(timezone);

// Set default timezone
let defaultTimezone = dayjs.tz.guess();
dayjs.tz.setDefault(defaultTimezone);

document.addEventListener("DOMContentLoaded", function () {
    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
        onClose: function (modal) {
            if (document.activeElement.tagName === "SELECT") {
                return false;
            }
        }
    });

    const icon = document.getElementById('icon');
    icon.addEventListener('click', function () {
        MicroModal.show('modal-1');
    });

    const applyButton = document.getElementById('apply-timezone');
    applyButton.addEventListener('click', function () {
        const timezoneInput = document.getElementById('timezone-select').value;

        // Set new default timezone
        defaultTimezone = timezoneInput;
        dayjs.tz.setDefault(defaultTimezone);

        // Update UI immediately
        updateTime();
        MicroModal.close('modal-1');
    });

    // Start ticking
    setInterval(updateTime, 1000);
    updateTime();
});

function updateTime() {
    // Get current time in the default timezone
    const now = dayjs().tz(defaultTimezone);

    // Update UI
    document.querySelector('.timezone').innerText = defaultTimezone.replace(/_/g, " ");
    document.querySelector('.time').innerText = now.format('hh:mm:ss');
    document.querySelector('.date').innerText = now.format('dddd, MMMM D, YYYY');
}

//browserify main.js -o bundle.js