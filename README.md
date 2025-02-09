# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot
<br>Mobile</br>
![](./screenshot.jpg)

<br>Desktop</br>
![](./screenshot.jpg)

### Links

- Solution URL: [here]()
- Live Site URL: [here]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- cannot directly select and manipulate the::before pseudo - element using document.querySelector(), which is not possible because pseudo - elements(like :: before) are not part of the DOM in a way that can be accessed or manipulated directly via JavaScript.
To modify the style of a::before pseudo - element, you need to use CSS custom properties or dynamically modify the style property of the parent element that controls the pseudo - element's behavior. Unfortunately, JavaScript cannot directly access or modify pseudo-elements like ::before or ::after.

```css
.input-wrapper::before {
  display: var(--before-display, none); /*this*/
  /* display:none; */
  content: '';
  position: absolute;
  background-image: url('/images/icon-error.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 1.5rem;
  aspect-ratio: 1/1;
  right: 3%;
  top: 25%;
  transform: translateY(-25%);
}
```

```js
 inputArray[x].style.setProperty('--before-display', 'none');

```


The icon is being set via CSS this way. 
```css
.input-wrapper::before {
  display: var(--before-display, none); /*this*/
  /* display:none; */
  content: '';
  position: absolute;
  background-image: url('/images/icon-error.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 1.5rem;
  aspect-ratio: 1/1;
  right: 3%;
  top: 25%;
  transform: translateY(-25%);
}
```



Also uses SweetAlert2 for modal after successfully submitted the form
```js

    if (validToSubmit) {
        Swal.fire({
            icon: "success",
            title: "Congratulations!",
            html: `You info has been submitted.<br>Please check your email's inbox for confirmation!`
        });
        document.querySelector("form").reset()
    }
```


### Continued development
Improve the js logic. And clean up the html and css too. 
