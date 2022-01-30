// TODO 2: SETUP ROUTING (ROUTER)


const PatientController = require("../controllers/PatientController");


const express  = require("express"); 


const router = express.Router();


router.get("/", (req, res) => {
    res.send("Hello Express")
});


router.get("/patients", PatientController.index);


router.get("/patients/:id", PatientController.show);


router.get("/patients/search/:name", PatientController.search);


router.get("/patients/status/:status", PatientController.findByStatus);


router.post("/patients", PatientController.store);


router.put("/patients/:id", PatientController.update);


router.delete("/patients/:id", PatientController.destroy);


module.exports = router;