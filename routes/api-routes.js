const db = require("../models/index");

module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: ["$exercises.duration"]
                    }
                }
            }
        ])
        // db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        db.Workout.findOneAndUpdate({_id: id}, {push: {exercises: req.body}}, {new: true}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        })
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
};