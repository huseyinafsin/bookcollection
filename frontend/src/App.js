import './App.css';

import Navbar from './components/Navbar/Navbar';
import BookList from './components/BookList/BookList';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import NotFound from './pages/NoFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="content">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound/>} />

        </Routes>
        </div>
      </main>
      <Footer/>
    </div>
  );
}



export default App;