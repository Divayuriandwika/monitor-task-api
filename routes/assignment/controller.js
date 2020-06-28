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


        findByID: async (req, res) => {
            try {
        const { id } = req.params;

        const resultByID = await Task.findById(id)
        res.status(200).json({
            message: `Get assignment By taskID: ${id}`,
            data: resultByID,
        });
    } catch (error) {
        console.log(error)
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
    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;

            const deleteTask = await Task.findByIdAndDelete(id);

            res.status(200).json({
                message: `Task with id : ${id} is successfully deleted`,
                data: deleteTask,
            });
        } catch (error) {
            console.log(error);
        }
    },
}