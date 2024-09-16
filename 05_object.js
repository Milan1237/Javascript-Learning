// Object is an non-premitive data type. Means it can hold more than one value inside it.
// An object can be constructed :
        // 1> Via object literals or curly braces {}
        // 2> Via new constructor;

    let objectViaCurly ={
        name: "Milan",
        age:23 ,
        isMarried: false 
    }

    let objectViaConstructor= new Object();

    objectViaConstructor.name = "milan";
    objectViaConstructor.age = 23 ; 
    console.log(objectViaConstructor);

    // For good readability of the code we create object via object literal or curly braces