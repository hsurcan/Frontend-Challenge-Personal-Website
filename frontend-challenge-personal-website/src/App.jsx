import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from './hooks/useLocalStorage';
import { setTheme, setLang } from './store/homeSlice';

//Components
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.home.theme);

  const [localTheme] = useLocalStorage('theme', 'light');
  const [localLang] = useLocalStorage('lang', 'en');

  useEffect(() => {
    dispatch(setTheme(localTheme));
    dispatch(setLang(localLang));
  }, [localTheme, localLang, dispatch]);

  return (

    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#252128] transition-colors duration-300">
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <Skills />
                  <Profile />
                  <Projects />
                </main>
                <Footer />
              </>
            } />
            <Route path="*" element={
              <div className="flex justify-center items-center h-screen dark:text-white font-bold">
                <h1 className="text-3xl">404 - Not Found</h1>
              </div>
            } />
          </Routes>
        </Router>

        <ToastContainer position="bottom-right" autoClose={3000} theme={theme} />
      </div>
    </div>
  );
}

export default App;