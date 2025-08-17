const video = document.getElementById("video");
const statusText = document.getElementById("status");

// Request camera access
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Camera Error:", err);
    statusText.innerText = "Status: Camera access denied!";
    statusText.style.color = "red";
  });

function markAttendance() {
  const now = new Date();
  const time = now.toLocaleTimeString();

  // Simulated "face matched" animation
  statusText.innerHTML = `<span style="color: lightgreen;">✅ Face matched</span><br>Attendance marked at <strong>${time}</strong>`;
  statusText.style.border = "1px solid lightgreen";
}
