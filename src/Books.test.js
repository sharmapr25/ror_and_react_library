import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Books';

it('render without crashing',()=>{
	const div = document.createElement('div');
	ReactDOM.render(<Books/>, div);
})