# ADVENTURIZE

# <p align="center"><img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/logo.png" width=300 /></p>

<p align="center">
    <p align="center">
        <a href="https://github.com/parikshit-adhikari/adventurize" target="blank">
            <img src="https://img.shields.io/github/watchers/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>  
        <a href="https://github.com/parikshit-adhikari/adventurize/fork" target="blank">
            <img src="https://img.shields.io/github/forks/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/parikshit-adhikari/adventurize/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/parikshit-adhikari/adventurize/issues" target="blank">
            <img src="https://img.shields.io/github/issues/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/parikshit-adhikari/adventurize/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/parikshit-adhikari/adventurize/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/parikshit-adhikari/adventurize?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>

<p align="center">
</p>

## Problem Statement

# <p align="center"><img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/problems.png" width=750 height=425 /></p>

## Solutions

# <p align="center"><img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/adventurize_solutions.png" width=750 height=425 /></p>

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Landing Page

  Plan your next adventure with ease! 
  <details>
    <summary>UI of landing page</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image1.png" width=750/>
  </details>

- Dark Theme

  Flagsmith to toggle between light and dark theme.
  <details>
    <summary>UI of landing page (Dark Mode)</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image2.png" width=750/>

  </details>

- Engaging Descriptions

  Discover hidden gems and must-visit spots tailored to your interests and preferences. Receive personalized recommendations based location.
  <details>
    <summary>Location and their descriptions</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image3.png" width=750/>
  </details>

## Demo

https://github.com/parikshit-adhikari/adventurize/assets/148355925/f5a18d94-4cad-41b5-9fce-c3419b9c4822

## Installation

### Prerequisites

Before running adventurize, you will need an OpenAI API key from Gemini Services and Weather API from OpenWeatherMap. You can obtain an API key by registering on the their respective platform.

### Setup

#### Follow the given steps to set up adventurize

1. Clone the repository:

   ```bash
   git clone https://github.com/parikshit-adhikari/adventurize.git
   ```

2. Navigate to the cloned directory:

   ```bash
    cd adventurize
   ```

   Navigate to backend side by:

   ```bash
   cd backend
   ``` 

3. Navigate to frontend side by:

   ```bash
   cd frontend
   ``` 

4. Install the required dependencies:

For both backend and frontend side:

```bash
npm i
```

5. Setting up .env file for API Keys 

- Create a .env file inside backend directory

  ```bash
  # inside .env file
  API_KEY=******************************* # Your key
  WEATHTER_API=******************************* # Your key from open weather map
  ```
## Usage

Run the application by executing both frontend and backend side code:

For backend side:

```bash
node app.js 
```

For backend side:

```bash
npm run dev
```

## Dependencies

- Flagsmith
- Gemini API
- Open Weather Map  
- cors
- Other dependencies listed in `package.json` (Check out for both frontend and backend side!)

## License

This project is licensed under the [MIT License](/LICENSE).
