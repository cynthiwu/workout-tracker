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
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        db.Workout.updateOne({_id: id}, {$push: {exercises: req.body}}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        })
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                        $sum: ["$exercises.duration"]
                    }
                }
            },
            {$sort: { day: -1 }},
            { $limit: 7 },
            {$sort: { day: 1}}
        ]).then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
};