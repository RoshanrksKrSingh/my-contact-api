const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 *     requestBody:
 *       description: Contact form data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: Roshan Singh
 *               email:
 *                 type: string
 *                 format: email
 *                 example: roshan@example.com
 *               message:
 *                 type: string
 *                 example: I need help with your service.
 *     responses:
 *       200:
 *         description: Success message
 *       400:
 *         description: Bad request, missing fields
 *       500:
 *         description: Server error
 */
router.post('/contact', submitContact);

module.exports = router;
