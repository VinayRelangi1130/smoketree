// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const Address = require('../models/Address');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, address } = req.body;

    try {
        const user = await User.create({ name });

        await Address.create({ address, UserId: user.id });

        res.status(200).json({ message: 'User and address saved successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
