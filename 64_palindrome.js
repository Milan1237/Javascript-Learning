let isPalindrome = (str)=>{
    // let array = str.split("");
    // let reversedArray = array.reverse();
    // let reversedString = reversedArray.join("");
    let reversedString = str.split("").reverse().join("");
    if(reversedString === str) return true;
    else return false ;
}

let str = "kiran";
let palindrome = isPalindrome(str);
palindrome ? console.log("It is a palindrome"): console.log("It is not a palindrome");