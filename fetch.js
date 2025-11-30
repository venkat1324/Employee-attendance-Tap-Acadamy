fetch('/api/attendance/checkin', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log(data));