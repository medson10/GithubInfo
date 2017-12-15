import React from 'react';
import ReactDOM from 'react-dom';

import Github from './components/Github.jsx';

const containerStyle = {
  paddingLeft: '150px',
  backgroundColor: '#e8e8e8',
  paddingRight: '150px',
  height: '80%',
  width: '80%'
}

ReactDOM.render(<Github />, document.getElementById('app'));
