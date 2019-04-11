const Task = require('../models/task.js');


module.exports = {
    index: (_req, res) => {
        Task.find({})
            .then(tasks => {
                res.json(tasks);
            })
            .catch(err => {
                console.log(err);
            })
    },
    show: (req, res) => {
        Task.findOne({ _id: req.params.id })
            .then(task => {
                res.json(task);
            })
            .catch(err => {
                console.log(err);
            })
    },
    display: (req, res) => {
        res.render('index');
    }, 
    create: (req, res) => {
        Task.create(req.body)
            .then(task => {
                res.json(task);
            })
            .catch(err => {
                console.log(err);
            })
    },
    edit: (req, res) => {
        Task.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            console.log(err);
        })
    },
    delete: (req, res) => {
        Task.findByIdAndRemove(req.params.id)
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            console.log(err);
        })
    }
}