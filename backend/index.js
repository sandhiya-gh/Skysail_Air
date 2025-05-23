const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./dbConfig'); 
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to SkySail Airlines API!');
});

// Routes
const airportsRoute = require('./routes/airportsRoute');
const airplanesRoute = require('./routes/airplanesRoute'); 
const flightsRoute = require('./routes/flightsRoute');
const crewMembersRoute = require('./routes/crewMembersRoute');
const seatsRoute = require('./routes/seatsRoute');
const passengersRoute = require('./routes/passengersRoute');
const bookingsRoute = require('./routes/bookingsRoute');
const messagesRoute = require('./routes/messagesRoute');
const passengerBookingsRoute = require('./routes/passengerBookingsRoute');
app.use('/api/airports', airportsRoute(pool));
app.use('/api/airplanes', airplanesRoute(pool)); 
app.use('/api/flights', flightsRoute(pool));
app.use('/api/crew-members', crewMembersRoute(pool));
app.use('/api/seats', seatsRoute(pool));
app.use('/api/passengers', passengersRoute(pool));
app.use('/api/bookings', bookingsRoute(pool));
app.use('/api/messages', messagesRoute(pool));
app.use('/api/passenger-bookings', passengerBookingsRoute(pool));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});