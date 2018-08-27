import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/Navbar/NavBar';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faTimesCircle);

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
