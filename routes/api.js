const express = require('express');
console.router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/komik', upload.single('gambar'), komikController.createkomik);
router.get('/komik', komikController.getAllkomik);
router.get('/komik/:id', komikController.getkomikById);
router.put('/komik/:id', upload.single('gambar'), komikController.updatekomik);
router.delete('/komik/:id', komikController.deletekomik);   

module.exports = router;