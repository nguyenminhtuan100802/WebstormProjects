class School{
    constructor(id, name, birthYear) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
    }
    calculateAge(currentYear){
        return currentYear - this.birthYear;
    }
}
// student kế thừa từ lớp school
class Student extends School{
    constructor(id, name, birthYear, major){
        // từ khóa super gọi lại constructor khai báo từ lớp cha
        super(id, name, birthYear);
        this.major = major;
    }
    study(){
        console.log(this.name + " is studying " + this.major);
    }
}


const school = new School("123", "tuan1", 2002);
console.log(school.id);
console.log(school.calculateAge(2024));
const student = new Student("456", "tuan2", 2006, "CS");
console.log(student.calculateAge(2024));
student.study();

