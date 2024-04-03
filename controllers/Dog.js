var Dog= require('../models/Dog');
// List of all food
exports.Dog_list = function(req, res) {
res.send('NOT IMPLEMENTED: Dog list');
};
// for a specific Dog.
exports.Dog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id);
};
// Handle Dog create on POST.
exports.Dog_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Dog create POST');
};
// Handle Dog delete from on DELETE.
exports.Dog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};
// Handle Dog update form on PUT.
exports.Dog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id);
};
 
 
exports.Dog_list = async function(req, res) {
    try{
    theDog = await Dog.find();
    res.send(theDog);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

exports.Dog_view_all_Page = async function(req, res) {
    try{
    theDogs = await Dog.find();
    res.render('Dog', { title: 'Dog Search Results', results: theDogs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle food create on POST.
exports.Dog_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Dog_Type = req.body.Dog_Type;
    document.Name = req.body.Name;
    document.Age = req.body.Age;
    document.Color = req.body.Color;

    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };