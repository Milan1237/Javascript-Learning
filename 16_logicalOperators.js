// There are basically 4 types of Logical operator
// && operator -> if all the comparison are true then only && gives true
// || operator -> if any of the comparison are true then it gives true
// ! operator -> It basically converts the boolean value from false to true and vice-versa
// Nullish Coalescing operator

const math = 89;
const chem = 96;
const bio = 80 ;
const phy =  90;

if(math > 90 && chem > 80 && phy > 80){
    console.log("you are eligible for eng..")
}
else if(bio > 90 || chem> 95 || phy > 90){
    console.log("you are eligible for medical")
}

const isEligible = false ;

if(!isEligible){
    console.log("you are eligible");
}else{
    console.log("you are not eligible");
}

const Milan = {
    HTML: true ,
    css: true,
    javascript : true,
    react : false,
    backend: false
}

if(Milan.HTML && Milan.css && Milan.javascript && Milan.react && Milan.backend){
    console.log("Milan is Full stack developer")
}else if((Milan.HTML && Milan.css && Milan.javascript && Milan.react) || Milan.backend){
    console.log("Milan is atleast an front-end developer")
}else if(Milan.HTML || Milan.css || Milan.javascript || Milan.react || Milan.backend){
    console.log("Milan is basic student aspiring to be Softare developer");
}else{
    console.log("milan only watches other does not code at all");
}
