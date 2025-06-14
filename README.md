# 🌿 Plant Care Library 🪴

A beautiful, responsive single-page React application to browse, search, and explore commonly known indoor plants and their care levels.  
**Created by: Alveera Ahmad**

---

## 🧩 Project Overview

This app allows users to:

- Browse a library of houseplants
- Search by plant name in real-time
- Filter by plant care levels (Easy, Medium, Hard)
- Click a plant to view its full details in a pop-up modal

---

## Tech Stack & Choices

### Technologies Used
- **React.js** – Functional components with hooks for modern and clean state management
- **JavaScript** – For logic and interactivity
- **CSS** – Used for styling, transitions, and responsiveness
- **Git** – Version control

### Technical Decisions
- **Local JSON file as mock API**: I chose to import `plantsData.js` directly to simulate API data for simplicity.
- **React Hooks** (`useState`, `useEffect`): I opted for Hooks for concise and functional state management.
- **CSS for styling**: Since the project is small, vanilla CSS was sufficient. I added hover effects, animations, and a responsive grid layout without the need for an external UI library.
- **Modal for plant details**: Instead of routing to a new page, I used a modal for a smoother user experience.

---

## Run the App Locally

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/plant-care-library.git
cd plant-care-library

npm install

npm start

Then open http://localhost:3000 in your browser to view the app.

---

## Challenges Faced

-I wanted the app to look clean and approachable without using heavy UI libraries. So, getting the balance right with basic CSS animations and responsiveness took a bit of experimentation.

-Setting up the modal for plant details without using external libraries was tricky at first. I had to make sure clicking outside the modal or hitting escape would close it properly without breaking anything.

-At first, I used a .json file, but switching to a JavaScript file (plantsData.js) made it easier to load local images using require(), which React didn’t support directly from JSON.

## Assumptions Made

-I assumed users would be using the app on modern browsers and relatively recent devices, so I didn’t do any legacy browser compatibility work.

-Since this is a demo project, I used freely available images from Google instead of hosting my own or sourcing them from a plant database.
