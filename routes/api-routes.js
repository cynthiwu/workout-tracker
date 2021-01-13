const db = require("../models/index");

module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        });
    });

    // app.get("/exercise?id=:id", (req, res) => {
    //     const id = req.params.id;
    //     console.log(id)
    //     db.Workout.findOne({__id: id}).then(dbWorkout => {
    //         res.json(dbWorkout);
    //     });
    // });
};