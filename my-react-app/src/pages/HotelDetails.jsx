
import { useParams, useNavigate } from 'react-router-dom';
import './HotelDetails.css';
import { Helmet } from 'react-helmet-async';
function HotelDetails({ hotels }) {

    const { id } = useParams();
    const navigate = useNavigate();
    const hotel = hotels.find(
        (item) => item.id === Number(id)
    );
    if (!hotel) {
        return (
            <div>
                <h2>Hotel not found!</h2>
                <button onClick={() => navigate('/')}>
                    Back to Home
                </button>
            </div>
        );
    }
    const mapUrl = `https://maps.google.com/maps?hl=en&q=${hotel.latitude},${hotel.longitude}&z=15&output=embed`;
    return (
      <>
      <Helmet>
    <title>{hotel.title} | Hotel Booking</title>

    <meta
        name="description"
        content={hotel.description}
    />
    </Helmet>
        <div className="hotel-details">
            <button onClick={() => navigate('/')}>
                ← Back to Hotels
            </button>
            <h2>{hotel.title}</h2>
            <img
                src={hotel.imageUrl || "/images/hotel1.jpg"}
                alt={`${hotel.title} hotel room`}
                className="details-image"
            />
            <div className="details-info">
                <p>
                    <strong>Description:</strong> {hotel.description}
                </p>
                <p>
                    <strong>Latitude:</strong> {hotel.latitude}
                </p>
                <p>
                    <strong>Longitude:</strong> {hotel.longitude}
                </p>
                <h3>Price: ₹{hotel.price} per night</h3>

            </div>

            <h2>Hotel Location</h2>

            <iframe
    title="Hotel Location"
    src={mapUrl}
    width="100%"
    height="350"
    style={{ border: 0, borderRadius: '8px' }}
    loading="lazy"
    allowFullScreen
/>

            <button onClick={() =>
                window.open(
                    `https://www.google.com/maps?q=${hotel.latitude},${hotel.longitude}`,
                    '_blank'
                )
            }>
                Open in Google Maps
            </button>
            <button
                onClick={() => navigate(`/edit-hotel/${hotel.id}`)}
            >
                Edit Hotel
            </button>

        </div>
        </>
    );
}

export default HotelDetails;
