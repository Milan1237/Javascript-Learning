const familyMembers = [
    {
        name: "Narsingrao",
        age: 56
    },
    {
        name: "Padma",
        age: 52
    },
    {
        name: "Poonam",
        age: 30
    },
    {
        name: "Prakash",
        age: 27
    },
    {
        name: "Ashish",
        age: 50
    }
];

const totalAge = familyMembers.reduce((acc,curr)=> acc + curr.age , 0);
const AverageAge = totalAge / familyMembers.length ;
console.log("average age is ", AverageAge);