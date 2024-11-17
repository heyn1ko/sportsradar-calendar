const currentDate = new Date();

const calendarHeader = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');

// --- > FETCH & PARSE JSON FILE
fetch('sportData.json')
  .then((response) => response.json()) // PARSE JSON
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

  calendarGrid.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement('div');
    calendarGrid.appendChild(emptyDiv);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    calendarGrid.appendChild(dayDiv);
  }
}
// --- Function to mark events on the calendar ---
function markEventsOnCalendar(events) {
  // For each event in the JSON, find the corresponding day on the calendar and mark it
  events.forEach((event) => {
    const eventDate = new Date(event.date);
    const eventDay = eventDate.getDate(); // Get the day of the month for the event

    const dayDivs = document.querySelectorAll('#calendar-grid div');
    const dayDiv = dayDivs[eventDay - 1]; // Adjust index for zero-based array

    if (dayDiv) {
      const eventMarker = document.createElement('span');
      eventMarker.textContent = '•'; // Dot marker to represent an event
      eventMarker.style.color = 'red'; // Change color for visibility
      eventMarker.style.fontSize = '20px'; // Make the marker bigger
      dayDiv.appendChild(eventMarker); // Append the marker to the day div
    }
  });
}

generateCalendar(currentDate);
