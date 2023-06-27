import React from 'react';
import ReactDOM from 'react-dom';
import Appa from './Appa';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Appa />, div);
  ReactDOM.unmountComponentAtNode(div);
});
