import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import HotelList from '../components/HotelList';
import './Home.css';
import Pagination from '../components/Pagination';
import { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
function Home({hotels, onDeleteHotel}){
    
    const[currentPage,setCurrentPage] = useState(1);
    const [filteredHotels, setFilteredHotels] = useState(hotels); 
    useEffect(() => {
    setFilteredHotels(hotels);
}, [hotels]);
const hotelsPerPage = 4;
    
function applyFilters(search, minPrice, maxPrice, sortOrder) {
    let result = hotels.filter((hotel) => {
        const matchesName = hotel.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesMin = minPrice === '' ||
            Number(hotel.price)>= Number(minPrice);

        const matchesMax = maxPrice === '' ||
            Number(hotel.price) <= Number(maxPrice);

        return matchesName && matchesMin && matchesMax;
    });
    if (sortOrder === 'low') {
        result.sort((a, b) => 
            Number(a.price) - Number(b.price));
    }
    if (sortOrder === 'high') {
        result.sort((a, b) => 
            Number(b.price) - Number(a.price));
    }
    setFilteredHotels(result);
    setCurrentPage(1);
}



const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage);
    return(
        <div>
            <Helmet>
        <title>HavenStay | Find Your Perfect Stay</title>

        <meta
        name="description"
        content="Find comfortable hotels with our Hotel Booking application."
        />

        <meta
        name="keywords"
        content="hotel booking, hotels, hotel rooms, accommodation"
        />
        </Helmet>
            <Header/>
            <div className="main-content">
                <FilterSidebar  onApplyFilters={applyFilters}/>
                 <HotelList
                    hotels={filteredHotels}
                    currentPage={currentPage}
                    hotelsPerPage={hotelsPerPage}
                    onDeleteHotel={onDeleteHotel}
                />

                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
}
export default  Home;