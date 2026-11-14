const API_URL = 'http://localhost:5000/api/hotels';

export const getHotels = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addHotel = async (hotel) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotel)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to add hotel');
    }

    return data;
};

export const updateHotel = async (id, hotel) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotel)
    });

    return response.json();
};

export const deleteHotel = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    return response.json();
};