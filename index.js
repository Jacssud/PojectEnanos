var userName = prompt("Qual é o seu nome?");
var userAge = prompt("Qual é a sua idade?");
var userEmail = prompt("Qual é o seu email?");
var userPassword = prompt("Qual é a sua senha?");

console.log(userName, userAge, userEmail, userPassword);

function createUser(userName, userAge, userEmail, userPassword) {
    var user = {
        name: userName,
        age: userAge,
        email: userEmail,
        password: userPassword
    }
    return user;
}