class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    addMember(member) {
        if (member instanceof Teacher) {
            this.teachers.push(member);
        } else if (member instanceof Student) {
            this.students.push(member);
        } else {
            throw new Error('Member must be a Teacher or Student');
        }
    }
    removeMember(member) {
        if (member instanceof Teacher) {
            const ind = this.teachers.indexOf(member);
            if (ind !== -1) {
                this.teachers.splice(ind, 1);
            }
        } else if(member instanceof Student){
            const ind = thus.students.indexOf(member);
            if(ind !== -1){
                this.students.splice(ind, 1);
            }
        }
    }
    startLesson() {
     this.teachers.forEach((teacher) => teacher.energy -= 5);
     this.students.forEach((student) => student.energy -= 2);

    }
}

class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }
    info() {
        return `${this.name} is a ${this.role} at the university. They are ${this.age} years old and have ${this.energy} energy.`;
    }
}
class Teacher extends UniversityMember {
    constructor(name, age) {
        super(name, age, 'Teacher');
    }
}
class Student extends UniversityMember {
    constructor(name, age) {
        super(name, age, 'Student');
    }
}
