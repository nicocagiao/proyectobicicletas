const mongoose = require('mongoose');
const { token } = require('morgan');

const Schema = mongoose.Schema;
const TokenSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Usuario' },
    token: {type: String, required: true },
    createdat: {type: Date, required: true, default: Date.now, expires: 43200 }
});

module.exports = mongoose.model('Token', TokenSchema);
