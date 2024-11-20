const currentDate = new Date();
const calendarHeader = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');

// Fetch and parse the JSON file (optional, for marking existing events)
fetch('sportData.json')
  .then((response) => response.json()) // Parse JSON
  .then((data) => {
    console.log(data); // Check the parsed JSON in the console
    markEventsOnCalendar(data); // Pass data to another function
  })
  .catch((error) => console.error('Error fetching JSON:', error));

function generateCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  calendarHeader.textContent = date.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  calendarGrid.innerHTML = ''; // Clear the grid to refresh it

  const firstDay = new Date(year, month, 1).getDay(); // Get the first day of the month
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month

  // Add empty divs for the days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement('div');
    calendarGrid.appendChild(emptyDiv); // Empty divs for padding
  }

  // Add divs for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    const daySpan = document.createElement('span');
    daySpan.textContent = day; // Set the day number
    dayDiv.appendChild(daySpan); // Append the span to the dayDiv
    calendarGrid.appendChild(dayDiv); // Add the dayDiv to the calendar grid
  }
}

// Function to mark events on the calendar (and make it clickable)
function markEventsOnCalendar(events) {
  events.forEach((event) => {
    const eventDate = new Date(event.date);
    const eventDay = eventDate.getDate();
    const dayDivs = document.querySelectorAll('#calendar-grid div');
    const dayDiv = dayDivs[eventDay + new Date(event.date).getDay() - 1]; // Adjust index for zero-based array

    if (dayDiv) {
      // Add a visible marker to indicate the event
      const eventMarker = document.createElement('span');
      eventMarker.textContent = '•';
      eventMarker.style.color = 'red';
      eventMarker.style.fontSize = '60px';
      dayDiv.appendChild(eventMarker); // Append the marker to the day div

      // Make the day clickable to redirect to the event details page
      dayDiv.style.cursor = 'pointer'; // Indicate it's clickable
      dayDiv.addEventListener('click', () => {
        alert(
          `Event: ${event.sport}\nDate: ${event.date}\nTime: ${event.time}\nTeams: ${event.teams}`,
        );
      });
    }
  });
}

function handleAddNewClick() {
  // Create the form dynamically
  const form = document.createElement('form');
  form.id = 'add-event-form';

  form.innerHTML = `
    <form id="add-event-form">
    <a href="#" id="cancel-form">X</a> <!-- Change button to link -->
    <h1>ADD NEW EVENT</h1>
  <label for="event-name">Event Name:</label>
  <input type="text" id="event-name" required />

  <label for="event-date">Event Date:</label>
  <input type="date" id="event-date" required />

  <label for="event-time">Event Time:</label>
  <input type="time" id="event-time" required />

  <label for="event-sport">Sport:</label>
  <input type="text" id="event-sport" required />

  <label for="event-teams">Teams:</label>
  <input type="text" id="event-teams" required />
  <button type="submit">Submit</button>

</form>

  `;

  // Append the form to the body or a container
  document.body.appendChild(form);

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventSport = document.getElementById('event-sport').value;
    const eventTeams = document.getElementById('event-teams').value;

    // Create an event object
    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      sport: eventSport,
      teams: eventTeams,
    };

    // Log the event data
    console.log('New Event:', newEvent);

    // Add the new event to the calendar
    addEventToCalendar(newEvent);

    // After submission, remove the form
    form.remove();
  });

  // Cancel button functionality to remove the form
  const cancelButton = document.getElementById('cancel-form');
  cancelButton.addEventListener('click', () => {
    form.remove(); // Remove the form if user clicks "Cancel"
  });
}

function addEventToCalendar(eventData) {
  const eventDate = new Date(eventData.date);
  const eventDay = eventDate.getDate(); // Get the day of the month for the event

  // Find the corresponding div for the day
  const dayDivs = document.querySelectorAll('#calendar-grid div');
  const dayDiv = dayDivs[eventDay + new Date(eventData.date).getDay() - 1]; // Adjust index for zero-based array

  if (dayDiv) {
    // Add a visible marker to indicate the event
    const eventMarker = document.createElement('span');
    eventMarker.textContent = '•';
    eventMarker.style.color = 'blue'; // Choose a color for the new event
    eventMarker.style.fontSize = '60px';
    dayDiv.appendChild(eventMarker); // Append the marker to the day div

    // Make the day clickable to show event details
    dayDiv.style.cursor = 'pointer';
    dayDiv.addEventListener('click', () => {
      alert(
        `Event: ${eventData.name}\nDate: ${eventData.date}\nTime: ${eventData.time}\nSport: ${eventData.sport}\nTeams: ${eventData.teams}`,
      );
    });
  }
}

// Event listener for the "Add New" button
document.addEventListener('DOMContentLoaded', () => {
  const addNewButton = document.getElementById('add-new'); // Ensure this is the correct ID
  addNewButton.addEventListener('click', handleAddNewClick);
});

// Generate the calendar on page load
generateCalendar(currentDate);
