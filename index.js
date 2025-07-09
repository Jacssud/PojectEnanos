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
    }
    return user;
}

document.getElementById("user-name").innerHTML = createUser(userName, userAge, userEmail, userPassword).name;
document.getElementById("user-age").innerHTML = createUser(userName, userAge, userEmail, userPassword).age;
document.getElementById("user-email").innerHTML = createUser(userName, userAge, userEmail, userPassword).email;