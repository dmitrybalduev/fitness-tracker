const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(function (workouts) {
            res.json(workouts)
        })
        .catch(function (err) {
            console.log(err)
        })
})

router.post("/api/workouts", function (req, res) {
    db.Workout.create({})
        .then(function (workouts) {
            res.json(workouts)
        })
        .catch(function (err) {
            console.log(err)
        })
})

router.put("/api/workouts/:id", function (req, res){
    console.log(req.body)
    db.Workout.where('_id', req.params.id).update({$push: {"exercises": req.body}})
    .then(function(results){
        res.json(results)
    })
    .catch(function (err) {
        console.log(err)
    })
})


router.get("/api/workouts/range", function(req, res){
    db.Workout.aggregate([{$addFields: { totalDuration: { $sum: '$exercises.duration' } }}])
    .then(function (workouts) {
        res.json(workouts)
    })
    .catch(function (err) {
        console.log(err)
    })
})


module.exports = router;
