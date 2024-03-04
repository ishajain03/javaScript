// const tinderUser = new  Object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = 'isha jain'
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularUser = {
    email: "ishajain@hgf.com",
    fullname : {
        userfullname : {
            firstname : "isha",
            lastname : "jain"
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {  3:"c", 4:"d",  5:"e"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "i@hg.com"
    },
    {
        id: 1,
        email: "i@hg.com"
    },
    {
        id: 1,
        email: "i@hg.com"
    }
]

// user[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course = {
       coursename: "JavaScript",
       price: "999",
       courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
// const {courseInstructor : instructor} = course // in this we will use "instructor" to access courseInstructor
console.log(courseInstructor);