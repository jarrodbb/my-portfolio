# my-portfolio

## Description

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

In order to showcase my abilities to prospective employers and to be able to share my work with other developers, a single-page application utilising React has been constructed.

The application provides the user with the ability to navigate to the following sections

- About Me
- Portfolio
- Contact Page
- Resume

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Deployed Link

[My-Portfolio]()

### Note:

.gitignore added to ignore node_modules and dist folder

### Technologies Used

<p><a href="https://vitejs.dev/">Vite</a></p>
<p><a href="https://react.dev/">React</a></p>
<p><a href="https://legacy.reactjs.org/docs/react-dom.html">React-dom</a></p>
<p><a href="https://reactrouter.com/en/main">React-router-dom</a></p>
<p><a href="https://fontawesome.com/versions">fontawesome</a></p>
<p><a href="https://getbootstrap.com/">bootstrap</a></p>
<p><a href="https://www.emailjs.com/">eamiljs</a></p>
<p><a href="https://semantic-ui.com/">Semantic-ui</a></p>
<p><a href="https://react.semantic-ui.com/">Semantic-ui-react</a></p>
<p><a href="https://sweetalert2.github.io/">Sweetalert2</a></p>
<p><a href="https://eslint.org/">Eslint</a></p>

While this is a deployed application, in order to create it, a ```Vite``` application was first installed by running the command 

```npm create vite@latest```

---

```vite.config``` 

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

Ensure the following are included in the package.json

```
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.4.2",
    "@fortawesome/free-brands-svg-icons": "^6.4.2",
    "@fortawesome/free-regular-svg-icons": "^6.4.2",
    "@fortawesome/free-solid-svg-icons": "^6.4.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "axios": "^1.3.5",
    "babel-plugin-macros": "^3.1.0",
    "bootstrap": "^5.2.3",
    "emailjs-com": "^3.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "semantic-ui-css": "^2.5.0",
    "semantic-ui-react": "^2.1.4",
    "sweetalert2": "^11.7.31"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "vite": "^4.3.2"
  }
```

## Usage

### When navigating to the site, the user is presented first with the About me page. 

The about me page includes a recent photo of myself along with some personal back ground information

Additionally, the Nav bar is visible with links to the Contact page, Resume Page, Portfolio Page and About me page. When the user clicks on each of these links, they are navigated to the respective page. Conditional formatting highlights the nav bar option of the page the user is on.

For each page the route of the application is also updated

At the footer of the page there is 3 icons (Github, LinkedIn and Stack Overflow) each of these Icon links will take the user to my respective profile for each of these sites. There is also conditional highlight when hovering over the links 

<img width="1644" alt="Screenshot 2023-10-08 at 12 33 13 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/15e3e920-d574-4855-aeeb-b29de9fc41db">

### Portfolio Page 

When the user navigates to Portfolio page, they are presented with 6 of my completed projects showcasing my skills. Each project shows a screen shot of the application 

<img width="1646" alt="Screenshot 2023-10-08 at 12 36 15 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/34e94e25-87d2-498a-8ca7-7dbb7ba66ccd">

---

<img width="1641" alt="Screenshot 2023-10-08 at 12 36 27 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/605c6edd-5a8d-4dab-bc6e-13d56a4e764d">

When clicking on the title for each project, the user will be taken to the deployed site (conditional highlighting added for hovering the title)

<img width="645" alt="Screenshot 2023-10-08 at 12 37 08 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/bb038635-51be-447d-908c-bcd03c1b78fb">

When clicking on the Github icon for each project, the user will be taken to the Github repo for each project (conditional highlighting added for hovering the title)

<img width="656" alt="Screenshot 2023-10-08 at 12 37 16 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/b7dda868-83f5-4340-baa8-708c36e09163">

When the user hovers over the background image, they are shown the skill set learnt during the project 

<img width="640" alt="Screenshot 2023-10-08 at 12 37 25 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/955c0e30-11f0-4eac-bdb0-4095d6c18b55">

### Contact Page

When the user navigates to the contact page, they are presented with a form to be able to email myself

<img width="1646" alt="Screenshot 2023-10-08 at 12 38 20 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/b3e64fc6-77e5-4a76-b6b0-950c10094569">

Validation alerts have been added to the form so if a user clicks to another input without including something in the input, an alert is shown indicating that the specific field cannot be empty 

<img width="336" alt="Screenshot 2023-10-08 at 12 38 32 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/1aabb00a-ee4a-4f46-bb61-80ee67a16897">

---

