'use strict'

// cannot directly select and manipulate the::before pseudo - element using document.querySelector(), which is not possible because pseudo - elements(like :: before) are not part of the DOM in a way that can be accessed or manipulated directly via JavaScript.

// To modify the style of a::before pseudo - element, you need to use CSS custom properties or dynamically modify the style property of the parent element that controls the pseudo - element's behavior. Unfortunately, JavaScript cannot directly access or modify pseudo-elements like ::before or ::after.

const firstNameWrapper = document.querySelector('.first-name-wrapper');
const lastNameWrapper = document.querySelector('.last-name-wrapper');
const emailWrapper = document.querySelector('.email-wrapper');
const passwordWrapper = document.querySelector('.password-wrapper');


const inputArray = [firstNameWrapper, lastNameWrapper, emailWrapper, passwordWrapper];

const emailPattern = /^[a-zA-Z0-9.*%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



const button = document.querySelector('.button-free-trial');

button.addEventListener('click', (event) => {
    event.preventDefault();
    //reset everything styling
    // for loop to check each input. Email will have additional checking if its not null , then check if that is email or not. Each loop of checking assign stlying to it. 
    //if ok refresh the page 
    let validToSubmit = true;


    for (let x = 0; x < inputArray.length; x++) {

        let isValid = true;
        const input = inputArray[x].querySelector('input')
        const result = input.value.trim();
        const errorElement = inputArray[x].querySelector('.error');
        errorElement.textContent = null;
        inputArray[x].style.setProperty('--before-display', 'none');

        if (result === null || result === '') {
            validToSubmit = false;
            isValid = false;
            //display error mssg
            errorElement.textContent = `${input.name} cannot be empty`;

        } else {
            //if email and not null then check if it is valid email
            if (input.type === 'email' && !emailPattern.test(result)) {
                validToSubmit = false;
                isValid = false;
                errorElement.textContent = 'Looks like this is not an email'
            }
        }
        //show error icon
        if (!isValid) inputArray[x].style.setProperty('--before-display', 'block');

    }

    if (validToSubmit) {
        Swal.fire({
            icon: "success",
            title: "Congratulations!",
            html: `You info has been submitted.<br>Please check your email's inbox for confirmation!`
        });
        document.querySelector("form").reset()
    }



});








// const inputWrappers = document.querySelectorAll('.first-name-wrapper, .last-name-wrapper, .email-wrapper, .password-wrapper');
// const emailPattern = /^[a-zA-Z0-9.*%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const button = document.querySelector('.button-free-trial');
// const form = document.querySelector("form");

// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     let validToSubmit = true;

//     inputWrappers.forEach(wrapper => {
//         const input = wrapper.querySelector('input');
//         const errorElement = wrapper.querySelector('.error');
//         const value = input.value.trim();

//         // Reset previous error messages
//         errorElement.textContent = "";
//         wrapper.classList.remove('error-visible');

//         if (!value) {
//             validToSubmit = false;
//             errorElement.textContent = `${input.name} cannot be empty`;
//             wrapper.classList.add('error-visible');
//         } else if (input.type === 'email' && !emailPattern.test(value)) {
//             validToSubmit = false;
//             errorElement.textContent = 'Looks like this is not an email';
//             wrapper.classList.add('error-visible');
//         }
//     });

//     if (validToSubmit) {
//         Swal.fire({
//             icon: "success",
//             title: "Congrats",
//             html: "Your info has been submitted.<br>Please check your email's inbox for confirmation!"
//         });
//         form.reset();
//     }
// });