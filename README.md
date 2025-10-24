# My Library - Personal Book Collection Manager

A modern, elegant book library application built with React 19 and Tailwind CSS. This project demonstrates clean component architecture, REST API integration, async state management, and thoughtful UI/UX design with a beautiful library-themed aesthetic.

**Live Demo:** [View Screenshots Below](#-screenshots) | **Tech Stack:** React 19 • Tailwind CSS v4 • Axios • JSON Server • Vite

## 📸 Screenshots

### Main Interface

![Book Library Main View](./screenshots/main-view.png)
_Clean, intuitive interface for managing your book collection_

### Edit Mode

![Inline Book Editing](./screenshots/edit-mode.png)
_Seamless inline editing with save/cancel actions_

## ✨ Features

### Core Functionality

- **Add Books** - Quick book entry with a streamlined form and API persistence
- **Edit Books** - Inline editing with intuitive save/cancel controls (ready for API integration)
- **Delete Books** - One-click book removal with icon buttons (ready for API integration)
- **Persistent Storage** - Books saved to JSON database and survive page refreshes
- **Real-time Updates** - Instant UI updates using React state management
- **Book Count Display** - Live count of books in your collection

### UI/UX Highlights

- **Library-Themed Design** - Warm wood tones, parchment backgrounds, and gold accents
- **Responsive Layout** - Works seamlessly on desktop and mobile devices
- **Hover Effects** - Subtle interactions for better user experience
- **Icon-Based Actions** - Clean, modern icons for edit and delete operations
- **Compact Inline Editing** - Edit books without leaving the list view
- **Auto-focus** - Input fields auto-focus for quick data entry

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with hooks and modern patterns
- **Tailwind CSS v4** - Utility-first CSS with custom design system
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript features

### Development Tools

- **ESLint** - Code linting with React-specific rules
- **Vite Plugin React** - Fast Refresh and JSX support
- **Custom Vite Configuration** - Treats `.js` files as JSX automatically

### Backend & API

- **Axios** - HTTP client for API communication
- **JSON Server** - RESTful mock API for development and testing
- **Persistent Storage** - Books saved to local JSON database

## 🏗️ Architecture

### Component Structure

```
App (Root)
├── BookCreate - Form component for adding new books
└── BookList - Container for book collection
    └── BookShow - Individual book card
        └── BookEdit - Inline edit form with save/cancel
```

### State Management

- **Local State** - Uses React `useState` for simple, predictable state management
- **Async Operations** - Handles asynchronous API calls with async/await
- **Props Drilling** - Clear parent-to-child data flow
- **Event Handlers** - Callback props for child-to-parent communication

### API Integration

- **RESTful Architecture** - Full CRUD operations via REST API
- **Axios Client** - Configured base client with localhost endpoint
- **Error Handling** - Robust error handling for network failures
- **Modular API Layer** - Centralized API functions in dedicated module

### Design System

Custom Tailwind theme with library-inspired colors:

- **Primary Colors** - Warm wood tones (saddle brown, chocolate)
- **Accent Colors** - Gold highlights and burgundy accents
- **Backgrounds** - Parchment and cream tones
- **Typography** - Playfair Display for headings, Inter for body text

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd books
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the JSON Server (in a separate terminal)**

   ```bash
   npm run server
   ```

   This starts the mock API server on port 3001 with the database file `db.json`

4. **Start the development server (in another terminal)**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm start`       | Runs the app in development mode on port 3000 |
| `npm run server`  | Starts JSON Server API on port 3001           |
| `npm run build`   | Creates an optimized production build         |
| `npm run lint`    | Runs ESLint to check code quality             |
| `npm run preview` | Preview the production build locally          |

**Note:** For full functionality, run both `npm run server` and `npm start` in separate terminal windows.

## 💡 Key Implementation Details

### API Architecture

The application uses a clean, modular API layer:

```javascript
// Centralized API client configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
});

// Dedicated functions for each operation
export const createBook = async (book) => {
  const response = await apiClient.post('/books', book);
  return response.data;
};
```

**Benefits:**

- Single source of truth for API configuration
- Easy to swap backends (development → production)
- Consistent error handling across all requests
- Type-safe with JSDoc annotations for better IDE support

### Inline Edit Pattern

Books can be edited inline without navigation:

- Click edit icon to toggle edit mode
- Input field with embedded save/cancel buttons
- ESC key support for quick cancellation (can be added)
- Auto-focus on edit activation

### Vite Configuration Optimization

Custom Vite setup to prevent unwanted reloads:

```javascript
server: {
  watch: {
    ignored: ['**/db.json'];
  }
}
```

This prevents the development server from reloading when JSON Server updates the database file, ensuring a smooth development experience.

### Form Best Practices

All forms implement proper event handling:

- `event.preventDefault()` to prevent page refreshes
- Explicit `type="button"` on non-submit buttons
- Proper form validation before submission
- Loading states for async operations (ready to implement)

## 📝 Project Structure

```
books/
├── src/
│   ├── api/
│   │   └── index.js           # Centralized API functions
│   ├── components/
│   │   ├── BookCreate.js      # Add book form
│   │   ├── BookEdit.js        # Inline edit component
│   │   ├── BookList.js        # Book collection container
│   │   └── BookShow.js        # Individual book card
│   ├── App.js                 # Root component with state
│   ├── index.js               # App entry point
│   └── index.css              # Global styles + Tailwind
├── db.json                    # JSON Server database
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Custom theme configuration
└── package.json               # Dependencies and scripts
```

## 🤝 Contributing

This is a learning project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Built as part of Stephen Grider's "Modern React with Redux" course on Udemy, with additional enhancements including API integration, custom styling, and production-ready configuration.
