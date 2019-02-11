class Chronometer {
    constructor(){
       this.currentTime = 0;
       this.intervalId = 0;
    }
    
    startClick(){
        function add(){
            this.currentTime += 1;
            this.setTime();
        }
        this.intervalId = setInterval(add.bind(this), 1000);
    }

    setMinutes(){
        let minutes = Math.floor(this.currentTime / 60);
        return minutes;
    }

    setSeconds(){
        let seconds = this.currentTime % 60;
        return seconds;
    }

    twoDigitsNumber(digits){
        if (digits < 10){
          digits = '0' + digits;
        }
        return digits.toString();
    }

    setTime() {
        let minutes = this.setMinutes();
        let seconds = this.setSeconds();
        minutes = this.twoDigitsNumber(minutes);
        seconds = this.twoDigitsNumber(seconds);
    }

    stopClick(){
        clearInterval(this.intervalId);
    }

    resetClick(){
        this.currentTime = 0;
    }
 }

