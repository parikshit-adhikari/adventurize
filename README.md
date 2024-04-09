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

# <p align="center"><img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/problem.png" width=750 height=425 /></p>

## Solutions

# <p align="center"><img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/adventurize_solutions.png" width=750 height=425 /></p>

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Personalized Adventures

  Plan your next adventure with ease! Create detailed itineraries, set reminders, and collaborate with friends to organize unforgettable trips.
  <details>
    <summary>UI of landing page</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image1.png" width=750/>
  </details>

- Adventure Curation

  Discover hidden gems and must-visit spots tailored to your interests and preferences. Receive personalized recommendations based on your past adventures and user reviews.

  <details>
    <summary>Location based Curating</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image2.png" width=750/>

  </details>

- Engaging Descriptions

  Document your adventures with rich multimedia content. Write journal entries, upload photos and videos, and share your experiences with the adventurize community.
  <details>
    <summary>Available adventures</summary>
    <img src="https://github.com/parikshit-adhikari/adventurize/blob/main/assets/image3.png" width=750/>
  </details>

## Demo

![Link]

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

Navigate to frontend side by:

    ```bash
    cd frontend
    ```

3. Install the required dependencies:

For both backend and frontend side:

```bash
npm i
```

4. Setting up .env file for API Keys

- Create a .env file

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

- Gemini API
- Open Weather Map  
- cors
- Other dependencies listed in `package.json` (Check out for both frontend and backend side!)

## License

This project is licensed under the [MIT License](/LICENSE).