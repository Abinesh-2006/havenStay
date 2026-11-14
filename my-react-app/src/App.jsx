

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddHotels from './pages/AddHotels';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import HotelDetails from './pages/HotelDetails';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';

import {
    getHotels,
    addHotel as createHotel,
    updateHotel as editHotel,
    deleteHotel as removeHotel
} from './services/api';

function App() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        getHotels()
            .then(data => setHotels(data))
            .catch(error => console.log("Error loading hotels:", error));
    }, []);

   async function addHotel(newHotel) {
    const result = await createHotel(newHotel);

    if (!result.hotel) {
        throw new Error('Hotel could not be added');
    }
    setHotels(prev => [...prev, result.hotel]);
    return result.hotel;
}

    async function deleteHotel(id) {
        try {
            await removeHotel(id);
            setHotels(prevHotels =>
            prevHotels.filter(hotel => Number(hotel.id) !== Number(id))
            );
        } catch (error) {
            console.log("Error deleting hotel:", error);
        }
    }

  async function updateHotel(updatedHotel) {
    const result = await editHotel(updatedHotel.id, updatedHotel);

    if (!result.hotel) {
        throw new Error('Hotel could not be updated');
    }
    setHotels(prev => 
        prev.map(hotel =>
            hotel.id === updatedHotel.id ? result.hotel : hotel
        )
    );
    return result.hotel;
}

    return (
        <HelmetProvider>
        <BrowserRouter>
        <div className="app">
        <Navbar />
        <Routes>
        <Route
        path="/"
        element={
        <Home hotels={hotels}
        onDeleteHotel={deleteHotel}
        />
        }
        />

        <Route
        path="/add-hotel"
        element={
        <AddHotels
        onAddHotel={addHotel}
        />
        }
        />

        <Route
        path="/edit-hotel/:id"
        element={
        <AddHotels
        hotels={hotels}
        onUpdateHotel={updateHotel}
        />
                            }
                        />

        <Route
        path="/hotel-details/:id"
        element={
        <HotelDetails hotels={hotels} />
        }
        />
        </Routes>
        <Footer />

                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
