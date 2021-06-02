const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    login: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    ads: [{ type: Types.ObjectId, ref: 'Ad'}]
})

module.exports = model('User', schema);