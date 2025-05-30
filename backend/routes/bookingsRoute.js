const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

module.exports = (pool) => {
  const controller = bookingsController(pool);
  router.get('/', controller.getAllBookings);
  router.get('/:id', controller.getBookingById);
  router.post('/', controller.createBooking);
  router.put('/:id', controller.updateBooking);
  router.delete('/:id', controller.deleteBooking);
  return router;
};