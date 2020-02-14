const Task = require('../models/Task.model');

module.exports = {

    findAll: async (req, res) => {
        const tasks = await Task.find().exec();
        res.send(tasks);
    },

    create: async (req, res) => {

        if (!validateBody(req.body)) {
            res.send({ message: 'The task is empty.' });
            return;
        }

        const { title, description } = req.body;
        const task = new Task({
            title,
            description
        })

        const data = await task.save();
        res.send(data);
    },

    delete: async (req, res) => {
        if (!validateBody(req.body)) {
            res.send({ message: 'The task is empty.' });
            return;
        }

        const taskDeleted = await Task.deleteOne(req.body);
        res.send(taskDeleted);
    },

    getId: async (req, res) => {
        if (!req.params || !req.params.title) {
            res.send({ message: 'Title is empty' });
            return;
        }

        const task = await Task.findOne(req.params);
        res.send(task);

    }

}

const validateBody = (body) => {
    return body && Object.keys(body).length != 0;
}