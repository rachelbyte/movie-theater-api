const {Router} = require('express');
const { Show } = require('../models/Show');
const userRouter = Router();

const { User } = require("../models/User")

userRouter.get("/users", async (req, res) => {
const find = await User.findAll()
res.send(find)
})

userRouter.get("/users/:id", async (req, res) => {
    const find = await User.findOne({where: {id: req.params.id}})
    res.send(find)
    
})

userRouter.get("/users/:id/shows", async (req, res) => {

        const find = await User.findByPk(req.params.id, {include: Show})

//         let shows = await find.getShows()

// console.log(find)
//         res.send(find.getShows())
        
        
})

userRouter.put("/users/:id/shows", async (req, res) => {

    const find = await User.findByPk(req.params.id)

    find.update

    res.send(find)
    
})
    

module.exports = userRouter