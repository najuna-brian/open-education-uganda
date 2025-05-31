\# Open Education Uganda \- Developer Documentation

\*\*Version:\*\* 1.0.0  
\*\*Last Updated:\*\* May 31, 2025

\#\# 1\. Introduction

Welcome to the Open Education Uganda project\! This document serves as a comprehensive guide for new developers joining the team.

\#\#\# 1.1. Project Overview

Open Education Uganda is a frontend web application designed to provide students with easy access to academic resources and study materials. It features a hierarchical navigation system that mirrors the structure of an educational institution (Colleges \> Departments \> Programs \> Years \> Semesters \> Courses \> Materials). The primary goal is to create a user-friendly, intuitive, and scalable platform for learning.

\#\#\# 1.2. Key Features

\* \*\*Hierarchical Navigation:\*\* Users can browse content through an expandable sidebar and breadcrumbs.  
\* \*\*Dynamic Content Display:\*\* The main content area updates based on the user's selection in the navigation.  
\* \*\*Material Access:\*\* Displays various types of learning materials (Study Notes, Past Papers, Slides, Quizzes, etc.) for each course.  
\* \*\*Data-Driven:\*\* The entire academic structure and content are driven by a central JSON file (\`academic-structure.json\`).

\#\#\# 1.3. Technology Stack

\* \*\*React:\*\* A JavaScript library for building user interfaces.  
\* \*\*JavaScript (ES6+):\*\* Core programming language.  
\* \*\*CSS:\*\* For styling components (individual CSS files per component and global styles).  
\* \*\*JSON:\*\* For storing and managing the academic structure and content.  
\* \*\*No Backend (Current Version):\*\* This version is frontend-only. All data is loaded from a local JSON file.

\#\# 2\. Getting Started

\#\#\# 2.1. Prerequisites

\* \*\*Node.js:\*\* (v16.x or later recommended) \- JavaScript runtime environment.  
\* \*\*npm\*\* (Node Package Manager) or \*\*yarn:\*\* Package managers for JavaScript. This guide will primarily use npm commands.

\#\#\# 2.2. Project Setup

1\.  \*\*Clone the Repository:\*\*  
    \`\`\`bash  
    git clone \<repository\_url\> open-education-uganda  
    cd open-education-uganda  
    \`\`\`  
    \*(Replace \`\<repository\_url\>\` with the actual Git repository URL if applicable. If working from provided files, ensure they are in a project directory named \`open-education-uganda\`.)\*

2\.  \*\*Install Dependencies:\*\*  
    Navigate to the project's root directory and run:  
    \`\`\`bash  
    npm install  
    \`\`\`  
    This command installs all the necessary packages defined in \`package.json\`.

3\.  \*\*Run the Development Server:\*\*  
    \`\`\`bash  
    npm start  
    \`\`\`  
    This will start the React development server (usually on \`http://localhost:3000\`) and open the application in your default web browser. The page will automatically reload if you make edits to the code.

\#\# 3\. Project Structure

The project follows a standard Create React App folder structure with some specific organization for this application.

open-education-uganda/ ├── public/ \# Static assets and HTML template │ ├── index.html \# Main HTML page │ └── ... \# Other static assets (favicon, manifest, etc.) ├── src/ \# Main application source code │ ├── components/ \# Reusable UI components │ │ ├── Breadcrumb.js │ │ ├── Breadcrumb.css │ │ ├── MainContent.js │ │ ├── MainContent.css │ │ ├── MaterialItem.js │ │ ├── MaterialItem.css │ │ └── Sidebar.js │ │ └── Sidebar.css │ ├── data/ \# Data files │ │ └── academic-structure.json \# Core academic data │ ├── App.js \# Main application component │ ├── index.css \# Global CSS styles │ ├── index.js \# Application entry point │ └── ... \# Other potential files (setupTests.js, etc.) ├── .gitignore \# Specifies intentionally untracked files ├── package.json \# Project metadata and dependencies ├── package-lock.json \# Records exact versions of dependencies └── README.md \# Project README

\#\#\# 3.1. \`public/\` Folder

\* \*\*\`index.html\`\*\*: The main HTML shell for the application. React injects the application into the \`\<div id="root"\>\</div\>\` element within this file.  
\* Static assets like favicons, logos, and the \`manifest.json\` reside here.

\#\#\# 3.2. \`src/\` Folder

This is where most of the development happens.

\* \*\*\`index.js\`\*\*: The JavaScript entry point of the application. It renders the main \`\<App /\>\` component into the \`root\` DOM node in \`public/index.html\`.  
\* \*\*\`App.js\`\*\*: The root component of the application. It orchestrates the main layout (Sidebar, Main Content Area) and manages the global navigation state.  
\* \*\*\`index.css\`\*\*: Contains global styles and resets that apply to the entire application.  
\* \*\*\`data/\`\*\*:  
    \* \*\*\`academic-structure.json\`\*\*: This is a \*\*critical file\*\*. It holds the entire hierarchical structure of colleges, departments, programs, years, semesters, courses, and learning materials. The application is designed to be entirely driven by the content of this file. Its structure is a nested JSON object.  
\* \*\*\`components/\`\*\*: Contains all reusable React components. Each component typically has its own JavaScript file (e.g., \`Sidebar.js\`) and a corresponding CSS file for styling (e.g., \`Sidebar.css\`).

\#\# 4\. Core Components and Files (\`src/\`)

\#\#\# 4.1. \`index.js\`

\* \*\*Purpose\*\*: Application entry point.  
\* \*\*Functionality\*\*: Imports React, ReactDOM, the main \`App\` component, and global styles (\`index.css\`). It uses \`ReactDOM.createRoot().render()\` to mount the \`\<App /\>\` component into the DOM.

\#\#\# 4.2. \`App.js\`

\* \*\*Purpose\*\*: Main application component; acts as the orchestrator.  
\* \*\*Functionality\*\*:  
    \* Sets up the overall layout (Sidebar on the left, Main Content area on the right).  
    \* Manages the primary navigation state:  
        \* \`currentPath\`: An array of item objects representing the user's current navigation path (e.g., \`\[collegeObj, departmentObj, programObj\]\`).  
        \* \`selectedItem\`: The deepest item object currently selected by the user (e.g., a specific course or program).  
    \* Loads the initial data from \`academic-structure.json\`.  
    \* Passes data and callback functions (for handling navigation changes) as props to child components (\`Sidebar\`, \`Breadcrumb\`, \`MainContent\`).  
    \* \`handleNavigation(newPath)\`: Callback function passed to \`Breadcrumb\` to update \`currentPath\` and \`selectedItem\` when a breadcrumb link is clicked.  
    \* \`handleSidebarSelect(item, path)\`: Callback function passed to \`Sidebar\` to update \`currentPath\` and \`selectedItem\` when a sidebar item is clicked.

\#\#\# 4.3. \`data/academic-structure.json\`

\* \*\*Purpose\*\*: The single source of truth for all academic content and structure.  
\* \*\*Structure\*\*:  
    \* A root JSON object with a \`name\` (e.g., "Open Education Uganda") and a \`colleges\` array.  
    \* Each \*\*college\*\* object has a \`name\`, \`type: "college"\`, and a \`departments\` array.  
    \* Each \*\*department\*\* object has a \`name\`, \`type: "department"\`, and a \`programs\` array.  
    \* Each \*\*program\*\* object has a \`name\`, \`type: "program"\`, \`degreeType\` (e.g., "Degree", "Diploma"), and a \`years\` array.  
    \* Each \*\*year\*\* object has a \`name\` (e.g., "Year 1"), \`type: "year"\`, and a \`semesters\` array.  
    \* Each \*\*semester\*\* object has a \`name\` (e.g., "Semester 1"), \`type: "semester"\`, and a \`courses\` array.  
    \* Each \*\*course\*\* object has a \`name\`, \`code\`, \`type: "course"\`, \`description\`, and a \`materialTypes\` array.  
    \* Each \*\*materialType\*\* object (e.g., "Study Notes", "Past Papers") has a \`name\`, \`type: "materialType"\`, and a \`materials\` array.  
    \* Each \*\*material\*\* object has a unique \`id\`, \`title\`, \`fileType\`, \`url\`, \`size\`, and \`uploadDate\`.  
\* \*\*Importance\*\*: Any changes to the academic structure (adding a new college, program, course, or material) are done by editing this file. The React components are designed to render whatever valid data is present here.

\#\#\# 4.4. \`components/Sidebar.js\`

\* \*\*Purpose\*\*: Renders the main navigation tree on the left side of the application.  
\* \*\*Functionality\*\*:  
    \* Receives the root \`data\` (from \`academic-structure.json\`) and \`onPathSelected\` callback from \`App.js\`.  
    \* The \`SidebarItem\` is a recursive component within \`Sidebar.js\`.  
    \* \`SidebarItem\` renders an individual navigable item (college, department, program, etc.).  
    \* Manages its own \`isExpanded\` state to toggle the visibility of its children.  
    \* When an item is clicked (\`handleToggle\`):  
        \* It calls \`onPathSelected(item, newPath)\` passed from \`App.js\`, providing the clicked \`item\` and the \`newPath\` to it.  
        \* Toggles its expansion state if it has children.  
    \* Dynamically generates child \`SidebarItem\` components based on the nested structure in the data (e.g., \`item.colleges\`, \`item.departments\`, \`item.programs\`).  
\* \*\*Styling\*\*: \`components/Sidebar.css\` provides styles for the sidebar layout, item appearance, indentation, and expansion icons.

\#\#\# 4.5. \`components/Breadcrumb.js\`

\* \*\*Purpose\*\*: Displays the current navigation path above the main content area, allowing users to see where they are and navigate back up the hierarchy.  
\* \*\*Functionality\*\*:  
    \* Receives \`path\` (the \`currentPath\` array from \`App.js\`), \`onNavigate\` callback, and \`rootName\` as props.  
    \* Renders a list of clickable links representing each segment of the \`path\`.  
    \* The last item in the path is usually displayed as non-clickable text (current location), though the current implementation makes all segments clickable.  
    \* When a breadcrumb segment is clicked, it calls \`onNavigate(newPathSlice)\` to update the application state in \`App.js\`.  
\* \*\*Styling\*\*: \`components/Breadcrumb.css\` styles the breadcrumb list, items, and separators.

\#\#\# 4.6. \`components/MainContent.js\`

\* \*\*Purpose\*\*: Renders the content relevant to the item selected in the navigation (sidebar or breadcrumb).  
\* \*\*Functionality\*\*:  
    \* Receives \`selectedItem\` (the deepest selected item object) and \`currentPath\` from \`App.js\`.  
    \* Receives \`onItemSelect\` (which is \`handleNavigation\` from \`App.js\`) to allow navigation from within the main content (e.g., clicking on a department card to view its programs).  
    \* Displays the \`name\` and \`description\` of the \`selectedItem\`.  
    \* \*\*Content Rendering Logic (\`getChildrenList\`)\*\*:  
        \* If \`selectedItem\` is a college, it displays its departments as cards.  
        \* If \`selectedItem\` is a department, it displays its programs as cards.  
        \* ...and so on, down to the course level.  
        \* If \`selectedItem\` is a \*\*course\*\*, it iterates through its \`materialTypes\` (e.g., "Study Notes", "Past Papers"). For each \`materialType\`, it lists the actual \`materials\` using the \`MaterialItem\` component.  
    \* Clicking on a card (e.g., a department card) calls \`handleContentItemClick\`, which constructs the new path and calls \`onItemSelect\` to update the app state.  
\* \*\*Styling\*\*: \`components/MainContent.css\` styles the title, description, content cards, and the layout for material types and materials.

\#\#\# 4.7. \`components/MaterialItem.js\`

\* \*\*Purpose\*\*: Renders a single learning material item (e.g., a PDF link, a video placeholder).  
\* \*\*Functionality\*\*:  
    \* Receives a \`material\` object as a prop.  
    \* Displays the material's \`title\`, an icon based on \`fileType\` (using \`getFileIcon\` helper), \`size\`, and \`uploadDate\`.  
    \* The item is typically an \`\<a\>\` tag linking to the \`material.url\`.  
\* \*\*Styling\*\*: \`components/MaterialItem.css\` styles individual material list items.

\#\#\# 4.8. \`index.css\` (Global Styles)

\* Contains basic resets, default font settings, and utility classes (like basic flexbox helpers if not using a framework like Tailwind CSS).  
\* Ensures a consistent base styling across the application.

\#\# 5\. Data Flow and State Management

The application uses a unidirectional data flow, common in React applications.

1\.  \*\*Data Source\*\*: \`academic-structure.json\` is imported into \`App.js\`.  
2\.  \*\*State Initialization\*\*: \`App.js\` initializes \`currentPath\` (usually empty or just the root) and \`selectedItem\` (usually the root object from the JSON).  
3\.  \*\*Props Drilling\*\*:  
    \* \`App.js\` passes the \`academicStructureData\` (or relevant parts) and navigation state (\`currentPath\`, \`selectedItem\`) down to child components (\`Sidebar\`, \`Breadcrumb\`, \`MainContent\`) as props.  
    \* It also passes callback functions (\`handleSidebarSelect\`, \`handleNavigation\`) down to \`Sidebar\` and \`Breadcrumb\` respectively.  
4\.  \*\*User Interaction & State Update\*\*:  
    \* \*\*Sidebar Click\*\*:  
        \* User clicks an item in \`SidebarItem\`.  
        \* \`SidebarItem\` calls \`onPathSelected(clickedItem, newPathToClickedItem)\` (which is \`handleSidebarSelect\` in \`App.js\`).  
        \* \`App.js\` updates its \`currentPath\` and \`selectedItem\` state.  
    \* \*\*Breadcrumb Click\*\*:  
        \* User clicks a segment in \`Breadcrumb\`.  
        \* \`Breadcrumb\` calls \`onNavigate(newPathSlice)\` (which is \`handleNavigation\` in \`App.js\`).  
        \* \`App.js\` updates its \`currentPath\` and \`selectedItem\` state.  
    \* \*\*Main Content Click (e.g., clicking a Department Card)\*\*:  
        \* User clicks a navigable card in \`MainContent\`.  
        \* \`MainContent\` calls \`onItemSelect(newPathToChildItem)\` (which is \`handleNavigation\` in \`App.js\`).  
        \* \`App.js\` updates its \`currentPath\` and \`selectedItem\` state.  
5\.  \*\*Re-render\*\*: When the state in \`App.js\` (\`currentPath\` or \`selectedItem\`) changes, \`App.js\` and its child components that depend on this state re-render to reflect the new data.  
    \* \`Breadcrumb\` updates to show the new path.  
    \* \`MainContent\` updates to display content for the newly \`selectedItem\`.  
    \* \`Sidebar\` might visually indicate the active path (this feature can be enhanced).

This centralized state management in \`App.js\` is suitable for the current scale of the application. For more complex applications, solutions like React Context API or Redux might be considered.

\#\# 6\. Styling

\* \*\*Approach\*\*: Each component in the \`src/components/\` directory has an associated \`.css\` file (e.g., \`Sidebar.js\` is styled by \`Sidebar.css\`).  
\* \*\*Global Styles\*\*: \`src/index.css\` contains global styles, resets, and potentially some utility classes.  
\* \*\*CSS Specificity\*\*: Standard CSS rules apply. Be mindful of class naming to avoid conflicts, though component-specific CSS files help mitigate this.  
\* \*\*Future Enhancements\*\*: Consider adopting Tailwind CSS for utility-first styling, CSS Modules for locally scoped class names, or Styled Components for component-level styling with JavaScript.

\#\# 7\. Key Conventions and Best Practices

\* \*\*Component Naming\*\*: Use PascalCase for React component names (e.g., \`SidebarItem\`, \`MainContent\`).  
\* \*\*File Naming\*\*: Match component JavaScript file names with the component name (e.g., \`SidebarItem.js\`). CSS files also match (e.g., \`SidebarItem.css\`).  
\* \*\*Props\*\*: Pass data and functions down from parent to child components via props. Use \`propTypes\` (or TypeScript) for type checking in larger projects.  
\* \*\*State\*\*: Keep state as local as possible. Lift state up to the nearest common ancestor when multiple components need to share or modify it (as seen with navigation state in \`App.js\`).  
\* \*\*JSON Structure Adherence\*\*: The application heavily relies on the specific nested structure of \`academic-structure.json\`. Any changes to this structure might require corresponding changes in how components access and render data.  
\* \*\*Unique Keys\*\*: When rendering lists of items (e.g., using \`.map()\`), always provide a unique \`key\` prop to each list item for efficient rendering by React (e.g., \`key={material.id}\` or \`key={getItemKey(item, level)}\`).  
\* \*\*Immutability\*\*: When updating state, especially arrays or objects, treat state as immutable. Create new arrays/objects instead of directly modifying the existing state.

\#\# 8\. Populating Content (\`academic-structure.json\`)

This is a core task for maintaining and expanding the platform.

\* \*\*Refer to the Template\*\*: Use the provided JSON template for a single program as a guide for structure (Years \> Semesters \> Courses \> MaterialTypes \> Materials).  
\* \*\*Detailed Guide\*\*: Follow the step-by-step guide on how to use the template to add new colleges, departments, programs, courses, and materials.  
\* \*\*Data Fields\*\*: Ensure all required fields are present for each level of the hierarchy (e.g., \`name\`, \`type\` for all items; \`code\`, \`description\`, \`materialTypes\` for courses; \`id\`, \`title\`, \`fileType\`, \`url\`, \`size\`, \`uploadDate\` for materials).  
\* \*\*Unique Material IDs\*\*: \*\*Crucial\!\*\* Every individual material item across the entire JSON file must have a globally unique \`id\`. This is essential for React's list rendering and potential future features. A good convention is \`prefix\_courseCode\_sequentialNumber\` (e.g., \`sn\_edu1101\_01\`).  
\* \*\*JSON Validation\*\*: After making significant changes to \`academic-structure.json\`, use an online JSON validator or an IDE plugin to check for syntax errors (e.g., missing commas, mismatched brackets/braces) before running the application.

\#\# 9\. Future Development / Potential Enhancements

\* \*\*React Router\*\*: Implement URL-based navigation using \`react-router-dom\`. This will allow direct linking to specific sections and improve SEO if the app were to be publicly hosted.  
\* \*\*Backend Integration\*\*:  
    \* Store \`academic-structure.json\` in a database (e.g., PostgreSQL, MongoDB, Firebase Firestore).  
    \* Develop APIs (e.g., using Node.js/Express, Python/Django/Flask) to serve this data to the frontend.  
    \* Implement content management features for administrators to update academic data through a UI instead of directly editing JSON.  
\* \*\*Search Functionality\*\*: Add a search bar to allow users to quickly find courses or materials.  
\* \*\*User Authentication\*\*: Implement user login/registration for students and administrators, potentially with role-based access to content or features.  
\* \*\*Advanced State Management\*\*: For more complex state interactions, consider using React Context API or a dedicated state management library like Redux or Zustand.  
\* \*\*Testing\*\*: Write unit tests (e.g., with Jest and React Testing Library) for components and integration tests for user flows.  
\* \*\*UI/UX Enhancements\*\*:  
    \* Improved visual design and branding.  
    \* Accessibility (ARIA attributes, keyboard navigation).  
    \* Loading states and error handling.  
    \* File previews within the app (e.g., PDF viewer).  
\* \*\*Performance Optimization\*\*: Code splitting, lazy loading of components or data.

\#\# 10\. Troubleshooting Common Issues

\* \*\*JSON Parsing Errors in \`academic-structure.json\`\*\*:  
    \* \*\*Symptom\*\*: Application fails to load or crashes, with console errors pointing to JSON parsing issues (e.g., "Unexpected token", "SyntaxError: Unexpected string in JSON").  
    \* \*\*Cause\*\*: Syntax errors in \`academic-structure.json\` (missing/extra commas, incorrect bracket/brace usage, comments in JSON).  
    \* \*\*Solution\*\*: Carefully validate the JSON file using an online validator or IDE tools. Remove any comments.  
\* \*\*Component Not Rendering / Data Not Displaying\*\*:  
    \* \*\*Symptom\*\*: Parts of the UI are missing, or data isn't showing up as expected.  
    \* \*\*Cause\*\*:  
        \* Incorrect props being passed to components.  
        \* Errors in how components access nested data from props (e.g., \`selectedItem.details\` when \`details\` doesn't exist).  
        \* Logic errors within the component's rendering method.  
        \* Mismatched \`type\` property in the JSON, leading to incorrect rendering logic in \`MainContent.js\`.  
    \* \*\*Solution\*\*: Use React Developer Tools to inspect component props and state. Add \`console.log\` statements to trace data flow and check values at different stages. Verify the structure of \`academic-structure.json\` against how components expect to read it.  
\* \*\*Styling Issues\*\*:  
    \* \*\*Symptom\*\*: UI elements are not styled correctly or styles conflict.  
    \* \*\*Cause\*\*: CSS specificity issues, incorrect class names, or styles in one component's CSS file unintentionally affecting another.  
    \* \*\*Solution\*\*: Use browser developer tools to inspect CSS rules being applied. Ensure class names are specific enough or consider CSS Modules for local scoping.  
\* \*\*Infinite Loops (Less Common with Current Setup)\*\*:  
    \* \*\*Symptom\*\*: Browser freezes or application becomes unresponsive.  
    \* \*\*Cause\*\*: Typically caused by \`useEffect\` hooks with incorrect dependencies or state updates within \`useEffect\` that trigger the effect again.  
    \* \*\*Solution\*\*: Review \`useEffect\` dependencies and ensure state updates within effects are handled correctly to prevent re-triggering. (The current project uses \`useEffect\` minimally in \`App.js\` for initial load, so this is less likely).

\---

This documentation should provide a solid foundation for any new developer. Remember to keep it updated as the project evolves\!

