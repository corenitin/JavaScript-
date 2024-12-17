// const tinderUser = new Object()   #Singleton obj
const tinderUser = {}   // Non singleton obj
tinderUser.id = "123abc"
tinderUser.name = "nitin"
tinderUser.InLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "nitin@gmail.com",
    fullname: {
        userfullname: {
            fristname: "nitin",
            lastname: "parmar"
        }
    }
}
// console.log(regularuser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// when objects comes from database or users give the data!
const users = [
    {
        id: 1,
        email: "nitin@gmial.com"
    },
    {
        id: 1,
        email: "nitin@gmial.com"
    },
    {
        id: 1,
        email: "nitin@gmial.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('InLoggedIn'));
// console.log(tinderUser.propertyIsEnumerable('InLoggedIn'));

const course ={
    coursename: "Js for beginners",
    price: "999",
    courseInstructor: "nitin"
}

const {courseInstructor} = course
console.log(courseInstructor);





