// let object = {
//     userName: "Milan",
//     userAge: 24,
//     occupation: "Student"
// }
// //renaming an object 
// let {
//     userAge: age,
//     userName: name
// } = object; //now we can use age or name to access object's age or name . but we can not use userAge and userName anymore.
// console.log(age);
// console.log(name);

let company = {
    managers: {
        financial: {
            emp1: {
                code: 1,
                name: "Ajit Kumar Das",
                age: 48
            },
            emp2: {
                code: 2,
                name: "Bandana Das",
                age: 45
            },
            emp3: {
                code: 3,
                name: "Niyati Das",
                age: 60
            }
        },
        hr: {
            emp4: {
                code: 4,
                name: "Milan Kumar Das",
                age: 48
            },
        },
        lawers: {
            code: 5,
            name: "Suvankar Singha",
            age: 22
        }
    },
    developement: {
        web: {
            frontend: {
                emp1: {
                    code: 7,
                    name: "Rajat Maity",
                    age: 22
                }
            },
            backend: {
                emp9: {
                    code: 1,
                    name: "Dipak Singha",
                    age: 20
                }
            }

        }
    },
    design: {
        ux: {
            emp7: {
                code: 8,
                name: "Kiran Dutta",
                age: 30
            }
        }
    }
}

//accesing value

let { managers : {financial: {emp2: {code , name}}}} =company;
console.log(name);
let{developement: {...rest}} = company ;
console.log(rest)