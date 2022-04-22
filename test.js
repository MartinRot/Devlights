//scopes and variable declaration
var a = "Java";
var x = "Javascript";

const falsy = ""
const falsyObj = ""

function main() {

    console.log("inside block", a)
    console.log("inside block", x)    

}

function hello(){
    
    if(true){
        var a = "Javascript";
        let b = "C++";
        const c = "Python";

        console.log("inside block", a)
        console.log("inside block", b)
        console.log("inside block", c)
    }

}

//main()

//console.log("Falsy obj.length -> " + falsyObj.length )

/* if(falsy){
    console.log("Truthy value")
} else {
    console.log("Falsy value")
} */

const myCar = {
    color: "red",
    brand: "Toyota",
    wheels: 4,
    engine: { cylinders: 4, cv: 155},
    hello: () => {
        console.log("Hello!")
    },
};

//console.log(Object.keys(myCar)) //Muestra las claves del objeto
//console.log(Object.values(myCar)) //Muestra los valores del objeto
//console.log(myCar.hasOwnProperty("brand")) //Muestra true o false si el objeto tiene ese valor en alguna de sus keys o valores
//console.log(myCar["brand"]) //Muestra el contenido de esa key
//console.log(myCar.brand) //Muestra la prop brand


const students = [
    { name: "Peter", age: 35, language: "C++"},
    { name: "Sarah", age: 17, language: "Java"},
    { name: "John", age: 33, language: "Ruby"},
    { name: "Isaac", age: 40, language: "C#"},
    { name: "Susan", age: 28, language: "C++"},
    { name: "Martin", age: 12, language: "C++"},
]


/* function filterAge(student, i){
//    console.log(i)
//    console.log(student)
    return student.age > 25
} */

//Funcion filter
//console.log( students.filter((student) => student.age > 25) ) 

//Funcion map
//console.log(students.map(student => student.name))

//Funcion Reduce -> se usa para sumar valores
/* console.log(
    students.reduce(
        (previousValue, currentValue) => previousValue + currentValue.age,
        0
    )
) */

// Destructuring assignment
/*
const languages = ["Python", "Javascript", "C++", "C#", "Ruby"];

const [first, second, ...rest] = languages;

const obj = { name: "Hello world" }
const { brand, color, ...rest2 } = myCar;

console.log({ first, second })

*/

// ------- //


//callbacks
function makeAsync(fun){
    return setTimeout(fun, 300)
}

function test(){
    console.log("test1")
    //console.log("test2")
    makeAsync(() => console.log("test2")) 
    timeout(() => console.log("test2")).then(() => {console.log("fullfilled")})
    console.log("test3")
}

test()

//Promises
function timeout(fun) {
    return new Promise((resolve) => setTimeout(resolve(fun()), 300))
}

function fetchData() {
    const url = "http://randomuser.me/api/?page=3&results=10&seed=abc"
    return fetch(url).then((response) => response.json());
}

function fetchTest(){
    fetchData().then((data) => console.log(data))
}

//async await
async function fetchAsyncAwaitTest(){
    try{
        const data = await fetchData()
        console.log(data)
    } catch (error) {
        console.log("Error", error.message)
    }
}

// npm create-react-app my-app
// npx create-react-app my-app