# my-portfolio

## Description

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Semantic UI React](https://img.shields.io/badge/Semantic%20UI%20React-%2335BDB2.svg?style=for-the-badge&logo=SemanticUIReact&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

In inorder to showcase my abbilites to prospective employers and to be able to share my work with other developers, a single-page application utilising React has been constructed.

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

While this is a deployed application, in order to create it a ```Vite``` application was first installed by running the command 

```npm create vite@latest```

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

## License

Please refer to the licence in the repo.
