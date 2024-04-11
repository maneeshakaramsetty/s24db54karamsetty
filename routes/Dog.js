var express = require('express');
const Dog_controllers= require('../controllers/Dog');
var router = express.Router();
/* GET Dog */
 
router.get('/', Dog_controllers.Dog_view_all_Page);
 
router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', Dog_controllers.Dog_delete );
/* GET detail Dog page */
router.get('/detail', Dog_controllers.Dog_view_one_Page);
module.exports = router;
/* GET create Dog page */
router.get('/create', Dog_controllers.Dog_create_Page);
/* GET create update page */
router.get('/update', Dog_controllers.Dog_update_Page);
/* GET delete costume page */
router.get('/delete', Dog_controllers.Dog_delete_Page);

