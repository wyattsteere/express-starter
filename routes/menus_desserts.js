import express from 'express'; 

var router = express.Router(); 

router.get('/', (req, res) => {
    res.send('this is the desserts section')
})

router.get('/1', (req, res) => {
    res.send('Chocolate Cake')
})

//broken endpoint to show error
router.get('/2', (req, res) => {
    //Fake an error to pretend our db failed
    throw (new Error("loading dessert two failed"))

    res.send("dessert 2") 
})

router.get('/3', (req, res) => {  
    try {
        throw (new Error("loading dessert two failed"))

        res.send("dessert 3")
    } catch (err) {
        console.log(err)
        res.status(500).send("Error loading dessert 3") 
    }

    res.send("dessert 2") 
})



export default router;