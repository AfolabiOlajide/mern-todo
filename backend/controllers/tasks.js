import Task from "../models/Task.js";

export const createTask = async(req, res, next) => {
    try {
        const newTask = await new Task({
            title: req.body.title,
            user: req.user.id,
            completed: req.body.completed
        })

        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
    } catch (error) {
        return next(error);
    }
}

export const getAllTask = async (req, res, next) => {
    try{
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
    }catch (error){
        return next(error);
    }
}

