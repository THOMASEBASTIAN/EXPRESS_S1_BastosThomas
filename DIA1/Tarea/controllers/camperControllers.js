const Camper = require("../models/campers");

exports.getAllCampers = async (req, res) => {
  try {
    const campers = await Camper.find();
    res.json(campers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener campers" });
  }
};

exports.getCampersByid =  async (req, res) => {
   try{
     const camper = await Camper.findById(req.params.id);
     if (! camper) return  res.status (404).json({error : "no se encontro el camper sonso"}) 
    res.json(camper)
   } catch (error){
    res.status(500).json ({error: "hubo un error al obtener camper pille el error 500"});

   }
};


