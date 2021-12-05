
const express = require("express");
const db = require("./db");
const pixelRouter = express.Router();

//app.use("/pixel", pixelRouter)
pixelRouter.get("/", (req, res)=>{
    console.log('success get');
    db.getAll((items)=>{
        res.json(items.reverse());
    });
});

pixelRouter.post("/post", (req, res) => {
    console.log('success post');
    const {name, comment, size, data} = req.body;
    db.add(name, comment, size, data, (newItem)=> {
        res.json(newItem);
    })
});

pixelRouter.delete("/delete",(req,res)=>{
    console.log('success delete');
    db.remove(req.body.name, ()=>{
        res.status(200).send();
    });
});

pixelRouter.get("/exist/:name",(req,res)=>{
    console.log('success check');
    db.check(req.params.name,(result)=>{
        if(result===null){ // if there is no data
            res.status(200).send(false);
        }else{ // if the data exist
            console.log(result);
            res.status(200).send(true);
        }
    });
});

module.exports = pixelRouter;

