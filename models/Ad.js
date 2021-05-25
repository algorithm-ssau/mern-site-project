const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title: {type: String, required: true, maxlength: 70},
    task: {type: String, required: true},
    budjet: {type : String, required: true},
    deadline : {type: Date, required: true},
    contacts: {type: String, required: true},
    date: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Ad', schema);