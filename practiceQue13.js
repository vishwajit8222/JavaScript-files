//Que 1: create a class User with 2 properties, name & email.
//it also has a method called viewData() that allows user to view web data.

let data = "secret information";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ",data);
    }
}

let student1 = new User("vishwajit","vishwajit8222@gmail.com");
let student2 = new User("vish","vish1111@gmail.com");

student1.viewData();
student2.viewData();

//Que 2:create a new class called Admin which inherits from User.
//Add a new method called editData to admin that allows its to edit web data.

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "some new value";
    }
}

let admin1 = new Admin("admin", "admin@clg.com");