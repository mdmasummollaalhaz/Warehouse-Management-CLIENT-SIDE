import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './templates/Header/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import ManageItems from './pages/ManageItems/ManageItems';
import AddItem from './pages/AddItem/AddItem';
import MyItems from './pages/MyItems/MyItems';
import BookDetails from './pages/BookDetails/BookDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './templates/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        } />
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/books/:bookId' element={
          <RequireAuth>
            <BookDetails />
          </RequireAuth>

        } />

        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
