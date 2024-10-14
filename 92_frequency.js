/**
 * given array find the frequency of each item 
 * then return the number with max frequency
 * if two or more number's frequency is same then only return the maximum number between them
 */

const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];

function countFrequency(arr) {
    let maxFreqCount = 0 ;
    let maxFreqValue = 0 ;

    let maxFreqArray = [] ;
    const numberFrequencyObj = arr.reduce((acc, curr) =>
        curr in acc ? {
            ...acc,
            [curr]: acc[curr] + 1 
        } : {
            ...acc,
            [curr]: 1
        }, {});

    const numberFrequencyArray = Object.entries(numberFrequencyObj);
    for(let [key,value ] of numberFrequencyArray){
        if(maxFreqCount < value){
            maxFreqCount = value ; 
        }
    }
    for(let [key,value ] of numberFrequencyArray){
        if(maxFreqCount === value){
            maxFreqArray.push(key);
        }
    }

    for(let element of maxFreqArray){
        if(maxFreqValue < element){
            maxFreqValue = element ;
        }
    }
    
    console.log(maxFreqValue);

}

countFrequency(arr);