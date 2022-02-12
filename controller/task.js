const getAllTask = (req, res, next) => {
    res.send('all Items')
}

const createTask = (req, res, next) => {
    res.json(req.body)
}

const getTask = (req, res, next) => {
    res.json({id: req.params.id})
}

const updateTask = (req, res, next) => {
    res.send('Update Task')
}

const deleteTask = (req, res, next) => {
    res.send('Delete Task')
}

module.exports = {
    getAllTask, 
    createTask,
    getTask,
    updateTask,
    deleteTask,
}