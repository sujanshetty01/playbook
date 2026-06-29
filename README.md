# iLearnLumen: Intern Explorer Challenge Playbook

Welcome to the **iLearnLumen: Intern Explorer Challenge** landing page repository! This is a modern, dynamic, and fully responsive web application built to guide interns through their learning journey and missions at Lumen.

## 🚀 Tech Stack

This project is built using modern web technologies to ensure high performance and a beautiful aesthetic:
- **[React](https://reactjs.org/)** & **[Vite](https://vitejs.dev/)** - Core framework and blazing-fast build tool
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18 or higher is recommended)
- **npm** (Node Package Manager)

## 🛠️ Installation & Setup

Follow these simple steps to get the project running on your local machine.

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-github-repo-url>
   cd playbook
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *Once running, open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173/`).*

## 📦 Building for Production

To create a production-ready build of the application, run:
```bash
npm run build
```
This will compile and optimize the application into the `dist` folder, ready to be deployed to any static hosting service.

## 📁 Project Structure

- `src/components/` - Contains all the reusable React components (Navbar, Hero, Timeline, ChallengeTasks, etc.)
- `src/App.jsx` - The main application layout where all components are assembled.
- `src/index.css` - Global CSS styles and Tailwind configurations.

## 🤝 Contributing

When adding new playbook content or missions, please ensure you update the respective components in the `src/components/` directory (such as `ChallengeTasks.jsx` or `LumenStory.jsx`) to keep the content organized.
