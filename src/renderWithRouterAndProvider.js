import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AgrotisProvider from './context/AgrotisProvider';

const renderWithRouterAndProvider = (component, route = '/') => {
  const history = createMemoryHistory();
  history.push(route);
  return ({ ...render(
    <AgrotisProvider>
      <Router history={ history }>
        {component}
      </Router>
    </AgrotisProvider>,
  ),
  history });
};

export default renderWithRouterAndProvider;
