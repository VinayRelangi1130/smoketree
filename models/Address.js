const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Address = sequelize.define('Address', {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
