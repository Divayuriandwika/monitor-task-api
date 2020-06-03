const { Task } = require('../../models');


module.exports = {
	getAll: async (req, res) => {
		try {
			const task = await Task.find({});

			res.status(200).json({ message: 'Get All Assignment', data: task });
		} catch (error) {
			console.log(error);
		}
    },
    create: async (req, res) => {
        try {
            const { name, division, assignment, deadline, phone } = req.body;

            const task = await Task.create({
                name, 
                division, 
                assignment, 
                deadline, 
                phone
            });

            res.status(201).json({
                message: "New assignment successfully created!",
                data: task,
            });
        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, division, assignment, deadline, phone } = req.body;
            const edited = {
                name, 
                division, 
                assignment, 
                deadline, 
                phone
            };

            const result = await Task.findByIdAndUpdate(id, {
                $set: {
                    ...edited,
                },
            }, {
                new:true
            }
            );


            res.status(200).json({
                message: `Edit movie with id : ${id} is successfully`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteByID: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await Task.findByIdAndRemove(id);

            res.status(200).json({
                message: `Movie with id : ${id} is successfully deleted`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
}