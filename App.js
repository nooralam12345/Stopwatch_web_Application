window.onload = function () {
    let minutes = 0;
    let second = 0;
    let hour = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendHour = document.querySelector('#hour');
    let appendSecond = document.querySelector('#second');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;




    const startTimer = ()=> {
        hour++;
        if(hour<=9){
            appendHour.innerHTML = '0' + hour;
        }
        if(hour > 9){
            appendHour.innerHTML = hour;
        }

        if(hour > 90) {
            second++;
            appendSecond.innerHTML = '0' + second;
            hour = 0;
            appendHour.innerHTML = '0' + 0;
        }

        if(second > 9) {
            appendSecond.innerHTML = second;
        }

        if(second > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            second = 0;
            appendSecond.innerHTML = '0' + 0;
        }
    };


    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        hour = '00';
        second = '00';
        minutes = '00';
        appendHour.innerHTML = hour;
        appendSecond.innerHTML = second;
        appendMinutes.innerHTML = minutes;
    };



    

    
};