const display = document.getElementById('time-display');

        function getTime(){
            
            let now = new Date();
            
            let hour = now.getHours();
            
            let min = now.getMinutes();
            
            let sec = now.getSeconds();
            
            
        //logic for making the time readable to have double digits if under 10
            if(hour < 10){
                hour = `0${hour}`;
            }
            
            if(min < 10){
                min = `0${min}`;
            }
            
            if(sec < 10){
                sec = `0${sec}`;
            }
            
            display.textContent = `${hour}:${min}:${sec}`; // Template Literals improves JavaScript code readability when working with Strings.
        }
        
        setInterval(getTime, 1000);