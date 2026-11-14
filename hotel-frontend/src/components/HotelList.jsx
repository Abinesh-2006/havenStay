import  HotelCard from './HotelCard';
import './HotelList.css';
function HotelList({hotels,currentPage,hotelsPerPage, onDeleteHotel}){
    
const startIndex = (currentPage - 1) * hotelsPerPage;
const endIndex = startIndex + hotelsPerPage;
const currentHotels = hotels.slice(startIndex, endIndex);
    return(
        <div className="hotel-list">
            <h3>All Properties</h3>
            
                {currentHotels.map((hotel)=>(
                    <HotelCard key={hotel.id}
                     hotel={hotel}
                        onDeleteHotel={onDeleteHotel}/>
                ))}
    
        </div>
    );
}
export default HotelList;