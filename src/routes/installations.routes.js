const express = require('express');
const {
    getAllInstallations,
    getInstallationById,
    createInstallation,
    updateInstallation,
    deleteInstallation
} = require('../controllers/installations.controller');

const router = express.Router();

router.get('/', getAllInstallations);
router.get('/:id', getInstallationById);
router.post('/', createInstallation);
router.put('/:id', updateInstallation);
router.delete('/:id', deleteInstallation);

module.exports = router;