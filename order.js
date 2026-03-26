const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// CREATE ORDER
router.post("/create", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order Placed" });
});

// GET USER ORDERS
router.get("/:userId", async (req, res) => {
    const orders = await Order.find({ buyerId: req.params.userId });
    res.json(orders);
});

// UPDATE STATUS
router.put("/:id", async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    });
    res.json({ message: "Updated" });
});

module.exports = router;