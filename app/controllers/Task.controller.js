const Task = require('../models/Task.model');

module.exports = {

    findAll: async (req, res) => {
        const tasks = await Task.find().exec();
        res.send(tasks);
    },

    create: async (req, res) => {
        console.log(req.body)
        if (!req.body || Object.keys(req.body).length == 0) {
            res.send({message: 'The task is empty.'});
            return;
        }

        const { title, description } = req.body;
        const task = new Task({
            title,
            description
        })
        const data = await task.save();
        res.send(data);
    }

}