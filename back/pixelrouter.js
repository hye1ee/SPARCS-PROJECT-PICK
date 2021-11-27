//prevent security problem in express
const cors = require('cors');

const express = require("express");
const db = require("./db");
const pixelRouter = express.Router();
pixelRouter.use(cors());


//app.use("/pixel", pixelRouter)
pixelRouter.get("/", (req, res)=>{
    console.log('success get');
    db.getAll((items)=>{
        res.json(items);
    });
});

pixelRouter.post('/', (req, res) => {
    console.log('post');
    const {name, comment, size, data} = req.body;
    db.add(name, comment, size, data, (newItem)=> {
        res.json(newItem);
    })
});


module.exports = pixelRouter;

