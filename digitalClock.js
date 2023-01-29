let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");


let clock = setInterval(

    function time() {

        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let secs = date_now.getSeconds();
    
        if(hr < 10) {
            hr = '0' + hr;
        }
        if(min < 10) {
            min = '0' + min;
        }
        if(secs < 10) {
            secs = '0' + secs;
        }
    
        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = secs;
    
    
    
    }


)