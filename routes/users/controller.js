const { User } = require('../../models');


module.exports = {

	getAll: async (req, res) => {
		try {
			const users = await User.find({});

			res.status(200).json({ message: 'Get All Users', data: users });
		} catch (error) {
			console.log(error);
		}
    },

    findByID: async (req, res) => {
            try {
        const { id } = req.params;

        const resultByID = await User.findById(id)
        res.status(200).json({
            message: `Get data By UserID: ${id}`,
            data: resultByID,
        });
    } catch (error) {
        console.log(error)
    }
    },
    
    create: async (req, res) => {
        try {
            const { fullname, email, password, role} = req.body;

            // // Check if email has already registered
			const result = await User.findOne({ email: email });
			if (result) return res.status(401).send('Your email has already registered');

            const users = await User.create({
                fullname, 
                email, 
                password,
                role,
            });

            res.status(201).json({
                message: "New user successfully created!",
                data: users,
            });
        } catch (error) {
            console.log(error);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const users = await User.findOne({ email: email });

            // guard clause
            if(!users) return res.status(401).send("your email is not registered")

            if(password === users.password) {
                res.status(200).send({ message: 'login success', id: users.id, role: users.role});
            } else {
                res.status(401).send({
                    message: "Your are not allowed to enter this api",
            })};
        } catch (error) {
            console.log(error);
        }
    }
    }
