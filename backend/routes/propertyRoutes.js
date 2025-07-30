// Property Rules

const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// Create property
router.post('/', async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res. status(500).json({ error: err.message });
    }
});

module.exports = router;