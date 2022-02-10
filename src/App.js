import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import "./lib/fontawesome-free-5.15.4-web/css/all.min.css"

import Header from './Components/Header';
import { Watched } from './Components/Watched';
import { WatchList } from './Components/Watchlist';
import { Add } from './Components/Add';
import { GlobalProvider } from './Context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/watched" element={<Watched/>} />
                    <Route path="/" element={<WatchList/>} />
                    <Route path="/add" element={<Add/>}/>
                </Routes>
            </Router>
        </GlobalProvider>
    );
}

export default App;
