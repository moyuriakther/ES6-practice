// same class diye similar type er onek gulo object create 
class Student {
    constructor (sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Girls School';
    }
}
const student1 = new student (12, 'Moyuri');
const student2 = new student (22, 'keya');
const student3 = new student (32, 'mini');
console.log(student1, student2, student3);