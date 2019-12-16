const express = require('express');
const router = express.Router();

import apiController from "../controller/apiController"

router.get("/items", apiController.items)
router.get("/items/:id", apiController.item)

export default router