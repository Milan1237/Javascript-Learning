/**
 * Throtling is performance optimization techinique that reduces the number of events handling function
 * 
 */

function handleScroll(event) {
    console.log('scrolled');
}


const throttle = (callback, delay) => {
    let isWating = false;
    return (...args) => {
        if (isWating) {
            return;
        }
        callback(...args);
        isWating = true;
        setTimeout(() => {
            isWating = false
        }, delay);
    }
}
const throttleScroll = throttle(handleScroll , 500);
const container = document.querySelector('.container');
container.addEventListener('scroll', throttleScroll);