import './HotelCard.css';
import { useNavigate } from 'react-router-dom';
function HotelCard({hotel, onDeleteHotel }){
       const navigate = useNavigate();
    return(
       <div className="hotel-card">
        <div className="hotel-image">
             <img
                    src={hotel.imageUrl || "/images/hotel1.jpg"}
                    alt={`${hotel.title} hotel`}
                />
        </div>
        <div className="hotel-info">
            <h2>{hotel.title}</h2>
            <p className="location"> {hotel.latitude}, {hotel.longitude}</p>
            <p className="hotel-description"> 
               {hotel.description}
            </p>
            <div className="hotel-rating">
                ★★★★☆ 
            </div>
        </div>
        <div className="hotel-price">
            <h3>₹{hotel.price}</h3>
            <p>per night</p>
            <button 
            onClick={() => navigate(`/hotel-details/${hotel.id}`)}>
                View Details</button>
            <div className="hotel-actions">
                <button className="edit-button"
                 onClick={() => navigate(`/edit-hotel/${hotel.id}`)}>
                    ✏️Edit
                </button>
                <button className="dlt-button"
                onClick={() => {
                            const confirm = window.confirm(
                                'Are you sure you want to delete this hotel?'
                            );

                            if (confirm) {
                                onDeleteHotel(hotel.id);
                                alert('Hotel deleted successfully!');
                            }
                        }}>
                🗑️
                </button>
            </div>
        </div>
       </div>
    );
}
export default HotelCard;