import logo from './logo.svg';
// import './App.css';

import {Header, Home, Footer, TravelPlans} from './components'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-black background-opacity-30" >
      <Header />
      <main className='items-center'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/:country" element={ <TravelPlans /> } />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
