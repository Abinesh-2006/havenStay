import './HotelForm.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HotelForm({ onAddHotel, onUpdateHotel, editHotel }) {
    const navigate = useNavigate();
      const[hotel,setHotel]=useState({
        title:'',
        description:'',
        latitude:'',
        longitude:'',
        price:'',
        imageUrl:''
    });
    
    const[preview,setPreview]=useState(null);
    useEffect(() => {
        if (editHotel) {
            setHotel({
                ...editHotel,
                imageUrl: editHotel.imageUrl || ''
            });

            setPreview(editHotel.imageUrl || '');
        }
    }, [editHotel]);

    function handleChange(e){
        const{name,value}=e.target;
        setHotel(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleImage(e){
        const file=e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setHotel(prev => ({
                    ...prev,
                    imageUrl: reader.result
                }));
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

   async function handleSubmit(e){
        e.preventDefault();
        if(
            !hotel.title ||
            !hotel.description ||
            !hotel.latitude ||
            !hotel.longitude ||
            !hotel.price ||
            !hotel.imageUrl 
        ){
            alert('please fill all fields');
            return;
        }
        if (
            Number(hotel.latitude) < -90 ||
            Number(hotel.latitude) > 90 ||
            Number(hotel.longitude) < -180 ||
            Number(hotel.longitude) > 180 ||
            Number(hotel.price) <= 0
        ) {
            alert('Please enter valid values');
            return;
        }
        
        const updatedHotel = {
            ...hotel,
            id: editHotel ? editHotel.id : undefined,
            price: Number(hotel.price),
            latitude: Number(hotel.latitude),
            longitude: Number(hotel.longitude)
        };
         try {
            if (editHotel) {
                await onUpdateHotel(updatedHotel);
                alert('Hotel updated successfully!');
            } else {
                await onAddHotel(updatedHotel);
                alert('Hotel added successfully!');
            }
            navigate('/');
        } catch (error) {
    console.error("Hotel Error:", error);
    alert(error.message);
}
    }

    return(
        <div className="hotel-form">
            <h2>{editHotel ? 'Edit Hotel' : 'Add New Hotel'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Hotel Image
                </label>
                <input type="file" accept="image/*" onChange={handleImage} />
    {preview && (
    <img
        src={preview}
        alt="Hotel image preview"
        className="image-preview"
    />
)}

        <label >Hotel Title</label>
        <input
        name = "title" 
        placeholder="enter hotel name"
        value = {hotel.title}  
        onChange={handleChange} 
        required
        />

        <label >description</label>
        <textarea 
        name = "description"
        placeholder="enter hotel description"
        value={hotel.description}
        onChange={handleChange}
        required
        />

        <label>latitude</label>
        <input type="number"
        name="latitude"
        placeholder="enter latitude"
        value={hotel.latitude} 
        onChange={handleChange}
        required
        />

        <label>Longitude</label>
        <input
        type="number"
        name="longitude"
        placeholder="Enter longitude"
        value={hotel.longitude}
        onChange={handleChange}
        required
        />
        <label>price</label>
        <input type="number"
        name="price"
        placeholder="enter price"
        value={hotel.price}
        onChange={handleChange}
        required
        />

        <button type="submit">
        {editHotel ? 'Update' : 'Save Hotel'}
        </button>
        <button type="button" onClick={() => navigate('/')}>
        Cancel
    </button>
            </form>
        </div>
    );
}


export default HotelForm;