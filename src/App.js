import React from 'react';
import { Upload } from './components/Upload';
import './App.css';
import './skeleton.css';

function App() {
	return (
		<div className="App">
			<div style={{ textAlign: 'center' }}>
        <br/>
				<div className='title-container'><span className="fold"></span><h1>File Ninja</h1> </div>
				<h4>The sneaky, ephemeral file share</h4>
        <div>
					<img src="https://img.icons8.com/windows/32/000000/ninja-head.png" />
				</div>
				<Upload />
			</div>
		</div>
	);
}

export default App;
