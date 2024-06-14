import logo from './logo.svg';
// import './App.css';

import {Header, Home, Footer} from './components'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-black background-opacity-30" >
      <Header />
      <main className='items-center'>
        <Home />
        <Footer />
      </main>
    </div>
  );
}

export default App;
