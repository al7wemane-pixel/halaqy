const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middleware/auth');
const { validatePayment } = require('../middleware/validation');

// Create payment intent
router.post('/', authMiddleware, validatePayment, paymentController.createPaymentIntent);

// Process Mada payment
router.post('/mada', authMiddleware, paymentController.processMadaPayment);

// Process Apple Pay
router.post('/apple-pay', authMiddleware, paymentController.processApplePayment);

// Process Tabby payment
router.post('/tabby', authMiddleware, paymentController.processTabbyPayment);

// Get payment status
router.get('/:paymentId', authMiddleware, paymentController.getPaymentStatus);

// Webhook for payment confirmation
router.post('/webhook/confirm', paymentController.handlePaymentWebhook);

module.exports = router;
