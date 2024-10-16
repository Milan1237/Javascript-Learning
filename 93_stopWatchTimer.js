const display = document.querySelector('.display');
const btnContainer = document.querySelector('.btnContainer');
let seconds = 0;
let minutes = 0;
let hour = 0;
let timerId;

btnContainer.addEventListener('click', handleClick);

function makeDisplayNumber(seconds, minutes, hour) {
    return `${hour < 10 ? '0'+hour: hour } : ${minutes < 10 ? '0'+minutes: minutes } : ${seconds < 10 ? '0'+seconds: seconds } `
}

function handleClick(event) {
    const name = event.target.name;
    switch (name) {
        case 'start':
            timerId = setInterval(() => {
                seconds++;
                if (seconds > 58) {
                    seconds = 0;
                    minutes++;
                }
                if (minutes > 58) {
                    hour++;
                    seconds = 0;
                    minutes = 0;
                }
                display.innerText = makeDisplayNumber(seconds , minutes , hour);
            }, 0);
            break ;

        case 'stop': clearInterval(timerId) ;
                break ; 

        case 'reset': clearInterval(timerId);
                    seconds = 0 ; 
                    minutes =0 ; 
                    hour = 0 ;
                    display.innerText = makeDisplayNumber(seconds , minutes , hour);
                    break ;
    }
}