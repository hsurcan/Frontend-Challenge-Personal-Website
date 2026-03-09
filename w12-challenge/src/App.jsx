import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store'; 
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
  
  const [localTheme] = useLocalStorage('theme', 'light');
  const [localLang] = useLocalStorage('lang', 'tr');

  useEffect(() => {
    dispatch(setTheme(localTheme));
    dispatch(setLang(localLang));
  }, [localTheme, localLang, dispatch]);

  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Switch>
            <Route exact path="/">

              <Header />
              <main>
                <Skills />
                <Profile />
                <Projects />
              </main>
              <Footer />
            </Route>

          //hata verme ihtimaline karşı
            <Route path="*">
              <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl dark:text-white">404 - Page Not Found</h1>
              </div>
            </Route>
          </Switch>

          <ToastContainer 
            position="bottom-right"
            autoClose={3000}
            theme="colored"
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;