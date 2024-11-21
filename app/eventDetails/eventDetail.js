// Parse query parameters
const urlParams = new URLSearchParams(window.location.search);

document.getElementById('event-date').textContent = `Date: ${urlParams.get(
  'date',
)}`;
document.getElementById('event-time').textContent = `Time: ${urlParams.get(
  'time',
)}`;
document.getElementById('event-sport').textContent = `Sport: ${urlParams.get(
  'sport',
)}`;
document.getElementById('event-teams').textContent = `Teams: ${urlParams.get(
  'teams',
)}`;
