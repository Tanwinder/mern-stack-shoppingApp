import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ShoppingApp from './containers/ShoppingApp';
// jest.mock('firebase/app');

// test('invalid path should redirect to 404', () => {
//   const wrapper = mount(
//     <BrowserRouter initialEntries={[ '/' ]}>
//       <App/>
//     </BrowserRouter>
//   );
//   expect(wrapper.find(LandingPage)).toHaveLength(0);
//   expect(wrapper.find(NotFoundPage)).toHaveLength(1);
// });

// test('valid path should not redirect to 404', () => {
//   const wrapper = mount(
//     <BrowserRouter initialEntries={[ '/' ]}>
//       <App/>
//     </BrowserRouter>
//   );
//   expect(wrapper.find(ShoppingApp)).toHaveLength(1);
// });
