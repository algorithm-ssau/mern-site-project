const { Router } = require("express");
const Ad = require("../models/Ad");
const auth = require("../middleware/auth.middlware");
const router = Router();

router.post("/create", auth, async (req, res) => {
  try {
    const { title, task, budjet, deadline, contacts } = req.body;

    const ad = new Ad({
      title,
      task,
      budjet,
      deadline,
      contacts,
      owner: req.user.userId,
    });
    await ad.save();

    res.status(201).json({ ad });
  } catch (e) {
    
    res
      .status(500)
      .json({ message: "Что-то пошло не так, попробуйте сноваААААА" });
  }
});

router.get("/", async (req, res) => {
  try {
    
    const ads = await Ad.find();
    res.json(ads);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/myads", auth, async (req, res) => {
  try {
    const ads = await Ad.find({ owner: req.user.userId });
    //const ads = await Ad.find();
    res.json(ads);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    res.json(ad);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;