class User {
    #id; // Private property
    
    constructor(id) {
        this.#id = id;
    }

    // Method to access the private ID
    getId() {
        return this.#id;
    }

    // Method to change the private ID
    changeId(newId) {
        this.#id = newId;
    }
}

const user = new User('123');
console.log(user.getId()); // Output: 123

// Attempting to access or modify the private property directly will result in an error
// user.#id = '321'; // SyntaxError: Private field '#id' must be declared in an enclosing class

// Changing the ID through the class method
user.changeId('321');
console.log(user.getId()); // Output: 321