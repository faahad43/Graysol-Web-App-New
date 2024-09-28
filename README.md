
# Graysol Company Website
![Graysol Website Cover Picture](src/assets/img/Graysol.png)

## Project Overview
Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. This repository contains the frontend codebase for the Graysol website, built with React, Vite, and Tailwind CSS. The project is designed to offer seamless scalability, reusability, and maintainability for a wide range of services provided by Gray Solutions.

## Table of Contents
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Styling and Configuration](#styling-and-configuration)
- [Hooks and Context Management](#hooks-and-context-management)
- [Utilities and Animations](#utilities-and-animations)
- [Routing and Pages](#routing-and-pages)
- [Components and Props Usage](#components-and-props-usage)
- [Services Data Management](#services-data-management)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)

### Prerequisites
- Node.js (v14 or higher)
- NPM or Yarn
- Git

### Cloning the Repository
```bash
git clone https://github.com/your-username/graysol-frontend.git
cd graysol-frontend

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


## Homepage Sponsors Section

The Sponsors section showcases the brands and companies that have collaborated with or sponsored Graysol. This section is designed to scroll seamlessly across the screen, highlighting logos of sponsors in a continuous loop.

### Code Breakdown

```jsx
<div className="w-full">
  <div className="h-[120px] m-auto overflow-hidden relative w-auto">
    <ul className="flex h-full items-center w-[calc(150px*50)] animate-scroll ">
      {allImages.map((image, index) => (
        <li className="w-[150px] h-[100px] flex items-center" key={index}>
          <img src={image} className="w-20 h-full lg:w-24 lg:h-12 xl:w-28 xl:h-16 object-contain" alt={`Sponsor ${index + 1}`} />
        </li>
      ))}
    </ul>
  </div>
</div>
```

### How It Works

Container (div.w-full): The outermost container spans the full width of the page, ensuring the scrolling sponsor logos take up the entire section width.

Overflow Hidden (overflow-hidden): This ensures that only the visible logos are shown, while the rest of the scrolling list remains hidden, creating a smooth scrolling effect.

Scrolling List (ul):

The ul has a flex layout that arranges all logos horizontally in a single row.
The width is calculated dynamically using w-[calc(150px * 50)], where each logo occupies 150px, and there are 50 logos (25 sponsors duplicated twice to create a seamless scrolling effect).
Animation (animate-scroll): The ul uses a custom scroll animation (defined in the Tailwind CSS configuration) to move the list of sponsor logos continuously from right to left, providing the impression of an infinite scroll.

Responsive Design
Each li contains a sponsor logo wrapped in an img tag. The size of the images is set using responsive classes like w-20, lg:w-24, and xl:w-28, which adjust based on screen size, ensuring that the layout remains responsive across different devices.
Animation Explanation
The scrolling animation moves the entire ul leftward, making the sponsor logos scroll in a continuous loop. The trick to achieving seamless scrolling is duplicating the set of logos. Once the first set of logos scrolls off-screen, the second set (which is a duplicate) immediately follows, ensuring there’s no break or jump in the scroll.
Key Points
Flexbox Layout: The flex layout ensures that all logos are aligned horizontally and centered vertically within the container.
Seamless Scrolling: By duplicating the list of logos, the scrolling effect appears continuous and seamless, providing a smooth visual experience for users.
Dynamic Width: The total width of the ul is dynamically calculated based on the number of logos, ensuring there is enough space for the scrolling effect.
This section adds a dynamic and visually engaging element to the homepage, showcasing Graysol's partners and sponsors in an interactive and professional manner.



## Acknowledgments

Special thanks to the developers and contributors of the libraries and tools used in this project, including React, Vite, and Tailwind CSS.



---


# Graysol Website

![Graysol Website Cover Picture](src/assets/img/Graysol.png)

## Project Overview
Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. This repository contains the frontend codebase for the Graysol website, built with React, Vite, and Tailwind CSS. The project is designed to offer seamless scalability, reusability, and maintainability for a wide range of services provided by Gray Solutions.

## Table of Contents
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Styling and Configuration](#styling-and-configuration)
- [Hooks and Context Management](#hooks-and-context-management)
- [Utilities and Animations](#utilities-and-animations)
- [Routing and Pages](#routing-and-pages)
- [Components and Props Usage](#components-and-props-usage)
- [Services Data Management](#services-data-management)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Acknowledgements](#acknowledgements)

## Installation
### Prerequisites
- Node.js (v14 or higher)
- NPM or Yarn
- Git

### Cloning the Repository
```bash
git clone https://github.com/your-username/graysol-frontend.git
cd graysol-frontend
```

### Installing Dependencies
```bash
npm install
# Or if using Yarn
yarn install
```

### Running the Project
```bash
npm run dev
# Or with Yarn
yarn dev
```

This will start the development server on `http://localhost:3000`.

## Folder Structure
The project structure is designed to ensure modularity and scalability.

```
Graysol-Frontend
│
├── dist/              # Production build files
├── node_modules/      # Node.js modules
├── public/            # Static files
├── src/
│   ├── assets/        # Images, icons, fonts, etc.
│   ├── Components/    # Reusable components with data passed as props
│   ├── Context/       # Context for global state management
│   ├── hooks/         # Custom hooks for specific functionalities
│   ├── Pages/         # Pages corresponding to different routes
│   ├── Sections/      # Different sections of the pages
│   ├── utils/         # Utility functions (e.g., animations)
│   ├── App.css        # Custom CSS styling
│   ├── App.jsx        # Main application component
│   ├── index.css      # Tailwind CSS imports
│   ├── main.jsx       # Main entry point and router configuration
│   └── styles.js      # Additional style configurations
│
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── package.json       # NPM/Yarn dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── README.md          # This README file
├── tailwind.config.js # Tailwind CSS configuration
├── vercel.json        # Vercel deployment configuration
└── vite.config.js     # Vite configuration
```

## Styling and Configuration
- The project uses **Tailwind CSS** for styling, with some custom styles defined in `App.css`.
- Tailwind configurations such as colors are defined in `tailwind.config.js`.
- The `vercel.json` file contains configuration settings required for routing when deploying to the Vercel platform.

### Main Styling Files
- `App.css`: Contains additional custom styles.
- `index.css`: Only imports Tailwind CSS classes.
- `styles.js`: Contains any additional JS-based styling if needed.

## Hooks and Context Management
### Custom Hooks
- `useWindowSize`: Monitors the current window size and adjusts content view in responsive components.

### Context Management
- `Context/`: Contains global state management logic. Currently, it handles user authentication for the admin dashboard, ensuring that only authenticated users can access certain pages.

## Utilities and Animations
- `utils/motion.js`: Contains the logic for hover animations used on service cards on the homepage, providing a dynamic user experience.

## Routing and Pages
The main routing of the project is handled in `main.jsx`. Each page is defined in the `Pages/` folder, with `index.js` files ensuring all components/pages are imported and exported efficiently.

### Page Structure
- **Home Page:** Contains sections such as `HomeBanner`, `ChooseUs`, `Sponsers`, `Services`, and `Testimonials`.
- **Services Pages:** Each service is represented by a separate JSX file in the `Pages/Services` folder, e.g., `CloudSolution.jsx`, `DataScience.jsx`.

### Reusability
All pages are designed to be reusable with props, making it easy to add or update content without modifying the base structure.

## Components and Props Usage
- The `Components/` folder contains all reusable components, such as buttons, cards, inputs, etc.
- Data for these components is passed as props, ensuring reusability and maintainability.

## Services Data Management
The `Sections/servicesData.js` file contains all the data for the different service pages in a structured object format. This data is passed as props to maintain consistent styling across service pages while allowing for easy content updates.

### Example Data Structure for Services
```javascript
export const serviceMainPage = {
  bannerTitle: "Our Services",
  bannerDescription: "Discover a range of expert solutions...",
  developmentFeatureHeading: "Services Features",
  developmentFeature: [
    { title: "Software Development", description: "Custom software for efficiency..." },
    ...
  ],
  // Additional properties for technologies, service details, FAQs, etc.
};
```

Each page component (e.g., `CloudSolution.jsx`) imports the relevant data object from `servicesData.js` and passes it as props to the different section components.

### How Data Is Passed
```javascript
import { Banner, DevelopmentFeatures, ServiceFeatures } from '../../Sections';
import { cloudSolutionPage } from '../../Sections/servicesData';

export const CloudSolution = () => {
  return (
    <>
      <Banner page='service' pageType={cloudSolutionPage}/>
      <DevelopmentFeatures pageType={cloudSolutionPage}/>
      <ServiceFeatures pageType={cloudSolutionPage}/>
      ...
    </>
  );
};
```

## Deployment
This project is deployed using **Vercel**. The `vercel.json` file defines entry point routes and ensures that routing works correctly on the deployment platform.

### Deploying the Project
1. Install the Vercel CLI: `npm i -g vercel`.
2. Run `vercel` in the project root directory.
3. Follow the on-screen instructions to complete deployment.

## Future Improvements
- **Accessibility:** Ensure the website is fully accessible and follows WAI-ARIA guidelines.
- **Testing:** Implement unit and integration tests using a testing library like Jest or React Testing Library.
- **Performance Optimization:** Analyze the website's performance using tools like Lighthouse and optimize where necessary.

## Acknowledgements
- This project was developed using **React** and **Vite**.
- Thanks to the Graysol team for providing the design and content guidelines.
- Icons and images are sourced from [source links if any].

For any questions or support, please contact [Your Contact Information].
```

