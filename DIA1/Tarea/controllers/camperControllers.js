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

exports.createCamper =  async (req, res) => {
   try{
     const camper = new Camper (req.body);
     await camper.save();
     res.status(201).json(camper);
   } catch (error){
    res.status(500).json ({error: "Error al crear el camper"});

   }
};
exports.updateCamper =  async (req, res) => {
   try{
     const camper = await camper.findByIdAndUpdate(req.params.id,req.body, {new:true});
     if (!camper) return  res.status(404).json({error: "El camper se estravio"});
     res.json(camper);
    } catch (error){
    res.status(500).json ({error: "Error al actualizar un camper"});
   }
};
exports.deleteCamper =  async (req, res) => {
   try{
     const camper = await Camper.findById(req.params.id);
     if (! camper) return  res.status (404).json({error : "no se encontro el camper sonso"}) 
    res.json({message: "El camper ya expiro"})
   } catch (error){
    res.status(500).json ({error: "hubo un error al obtener camper pille el error 500"});
   }
};