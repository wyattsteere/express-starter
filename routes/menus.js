import menusDessertsRouter from './menus_desserts.js'
import express from 'express'; //improt express from 'express'; 
var router = express.Router(); //var router = express.Router(); express router isntead of app

//export default router 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the menu');
});

router.use('/desserts', menusDessertsRouter); 


export default router;


