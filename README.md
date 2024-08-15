
# Graysol Company Website
![Graysol Website Cover Picture](src/assets/img/Graysol.png)
## Purpose

This project is the official website for Graysol, showcasing the services offered by the company, featuring a contact form for inquiries, and a blog page containing company-related posts. The website is designed to provide an easy-to-navigate interface for potential clients and partners to explore the company's offerings and get in touch.

## Project Structure

The project is built with React using Vite and Tailwind CSS for styling. The structure is organized as follows:

- **`assets/`**: Contains icons, fonts, and images used throughout the site.
- **`components/`**: Reusable components that are used across multiple pages and sections.
- **`hooks/`**: Custom hooks for managing state and logic.
- **`pages/`**: The main pages of the website, each representing a different section of the site.
- **`sections/`**: Sections within pages, implemented as JSX files.
- **`styles.js`**: Contains custom styles like font sizes, weights, and colors.
- **`App.js`**: The main application component.
- **`main.js`**: Entry point for the application.
- **`index.css` & `app.css`**: Global CSS styles.

## Installation

### Prerequisites

- Node.js
- Git

### Steps

1. **Fork the Repository:**

   ```bash
   git clone <repository-url>
   cd graysol-web-app-new
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   The website should now be running locally on `http://localhost:5173`.

## Technical Summary

- **Styling:** Tailwind CSS is used, with custom styles defined in `styles.js` and custom classes configured in `tailwind.config.js`.
- **Data Management:** Service page data is managed in `servicedata.js` within the `components` folder.
- **Deployment:** The website is deployed on Vercel, allowing for continuous deployment and easy management of production environments.

## Acknowledgments

Special thanks to the developers and contributors of the libraries and tools used in this project, including React, Vite, and Tailwind CSS.

---

