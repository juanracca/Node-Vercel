const User = require('../models/user');
const zod = require('zod');

exports.getAllUsers = async (req,res) => {
    console.log('La concha de tu vieja')
    console.log(res)
    try {
        const users = await User.find();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: error.message })
    };
};

exports.createUser = async (req,res) => {
    const schema = zod.object({
        name: zod.string(
            {
                required_error:'Name is required' 
            }
        ).min(3, 
            {
                message: 'Name must be at least 3 characters long'
            }
        ).max(255,
            {
                message: 'Name must not be larger than 255 characters'
            }),
        email: zod.string(
            {
                required_error:'Email is required' 
            }
        ).min(5, 
            {
                message: 'Email must be at least 5 characters long'
            }
        ).max(255, 
            {
                message: 'Email must not be larger than 255 characters'
            }),
        password: zod.string(
            {
                required_error:'Password is required' 
            }
        ).min(5, 
            {
                message: 'Password must be at least 5 characters long'
            }
        ).max(1024, 
            {
                message: 'Password must not be larger than 1024 characters'
        })
    });

    try {
        schema.parse(req.body);
    } catch (error) {
        res.status(400).json({ message: error.errors[0].message });
        return;
    };

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message })
    };
};

exports.getUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    };
};

exports.updadteUser = async (req,res) => {
    const schema = zod.object({
        name: zod.string(
            {
                required_error:'Name is required' 
            }
        ).min(3, 
            {
                message: 'Name must be at least 3 characters long'
            }
        ).max(255,
            {
                message: 'Name must not be larger than 255 characters'
            }),
        email: zod.string(
            {
                required_error:'Email is required' 
            }
        ).min(5, 
            {
                message: 'Email must be at least 5 characters long'
            }
        ).max(255, 
            {
                message: 'Email must not be larger than 255 characters'
            }),
        password: zod.string(
            {
                required_error:'Password is required' 
            }
        ).min(5, 
            {
                message: 'Password must be at least 5 characters long'
            }
        ).max(1024, 
            {
                message: 'Password must not be larger than 1024 characters'
        })
    });

    try {
        schema.parse(req.body);
    } catch (error) {
        res.status(400).json({ message: error.errors[0].message });
        return;
    };

    try {
        const updtaedUser = await User.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.status(200).json(updtaedUser);
    } catch (error) {
        res.status(404).json({ message: error.message })
    };
};

exports.deleteUser = async (req,res) => {
    try {
        const deletedUser = await User.deleteOne({_id: req.params.id });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(404).json({ message: error.message })
    };
};