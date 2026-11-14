const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/api/hotels', async (req, res) => {
    try {
        const [hotels] = await db.query(
            `SELECT id, title, description, latitude,
            longitude, price, image_url AS imageUrl
            FROM hotels`
        );

        res.json(hotels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/hotels/:id', async (req, res) => {
    try {
        const [hotels] = await db.query(
            `SELECT id, title, description, latitude,
             longitude, price, image_url AS imageUrl
             FROM hotels WHERE id = ?`,
            [req.params.id]
        );

        if (hotels.length === 0) {
            return res.status(404).json({
                message: 'Hotel not found'
            });
        }

        res.json(hotels[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/hotels', async (req, res) => {
    try {
        const {
            title, description, latitude,
            longitude, price, imageUrl
        } = req.body;

        const [result] = await db.query(
            `INSERT INTO hotels
            (title, description, latitude, longitude, price, image_url)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [title, description, latitude,
             longitude, price, imageUrl]
        );

        res.status(201).json({
            message: 'Hotel added successfully',
            hotel: {
                id: result.insertId,
                ...req.body
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/hotels/:id', async (req, res) => {
    try {
        const {
            title, description, latitude,
            longitude, price, imageUrl
        } = req.body;

        const [result] = await db.query(
            `UPDATE hotels SET
            title = ?,
            description = ?,
            latitude = ?,
            longitude = ?,
            price = ?,
            image_url = ?
            WHERE id = ?`,
            [title, description, latitude,
            longitude, price, imageUrl, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Hotel not found'
            });
        }

        res.json({
            message: 'Hotel updated successfully',
            hotel: {
                id: Number(req.params.id),
                ...req.body
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/hotels/:id', async (req, res) => {
    try {
        const [result] = await db.query(
            'DELETE FROM hotels WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Hotel not found'
            });
        }

        res.json({
            message: 'Hotel deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

