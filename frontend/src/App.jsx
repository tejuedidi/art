import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Carousel from './components/Carousel';

export default function App() {
    return (
        <Router>
            <Navbar />
            <>
                <Routes>
                    <Route path="/" element={<Map />} />
                    <Route path="/art/:region" element={<Carousel />} />
                </Routes>
            </>
        </Router>
    );
}
