const Task = require('../models/Task.model');

module.exports = {

    findAll: async (req, res) => {
        console.log('searching');
        const tasks = await Task.find().exec();
        res.send(tasks);
    },

}