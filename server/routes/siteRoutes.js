const express = require('express');
const router = express.Router();

import appController from "../controller/siteController"

router.get("/", appController.index)
router.get("/items", appController.items)
router.get("/items/:id", appController.item)

export default router