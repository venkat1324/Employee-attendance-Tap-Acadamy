// Demo interactivity
const statusText = document.getElementById('statusText');

document.getElementById('checkInBtn').addEventListener('click', () => {
  statusText.textContent = 'Checked in at ' + new Date().toLocaleTimeString();
  alert('Checked in (demo). Call /api/attendance/checkin to persist.');
});

document.getElementById('checkOutBtn').addEventListener('click', () => {
  statusText.textContent = 'Checked out at ' + new Date().toLocaleTimeString();
  alert('Checked out (demo). Call /api/attendance/checkout to persist.');
});