const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            
        })
    } catch (e){
        console.log('Server error', e.message);
        process.exit(1);
    }
}

app.listen(5000, () => console.log(`Server hase been started on port ${PORT}...`));
