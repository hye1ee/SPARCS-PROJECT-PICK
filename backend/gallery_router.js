const express = require("express");
const db = require("../db");
const router = express.Router();


router.get("/", (req, res)=>{
   db.getAll((items)=>{
       res.json(items);
   })
});

moule.exports = router;

