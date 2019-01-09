var db = require('../config/db');
var tasks = require('../models/tasks');

exports.createTask = function(req,res){
    try {
        if(req.body._id){
            var id = req.body._id;
            delete req.body._id;
            console.log(req.body)
            tasks.findOneAndUpdate(id,req.body, function (err) {
                if (err) return handleError(err);
                res.json({success:'successajdjasgdjagsdj'});
            });
        } else {
            var task = new tasks({
                title:req.body.title,
                description:req.body.description
            });
            task.save(function (err) {
                if (err) return handleError(err);
                res.json({success:'success'});
            });
        }
    }
    catch (err) {
        console.log(err);
    }
    
}
exports.getTask = function(req,res){
    try {
        tasks.find({},function(err, data){
            res.json({data:data});
        });
    }
    catch (err) {
        console.log(err);
    }    
}
exports.getTaskById = function(req,res){
    try {
        tasks.findById({"_id":req.body.id},function(err, data){
            res.json({data:data});
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.deleteTask = function(req,res){
    try {
        tasks.deleteOne({"_id":req.body.id},function(err, data){
            res.json({status:"success"});
        });
    }
    catch (err) {
        console.log(err);
    }
}