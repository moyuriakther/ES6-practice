
class Parent{
    constructor(){
        this.fatherName ='Rabiul Islam';
    }
}
class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ //class er vitore function korte function likhte hoyna just function name likhlei hobe.
            return this.name + " "+this.fatherName;
    }
}
const baby = new Child('Moyuri');
const baby2 = new Child('Riva');
console.log(baby.getFullName(), baby2.getFullName());