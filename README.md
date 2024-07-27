This project is a simple random password generator built using ReactJS and Tailwind CSS. It leverages several React hooks such as useEffect and useCallback to manage state and side effects efficiently.
Features

    Generate random passwords with customizable length
    Copy generated password to clipboard
    Responsive design using Tailwind CSS
    Clean and easy-to-understand code structure

Getting Started

Follow these steps to set up and run the project locally.
Prerequisites

    Node.js installed on your machine
    npm (Node package manager)

Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/repo-name.git

Navigate to the project directory:

sh

cd repo-name

Install the dependencies:

sh

npm install

Run the development server:

sh

    npm run dev

    Check the project running at:

    Open your browser and navigate to http://localhost:5173/

Project Structure

java

repo-name/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── PasswordGenerator.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── index.css
├── .gitignore
├── package.json
└── README.md

    public/index.html: The HTML file that includes the React app.
    src/components/PasswordGenerator.js: The main component for generating passwords.
    src/App.js: The root component.
    src/index.js: The entry point of the React app.
    src/styles/index.css: Custom styles, primarily Tailwind CSS.

Usage

    Open the application in your browser.
    Set the desired length of the password.
    Click on the "Generate Password" button to generate a new random password.
    Use the "Copy to Clipboard" button to copy the password for easy use.

Hooks Used

    useState: To manage the state of the password and length.
    useEffect: To handle side effects such as updating the document title.
    useCallback: To memoize callback functions and prevent unnecessary re-renders.

Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.
License

This project is licensed under the MIT License.
Acknowledgements

    ReactJS
    Tailwind CSS
