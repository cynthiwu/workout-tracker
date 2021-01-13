const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    
    title: String, 

    duration: {
        type: Number, 
        required: "A duration is required."
    },

    weight: {
        type: Number, 
        require: "A weight is required."
    },

    reps: {
        type: Number, 
        require: "Number of reps is required."
    },

    sets: {
        type: Number,
        require: "Number of sets is required."
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

