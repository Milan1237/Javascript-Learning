# Execution Context in Javascript

In browser we have Javascript runtime Engine. When a browser encounters a Javascript code or file, it activates the JS engine.
Basically, a Javascript engine is used execute a code. When a Javascript is encountered by js engine then it creates environment for the execution purpose called execution context. Execution context is used to allocate memory and execute the code .


## There are two types of Execution Context
### GEC : Global Execution Context:
        There are only one Gloabl Execution Context of a Application. Because all the js file is joined in  a javascript file called Bundle.js.
### FEC : Functional Exectuion Context
        There can be more than one functional Execution context because a file of javascript can have more than one function.

## The Execution Context executes the code in a 2 stage process
### 1: Creation: 
All the variables, created with var are allocated memory with the value of undefined . And also it allocates memory for the functions; 

### 2: Execution :
Javascript is single thread synchronus language. In other words, javascript code is being executed by js engine line by line, left to right .

https://www.geeksforgeeks.org/batch/fsrnl-54/track/beg-to-adv-how-js-works/article/ODU4Mg%3D%3D 