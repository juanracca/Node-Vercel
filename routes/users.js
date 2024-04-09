const express = require('express');
const { getAllUsers, createUser, getUser, updadteUser, deleteUser } = require('../controllers/userControllers');
const router = express.Router();

router.get('/', (req,res) => {
    console.log('hola')
    getAllUsers(req,res);
});

router.post('/', (req,res) => {
    createUser(req,res);
});

router.get('/:id', (req,res) => {
    getUser(req,res);
});

router.put('/:id', (req,res) => {
    updadteUser(req,res);
});

router.delete('/:id', (req,res) => {
    deleteUser(req,res);
});

module.exports = router; //Para poder usarlo en el archivo server.js