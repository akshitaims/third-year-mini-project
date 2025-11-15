// Dummy alert data (you can connect this to Node.js later)
let alerts = [
  { title: "Heavy Rainfall Warning", message: "Stay indoors. Avoid low-lying areas." },
  { title: "Flood Alert", message: "Water level rising in nearby rivers. Move to safer zones." },
];

// Display alerts
function displayAlerts() {
  const alertList = document.getElementById('alertList');
  alertList.innerHTML = "";
  alerts.forEach(alert => {
    const div = document.createElement('div');
    div.className = 'alert-item';
    div.innerHTML = `<strong>${alert.title}</strong><br>${alert.message}`;
    alertList.appendChild(div);
  });
}

// Refresh alerts (simulate fetching from backend)
function fetchAlerts() {
  alert("Refreshing alerts...");
  displayAlerts();
}

// Handle new alert posting
document.getElementById('alertForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('alertTitle').value;
  const message = document.getElementById('alertMessage').value;
  alerts.push({ title, message });
  displayAlerts();
  e.target.reset();
  alert("New alert posted successfully!");
});

// Handle emergency message submission
document.getElementById('messageForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const message = document.getElementById('userMessage').value;
  alert(`Message from ${name} (${email}):\n${message}`);
  e.target.reset();
});

displayAlerts();
