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
    // getUserById: async (req, res) => {
	// 	try {
	// 		const id = req.user._id;
	// 		const status = req.user.isLoggedIn;
	// 		const user = await User.findById(id);
	// 		res.status(200).json({ currentUser: user, isLoggedIn: status });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },
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
            
            // const { _id } = result;

            // bcrypt.compare(password, result.password).then((response) => {
            //     if (response === true) {
            //         const token = jwt.sign({ _id }, SECRET_KEY, {
            //             expiresIn: "1h",
            //         });

            //         res.status(200).send({ token: token });
            //     } else {
            //         res.status(401).send({
            //             message: "Your are not allowed to enter this api",
            //         });
            //     }
            // });

            if(password === users.password) {
                res.status(200).send({ message: 'login success', data: users.id});
            } else {
                res.status(401).send({
                    message: "Your are not allowed to enter this api",
            })};
        } catch (error) {
            console.log(error);
        }
    }
    }
