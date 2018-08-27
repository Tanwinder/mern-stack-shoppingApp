import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/Navbar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  </Provider>
);

export default App;
