function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("N");

}
// sayMyName()

function addTwoNumbers(num1, num2) { // when you define function it is called parameter eg;(num1, num2)
    // console.log(num1 + num2);
    // define function as variable form
    // let result = num1 + num2;
    // return result
    // 3rd way
    return num1 + num2
}
// addTwoNumbers(3, 4) // when you call function (3, 4) it is called arguments.
// console.log(typeof addTwoNumbers); 

const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function loginUserMessage(username = "new"){
    if (username === undefined) { // username === undefined same as !username
        console.log("Plsease enter the username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("nitin"))
console.log(loginUserMessage())