<img width="317" alt="Screenshot 2023-10-08 at 12 38 40 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/66d2c012-9010-4363-a350-531d7a7a9d54">

---

<img width="308" alt="Screenshot 2023-10-08 at 12 38 48 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/925076f6-2e02-4205-a149-b4250665577a">

Validation has also been added to alert the user if something is typed into an input and then deleted 

<img width="306" alt="Screenshot 2023-10-08 at 12 39 10 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/5ded37a8-d5e2-4e20-b027-f2f51c0a2de1">

---

<img width="308" alt="Screenshot 2023-10-08 at 12 39 19 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/5df91a39-da2b-485d-bf9d-046df64aa6fa">

---

<img width="304" alt="Screenshot 2023-10-08 at 12 39 48 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/3cd18b6d-9ca6-4e66-b8ce-598e890b2e0c">

---

<img width="309" alt="Screenshot 2023-10-08 at 12 43 29 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/09b502ef-cf1d-49a7-96ca-0fc68e542dba">

---

<img width="307" alt="Screenshot 2023-10-08 at 12 46 06 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/32d8a0f3-0a24-4f92-bdc6-2dcddf091622">

---

<img width="310" alt="Screenshot 2023-10-08 at 12 46 15 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/9209f7ae-fc72-40b4-98b5-ef3240d2388e">


Validation on submitting the form has also been added. When a user submits the form without including an input, they will be alerted 


<img width="309" alt="Screenshot 2023-10-08 at 12 47 14 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/d20dcf86-094c-43cf-a431-284756ad75ab">

---

<img width="320" alt="Screenshot 2023-10-08 at 12 47 51 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/34fe3dd1-ff1b-407b-af9e-3decdbbea3ac">


Validation on the email is also checked to ensure a valid email is included 


<img width="310" alt="Screenshot 2023-10-08 at 12 47 36 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/abee1296-502e-43cb-ab7f-41f2e2f89484">


When the user submits the form, an alert is shown, confirming the email has been sent. This is currently fully functional


<img width="380" alt="Screenshot 2023-10-08 at 12 48 06 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/9057a7cd-d88d-444c-acb0-a527a5382d0e">


The user is also presented with a personal message on the page after the message has been sent 


<img width="354" alt="Screenshot 2023-10-08 at 12 48 20 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/b5fcfbf1-f80a-4ae7-85a3-787a64d2ffa5">


### Resume Page

When the user navigates to the Resume Page, they are presented with a list of my current skill set 


<img width="1648" alt="Screenshot 2023-10-08 at 12 50 35 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/fe754db8-993d-4143-8b0c-2f3578e1ae82">


The user is also shown a downloadable resume by clicking the button (conditional highlighting when hover)


<img width="201" alt="Screenshot 2023-10-08 at 12 50 42 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/951d2652-4f8a-4de3-839a-433df079bc0f">


### Responsiveness 

This site is fully responsive 

About Me


<img width="383" alt="Screenshot 2023-10-08 at 1 54 00 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/8fe09ccd-45d3-4a3e-affd-71ad76477104">

---

<img width="382" alt="Screenshot 2023-10-08 at 1 54 09 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/b848f951-7f49-497e-8b60-0e0802e69e47">


Portfolio


<img width="383" alt="Screenshot 2023-10-08 at 1 54 20 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/749f6c02-d0b4-45ce-9011-0d3725959964">

---

<img width="376" alt="Screenshot 2023-10-08 at 1 54 28 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/9b31405b-7d0c-4e42-92cc-207c19b8c92a">

---

<img width="378" alt="Screenshot 2023-10-08 at 1 54 40 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/2a0db43a-0653-4d51-b247-5cdeb52f8ddb">

---

<img width="378" alt="Screenshot 2023-10-08 at 1 54 46 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/d3417165-f629-4cb5-8625-3b5667b35445">


Contact Me


<img width="377" alt="Screenshot 2023-10-08 at 1 54 54 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/ea60a983-e556-4cb1-ad94-1a95764137da">

---

<img width="377" alt="Screenshot 2023-10-08 at 1 54 59 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/7f1b7f43-be53-47d8-8ce1-e81b6fe36f44">


Resume


<img width="376" alt="Screenshot 2023-10-08 at 1 55 08 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/cf2abbdd-ac21-4938-9fbe-d98b4e16137d">

---

<img width="379" alt="Screenshot 2023-10-08 at 1 55 14 pm" src="https://github.com/jarrodbb/my-portfolio/assets/132813348/4db83dfa-0324-486e-af07-d1f2b0f77437">


## License

Please refer to the licence in the repo.
