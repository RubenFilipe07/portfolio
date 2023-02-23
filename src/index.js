import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Curriculo from './components/Curriculo/Curriculo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path='/' exact element={<App/>}></Route>
         <Route path='/curriculo' element={<Curriculo/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

