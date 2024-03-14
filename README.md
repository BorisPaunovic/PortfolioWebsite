# Personal Portfolio Website

This is a personal portfolio website built with Vue.js, showcasing my projects, skills, work experience, and contact information.

This website is accessible in [Live Demo](https://borispaunovic.github.io/PortfolioWebsite/#/skils)

## Features

- **Home Page**: A brief introduction about myself, links to my GitHub and LinkedIn profiles, and a profile picture.
- **About Page**: Detailed information about me, including my story, projects, work experience, education, and certificates.
- **Skills Page**: A comprehensive list of my skills, including programming languages, tools, frameworks, and databases, with links to their respective websites.
- **CV Page**: Two options for downloading my curriculum vitae (CV) - a minimalistic black and white version and a modern colored version with a picture.
- **Contact Page**: A form to contact me via email using the Gmail provider.

## Technologies Used

- Vue.js
- Vue Router
- HTML/CSS
- JavaScript

## Project Structure

```
src/
├── components/
│   ├── AboutPage.vue
│   ├── ContactPage.vue
│   ├── CvPage.vue
│   ├── HomePage.vue
│   └── SkillsPage.vue
├── App.vue
├── main.js
├── router.js
└── ...
```
- **components/**: Contains the Vue components for each page of the website.
- **App.vue**: The root component that serves as the entry point for the application.
- **main.js**: The main JavaScript file that initializes the Vue application.
- **router.js**: The file that defines the Vue Router configuration and routes.

## Installation

1. Clone the repository:
```
git clone https://github.com/BorisPaunovic/PortfolioWebsite.git
```
2. Navigate to the project directory:
```
cd PortfolioWebsite
```
3. Install dependencies:
```
pnpm install
```
4. Start the development server:
```
pnpm dev
```
The website should now be accessible at http://localhost:8080.

## Deployment

To deploy the website, you can use a static site hosting service like GitHub Pages, Netlify, or Vercel. Here's an example of how to deploy to GitHub Pages:

1. Build the production version of the app:
2. Deploy the `dist` folder to a new GitHub repository.
3. Enable GitHub Pages for the repository.

The website should now be live at the URL provided by GitHub Pages.

## Contributing

If you find any issues or want to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.






