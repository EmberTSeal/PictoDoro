
let time
let startMinutes
let countdownEl
let mode = 0 //0 is dark
let iteration = 0;

function selectTimer() {
    var select = document.getElementById("select-menu");
    var value = select.value;
    if (value == '25min') {
        document.getElementById("timer-25").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if (value == '50min') {
        document.getElementById("timer-50").classList.remove("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("timer-90").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");
    }
    else if (value == '90min') {
        document.getElementById("timer-90").classList.remove("d-none");
        document.getElementById("timer-50").classList.add("d-none");
        document.getElementById("timer-25").classList.add("d-none");
        document.getElementById("start").classList.remove("d-none");

    }
}

function start() {
    document.getElementById("main").classList.add("d-none");
    document.getElementById("start").classList.add("d-none");
    startTimer();
}

function startTimer() {
    let select = document.getElementById("select-menu");
    let value = select.value;
    if (value == '25min') {
        startMinutes = 25
        countdownEl = document.getElementById('timer-25-val');
    }
    else if (value == '50min') {
        startMinutes = 50
        countdownEl = document.getElementById('timer-50-val');
    }
    else if (value == '90min') {
        startMinutes = 90
        countdownEl = document.getElementById('timer-90-val');
    }
    time = startMinutes * 60
    timeInterval = setInterval(updateTime, 1000);
    document.getElementById("end").classList.remove("d-none")
    document.getElementById("restart").classList.remove("d-none")
    document.getElementById('timer-quote').classList.remove('d-none');
}

function updateTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(timeInterval);
    }
}

function endTimer() {
    clearInterval(timeInterval);
    countdownEl.innerHTML = `00 : 00`;
    if (iteration == 9) {
        setTimeout(imageCall, 300)
    }
    else {
        iteration++;
        setTimeout(showRewardBlock, 300)
    }
}

function restartTimer() {
    if (iteration != 0) {
        hideReward();
        countdownEl.classList.remove("d-none")
    }
    clearInterval(timeInterval)
    startTimer();
}

function showRewardBlock() {
    hideAfterDone();
    let imgBlock = document.getElementById("reward-block");
    imgBlock.classList.remove('d-none')
    imgBlock.innerHTML = `<img src = "images/attachments/0${iteration}.jpg">`
    imgBlock.innerHTML = `<img src = "images/attachments/0${iteration}.jpg">`
    document.getElementById('motivate').classList.remove('d-none')
    showRestartButton();
}

function imageCall() {
    hideAfterDone();
    document.getElementById('story-image').classList.remove("d-none")
    document.getElementById('story').classList.remove("d-none")

}

function hideAfterDone() {
    countdownEl.classList.add("d-none")
    document.getElementById("end").classList.add("d-none")
    document.getElementById("restart").classList.add("d-none")
    document.getElementById("timer-quote").classList.add("d-none")
    document.getElementById("reward-message").classList.remove("d-none")
}

function hideReward() {
    document.getElementById("reward-message").classList.add("d-none")
    document.getElementById("reward-block").classList.add("d-none")
    document.getElementById("motivate").classList.add("d-none")
}

function showRestartButton() {
    document.getElementById('restart').classList.remove("d-none")
}

function modeChange() {
    if (mode == 0) {  //if dark
        document.getElementById("body").classList.add("light")
        document.getElementById("body").classList.remove("dark")
        document.getElementById("mode-light").classList.add("d-none")  //sun icon
        document.getElementById("mode-dark").classList.remove("d-none")  //moon icon
        mode = 1;
        for (let i = 0; i <= 2; i++)
            document.getElementsByClassName("card")[i].classList.remove("dark-card")
        document.getElementById("home").classList.add("d-none")
        document.getElementById("home-dark").classList.remove("d-none")
        document.getElementById("headerContent").classList.remove("dark-head")
        document.getElementById("headerContent").classList.add("light-head")
    }
    else {
        document.getElementById("body").classList.add("dark")
        document.getElementById("body").classList.remove("light")
        document.getElementById("mode-light").classList.remove("d-none")  //sun icon
        document.getElementById("mode-dark").classList.add("d-none")  //moon icon
        mode = 0
        for (let i = 0; i <= 2; i++)
            document.getElementsByClassName("card")[i].classList.add("dark-card")
        document.getElementById("home").classList.remove("d-none")
        document.getElementById("home-dark").classList.add("d-none")
        document.getElementById("headerContent").classList.add("dark-head")
        document.getElementById("headerContent").classList.remove("light-head")
    }
}

function home() {
    window.open("index.html", "_self")
}