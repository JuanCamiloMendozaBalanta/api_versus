const express = require('express');
const app = express();

const { getPlayerByEmail} = require('../player/player.controller');

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(400).json();
    }else{

        const player= await getPlayerByEmail(email)
        if(player){
    
        }else{
            res.status(404).json(email);
        }
    }
});


module.exports = app