# NBA Legends App

[Live Demo](https://nba-legends-react0.netlify.app/)
## Screenshots

![App Screenshot](./public/image.png)
 
This project is a React application that displays NBA legends and their statistics. It allows users to search for players and view their information.

## Features

-   **Display NBA Legends:** Shows a list of NBA legends with their images and statistics.
-   **Search Functionality:** Enables users to search for players by name.
-   **Interactive Cards:** Players' cards are interactive, allowing users to toggle between the player's image and their statistics.

## Technologies Used

-   React 19.0.0
-   React DOM 19.0.0
-   React Scripts 5.0.1

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd nba-app
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

    This will open the application in your default web browser.

## Project Structure
```
nba-app/
├── public/
├── src/
│   ├── components/
│   │   ├── CardContainer.js
│   │   ├── Header.js
│   │   ├── PlayerCard.js
│   ├── helper/
│   │   ├── data.js
│   ├── assets/
│   │   ├── nba-logo.png
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
├── package.json
├── package-lock.json
└── README.md
```


-   `src/components`: Contains React components for the application.
    -   `CardContainer.js`: Manages the player cards and search functionality.
    -   `Header.js`: Displays the application header.
    -   `PlayerCard.js`: Displays individual player information.
-   `src/helper`: Contains helper files.
    -   `data.js`: Holds the player data.
-   `src/assets`: Contains static assets like images.
-   `App.js`: The main application component.
-   `App.css`: Styles for the main application.
-   `index.js`: Entry point of the application.
-   `index.css`: Global styles.
-   `package.json`: Manages project dependencies and scripts.

## Data

The player data is stored in `src/helper/data.js`. You can modify this file to add or update player information.

## Usage

-   Use the search bar to find players by name.
-   Click on a player card to toggle between the player's image and their statistics.

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.