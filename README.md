# Phonebook App

## Introduction

The Phonebook App is a simple web application for kindergarteners that enables users to manage a list of contacts. It provides features for adding new contacts, searching for contacts, and performing basic CRUD operations (Create, Read, Update, Delete).

<!-- ![App Screenshot](/path/to/screenshot.png)
*Screenshot of the Phonebook App.* -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- View a list of contacts with their names, roles, and phone numbers.
- Search for contacts using an autocomplete feature.
- View email addresses for contacts that have one.
- Sorting contacts into separate lists by roles, the user can view each list separately
- Add new contacts with details like name, role, phone number, email, and office phone.
- Edit existing contacts' details.
- Delete contacts from the list.

## Installation

Follow these steps to set up the Phonebook App:

1. Clone the repository to your local machine using the following command:

```bash
   git clone https://github.com/NoaD159/phonebook
```

2. Install the required dependencies:

```bash
cd phonebook
npm install
```

Create a .env file in the root directory of the app and add the necessary environment variables:

- REACT_APP_NODE_ENV=development
- REACT_APP_ACCESS=access_password
- MONGODB_URI=mongo_uri
- REACT_APP_PORT=3000
- REACT_APP_BASE_URL=http://localhost:3000

## Usage

To run the app, use the following command:

```bash
npm start
```

Once the app is running, open your web browser and go to http://localhost:3000 to access the Phonebook App.

## Technologies Used

The Contact Management App is built using the following technologies:

- React.js: Front-end JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for designing responsive web applications.
- Axios: A library for making HTTP requests to interact with the server.
- Redux: A predictable state container for managing application state.
- Node.js: A JavaScript runtime used to execute server-side code.
- Express.js: A minimalist web framework for Node.js to handle server-side logic.
- MongoDB: A NoSQL database used to store and retrieve contact information.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
