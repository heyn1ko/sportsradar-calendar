# Sports Calendar

## What is this?

This is a simple calendar that shows sports events for the current month. Each day with a sports event will have a little dot on it. You can also add new events during your session.

## How to Open This on Your Computer

Follow these steps to see the project on your computer:

1. **Download the Project**:

   - You can either:
     - **Clone the project** using Git (if you know how to do that), or
     - **Download it** as a ZIP file and then unzip it to a folder on your computer.

2. **Open the Project Folder**:

   - Go to the folder where you saved or downloaded the project.

3. **Open in a Code Editor**:

   - Open the folder in any code editor like **VS Code**, **Sublime Text**, or **Notepad++**.

4. **Open the `index.html` File**:

   - To see the calendar, just open the `index.html` file in your web browser (like Chrome or Firefox).
   - You can do this by **double-clicking** the `index.html` file, and it will open in your browser.

5. **Enjoy the Calendar**:
   - The calendar will show the days of the month, and if there's a sports event on a day, it will show a dot.
   - You can add new events (but they’ll disappear when you refresh the page, as we're not saving them permanently).

## How It Works

- **The Calendar**: It shows a grid of the current month, with each day labeled.
- **Events**: Events are stored in a file called `sportData.json`. When you open the calendar, it checks this file for any events and adds a dot to the correct day.
- **Adding Events**: You can add events, but it only lasts for the session (if you refresh the page, the events will go away).

## Files You’ll See

- **`index.html`**: The page you see in the browser (the structure of the calendar).
- **`styles.css`**: The file that makes the calendar look nice (colors, fonts, etc.).
- **`main.js`**: The JavaScript that makes the calendar work. It reads the event data and adds the dots to the calendar.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **JSON**
