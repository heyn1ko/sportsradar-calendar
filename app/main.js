const currentDate = new Date();

const calendarHeader = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');

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

generateCalendar(currentDate);
