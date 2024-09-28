const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 1
    },
    {
        name: "Jay",
        numOfYears: 1
    },
    {
        name: "Chinmoy",
        numOfYears: 5
    }
]

//return the names of person who have more than 3 years of exp

let result = employees.filter(value=> value.numOfYears >= 3  ).map(emp => emp.name) ;
console.log(result);