import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import City from '../Components/City';
import Home from '../Components/Home';
import Pollution from '../Components/Pollution';

it('Test City component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/pollutiondata" element={<Pollution />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
