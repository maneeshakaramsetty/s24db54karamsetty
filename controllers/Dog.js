var Dog = require('../models/Dog');
// List of all Dog
exports.Dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog list');
};
// for a specific Dog.
exports.Dog_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Dog.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
exports.Dog_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Dog.findById( req.params.id)
// Do updates of properties
if(req.body.Dog_Type) toUpdate.Dog_Type = req.body.Dog_Type;
if(req.body.Name) toUpdate.Name = req.body.Name;
if(req.body.Age) toUpdate.Age = req.body.Age;
if(req.body.Color) toUpdate.Color = req.body.Color;

let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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


    // Handle Dog create on POST.
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
    