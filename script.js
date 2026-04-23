// Country-Timezone Mapping
const countries = [
    { name: 'India', timezone: 'Asia/Kolkata' },
    { name: 'USA (Eastern)', timezone: 'America/New_York' },
    { name: 'UK', timezone: 'Europe/London' },
    { name: 'Japan', timezone: 'Asia/Tokyo' },
    { name: 'Australia (Sydney)', timezone: 'Australia/Sydney' },
    { name: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Netherlands', timezone: 'Europe/Amsterdam' }
];

let selectedTimezone = countries[0].timezone; // Default to India

// Get DOM elements
const clockElement = document.getElementById('clock');
const countrySelect = document.getElementById('country-select');
const timezoneLabel = document.getElementById('timezone-label');

/**
 * Update the clock display with the current time in the selected timezone
 */
function updateClock() {
    const now = new Date();

    // Format the time in 24-hour format (HH:MM:SS)
    const formatter24 = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: selectedTimezone
    });

    // Format the time in 12-hour format with AM/PM
    const formatter12 = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: selectedTimezone
    });

    const time24 = formatter24.format(now);
    const time12 = formatter12.format(now);

    // Display both formats
    clockElement.innerHTML = `<div class="time-24hr">${time24}</div><div class="time-12hr">${time12}</div>`;
}

/**
 * Populate the dropdown with country options
 */
function populateDropdown() {
    countries.forEach((country, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });

    // Set default value
    countrySelect.value = 0;
    timezoneLabel.textContent = countries[0].timezone;
}

/**
 * Handle dropdown change event
 */
countrySelect.addEventListener('change', (event) => {
    const selectedIndex = parseInt(event.target.value);
    if (selectedIndex >= 0 && selectedIndex < countries.length) {
        selectedTimezone = countries[selectedIndex].timezone;
        timezoneLabel.textContent = selectedTimezone;
        updateClock(); // Update immediately when country is selected
    }
});

/**
 * Initialize the application
 */
function init() {
    populateDropdown();
    updateClock();

    // Update clock every second
    setInterval(updateClock, 1000);
}

// Start the application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
