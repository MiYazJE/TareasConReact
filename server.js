const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Validate DB
const dbConfig = require('./config/dbConfig.config');
mongoose.connect(dbConfig.url, {useNewParser: true})
    .then(() => console.log('*** MongoDB Working ***'))
    .catch((error) => {
        console.log(error);
        process.exit();
    })

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./app/routes/api.routes.js'));

app.listen(app.get('port'), () => console.log('*** LISTENING IN PORT ' + app.get('port')) + '***');
