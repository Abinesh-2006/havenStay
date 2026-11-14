import HotelForm from '../components/HotelForm';
import './AddHotel.css';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
function AddHotels({onAddHotel, onUpdateHotel, hotels = []}){
      const { id } = useParams();

    const editHotel = id
        ? hotels.find(hotel => hotel.id === Number(id))
        : null;
    return(
          <>
            <Helmet>
                <title>
                    {editHotel
                        ? `Edit ${editHotel.title} | Hotel Booking`
                        : 'Add Hotel | Hotel Booking'}
                </title>

                <meta
                    name="description"
                    content={
                        editHotel
                            ? `Update details of ${editHotel.title} hotel.`
                            : 'Add a new hotel with its image, description, price and location.'
                    }
                />
            </Helmet>
        <div className="add-hotel-page">
            <div className="form-container">
            <HotelForm onAddHotel={onAddHotel}
            onUpdateHotel={onUpdateHotel}
                    editHotel={editHotel}  />
            </div>
        </div>
        </>
    );
}
export default AddHotels;