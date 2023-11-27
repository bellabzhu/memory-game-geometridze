import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './main/Main';
import NotFound from './notFound/NotFound';
import Footer from './footer/Footer';

const cardImages = [
  { "src": "/cards/card1.jpg", matched: false },
  { "src": "/cards/card2.jpg", matched: false },
  { "src": "/cards/card3.jpg", matched: false },
  { "src": "/cards/card4.jpg", matched: false },
  { "src": "/cards/card5.jpg", matched: false },
  { "src": "/cards/card6.jpg", matched: false },
  { "src": "/cards/card7.jpg", matched: false },
  { "src": "/cards/card8.jpg", matched: false },
]

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <Main cardImages={cardImages} />} 
        />
        <Route path="/error-404" element={<NotFound />} />
        <Route path="*" element={ <Navigate to="/error-404" /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
