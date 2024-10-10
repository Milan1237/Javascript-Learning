

//parent element
class Edible {
    constructor(color , type , isUnderGround){
        this.color = color;
        this.type = type;
        this.isUnderGround = isUnderGround; 
    }
}

class Potato extends Edible {
    constructor(color , type , isUnderGround , name , sabji){
        super(color , type , isUnderGround);
        this.name = name ;
        this.sabji = sabji;
    }

    display(){
        console.log({...this});
    }
}


const potato1 = new Potato('blue' , 'hard' , true , 'aalu' , 'aalu dum');
potato1.display();

