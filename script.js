let times = new Date();
let h = times.getHours();
let m = times.getMinutes();

document.getElementById('hour').innerHTML = `${h}:${m}`;
document.getElementById('time').innerHTML = `${h}:${m}`;
