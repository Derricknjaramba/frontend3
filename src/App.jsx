import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import components
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import AddBooks from './components/AddBooks';
import UsersignIn from './components/UsersignIn';
import UsersignUp from './components/UsersignUp';
import AdminsignUp from './components/Adminsignup';
import Adminsignin from './components/Adminsignin';
import BorrowedBooks from './components/BorrowedBooks';
import AdminBorrowedBooks from './components/AdminBorrowedBooks';
import PurchasedBooks from './components/PurchasedBooks';
import Books from './components/Books';
import UserDashboard from './components/UserDashboard';
import BooksOnSale from './components/BooksOnSale';
import RemoveBook from './components/RemoveBook';
import ViewReceipts from './components/ViewReceipts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-books" element={<AddBooks />} />
        <Route path="/admin/remove-book" element={<RemoveBook />} />
        <Route path="/signin" element={<UsersignIn />} />
        <Route path="/usersignup" element={<UsersignUp />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/adminsignup" element={<AdminsignUp />} />
        <Route path="/admin/borrowed-books" element={<AdminBorrowedBooks />} />
        <Route path="/admin/purchased-books" element={<PurchasedBooks />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/books" element={<Books />} />
        <Route path="/user/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/user/purchased-books" element={<PurchasedBooks />} />
        <Route path="/user/books-on-sale" element={<BooksOnSale />} />
        <Route path="/user/book-receipts" element={<ViewReceipts />} />
      </Routes>
    </Router>
  );
}

export default App;
