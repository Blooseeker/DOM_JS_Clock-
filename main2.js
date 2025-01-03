// 36.4 DOM JavaScript Digital Clock - Hiển thị thời gian thực với DOM - học DOM JavaScript qua Ví dụ
// https://www.youtube.com/watch?v=K_NOvHhpoPI
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  // ghép chuỗi giờ phút giây lại với nhau
  const timeString = `${hours}: ${minutes}: ${seconds}`;
  let hienGio = document.getElementById("clock");
  hienGio.innerHTML = timeString;
}
setInterval(updateClock, 1000);
