# Task Breakdown

## 1. Set up project and create basic HTML structure

- Create `index.html` file with a basic structure
- Add `head` and `body` tags
- Linked external CSS and JS files

## 2. Style the calendar

- Create `styles.css` to style the calendar
- Implement a flexbox layout for calendar
- Style calendar header and grid

## 3. Set up basic JavaScript for generating calendar

- Create `main.js`
- Add JavaScript to generate the calendar for the current month
- Display the month and year in the header
- Display days in a grid format

## 4. Add JSON for event data

- Implement `sportData.json` file with sample sports events data
- Add date, time, sport, and teams for each event from brief

## 5. Fetch and display events on the calendar

- Add `fetch` functionality to load the events from `sportdata.json`
- Check with `console.log` that the data was being fetched correctly (inspect, console)
- Display events on specific days on the calendar

## 6. Add markers for events on the calendar

- Use a dot to indicate arranged events

## 7. Make the event days clickable

- Made the event days clickable by adding event listeners to the day divs
- Redirected users to the event detail page (`eventDetail.html`) with query parameters (date, time, sport, teams)

## 8. Add Event Functionality (Task 3)

- Create a navbar
- Implemented a dynamic form to add new events during runtime.
- Form fields included: Event Name, Date, Time, Sport, and Teams.
- Submitted data dynamically updated the calendar with a new event.
- Added an X button to allow user to cancel.
- Styled the form and ensured proper alignment and spacing.
