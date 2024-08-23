import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtStyles from './components/ArtStyles';
import Navbar from './components/Navbar';
import Map from './components/Map';


export default function App() {
    return (
        <Router>
            <Navbar />
            <>
                <Routes>
                    {/* <Route path="/" element={<ArtStyles />} /> */}
                    <Route path="/" element={<Map />} />
                </Routes>
            </>
        </Router>
    );
}
