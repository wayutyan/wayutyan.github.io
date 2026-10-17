const targetDate = new Date("2027-09-09T00:00:00").getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const diff =targetDate -now;

    if (diff <=0) {
        document.querySelector(".oya").innerHTML = "<p>あたいの最強な日になったわね！<p>";
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();