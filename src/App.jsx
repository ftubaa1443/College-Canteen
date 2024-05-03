// import React, { useRef, useState } from 'react';
// import Tesseract from 'tesseract.js';
// import Page from './components/index';
// import { BrowserRouter, Routes , Route  } from 'react-router-dom';
// import Change from './components/page';


// const App = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [text, setText] = useState('');

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//     } catch (err) {
//       console.error('Error accessing camera:', err);
//     }
//   };

//   const captureImage = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
    
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
//     const imageData = canvas.toDataURL('image/jpeg');

//     Tesseract.recognize(
//       imageData,
//       'eng', 
//       { logger: m => console.log(m) }
//     ).then(({ data: { text } }) => {
//       setText(text);
//     });
//   };

//   return (
//     <div>
//       <h1>Image Scanner</h1>
//       <video ref={videoRef} width="640" height="480" autoPlay></video>
//       <button onClick={captureImage}>Capture Image</button>
//       <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
//       <div>{text}</div>
//       <button onClick={startCamera}>Start Camera</button>
//     </div>
//   );
// };

// const App = ()=>{
//     return(
//       <div>
//         <BrowserRouter>
//            <Routes>
//               <Route path='/' element={<Page/>}></Route>
//               <Route path='/page' element={<Change/>} ></Route>
//            </Routes>
//         </BrowserRouter>
//       </div>
//     )
// }

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './components/Componenta';
import { ComponentB } from './components/Componentb';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/" component={ComponentA} />
        <Route path="/componentb" component={ComponentB} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;