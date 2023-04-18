
const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const dropDown = document.getElementById("drop-down");
const dial = document.getElementById("dial")
const mail = document.getElementById("email")
const password = document.getElementById("pass-word")
const conpassword = document.getElementById("confirm")
const passError = document.getElementById("passError")
const conPassError = document.getElementById("conPassError")
const submit = document.getElementById("btn-sub")
const form = document.getElementById("parent")

const countryCodes = ["+234", "+233", "+44", "+1", "+77", "+414"]

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");



hamburger.onclick = function () {
    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");

}

var counter = 1
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);


document.querySelectorAll(".slc").forEach(ele => {
    ele.addEventListener("click", function (e) {
        e.stopPropagation()
        let id = this.id
        counter = id.slice(5)
    })
})

// countryCodes.forEach((data, index)=>{
//     dropDown.innerHTML += `<option id=${index}>${data}</option>`
// })

for (let index = 0; index < countryCodes.length; index++) {
    dropDown.innerHTML += `<option id=${index} >${countryCodes[index]}</option>`
}



firstname.addEventListener("keyup", function (e) {
    validateName(firstname)

})
const validateName = (field) => {
    const name = field.value
    if (name.match(/^[A-Za-z]{3,20}$/)) {
        return updateElementStyle(field, "valid")

    }

    return updateElementStyle(field, "invalid")

}

function updateElementStyle(field, action) {
    if (action == "valid") {
        field.style.borderWidth = "3px"
        field.style.borderColor = "green"
        return true
    }
    else {
        field.style.borderWidth = "3px"
        field.style.borderColor = "red"
        return false
    }
}

surname.addEventListener("keyup", (e) => {
    validateName(surname)
})



dial.addEventListener("keyup", (e) => {
    validateNumber()
})

function validateNumber() {
    const phone = dial.value
    if (phone.match(/^[0-9]{10}$/)) {
        return updateElementStyle(dial, "valid")

    }
    return updateElementStyle(dial, "invalid")
}



mail.addEventListener("keyup", (e) => {
    validateEmail()
})

function validateEmail() {
    const vmail = mail.value
    if (vmail.match(/^[a-z][a-z0-9\.\_]{2,30}@[a-z]{5,20}\.[a-z]{2}/)) {
        return updateElementStyle(mail, "valid")

    }
    return updateElementStyle(mail, "invalid")
}

password.addEventListener("keyup", (e) => {
    validatePassword(password, passError)
})

conpassword.addEventListener("keyup", (e) => {
    validatePassword(conpassword, conPassError)
})



const validatePassword = (field, errorfield) => {
    const pass = field.value
    if (!pass.match(/.{8}/)) {
        updateElementStyle(field, "invalid")
        return displayPasswordError(errorfield, "must be a minimum of 8 characters")

    }
    if (!pass.match(/[0-9]/)) {
        displayPasswordError(errorfield, "must have a minimum of a digit")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[A-Z]/)) {
        displayPasswordError(errorfield, "must have a minimum of a Uppercase character")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[a-z]/)) {
        displayPasswordError(errorfield, "must have a minimum of a lowercase character")
        return updateElementStyle(field, "invalid")

    }
    if (!pass.match(/[!-\/:-@\[-`\{-~]/)) {
        displayPasswordError(errorfield, "must have a minimum of a special character")
        return updateElementStyle(field, "invalid")

    }

    return updateElementStyle(field, "valid")

}

const displayPasswordError = (element, msg) => {
    element.style.display = "block";
    element.innerHTML = msg

    setTimeout(() => {
        element.style.display = "none"

    }, 3000)

}

function validateBothPassword() {
    const pass = password.value
    const conpass = conpassword.value

    if (pass == conpass) {
        return true
    } else
        displayPasswordError(conPassError, "password dont match")
    return false
}

submit.onclick = (e) => {
    e.preventDefault()



    if (
        validateName(firstname) &&
        validateName(surname) &&
        validateNumber(dial) &&
        validateEmail(mail) &&
        validatePassword(password) &&
        validatePassword(conpassword) &&
        validateBothPassword()
    ) {
        form.submit()
    } else {
        alert("form not validated")
    }
}

























