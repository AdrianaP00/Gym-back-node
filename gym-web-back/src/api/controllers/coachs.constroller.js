const Coachs = require("../models/coachs.models")

const getCoachs = async (req, res) => {
    
    try {
      const allCoachs = await Coachs.find().populate("courses");
      return res.status(200).json(allCoachs);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const getOneCoach = async (req, res) => {
    try {
        const { id } = req.params
        const oneCoach = await Coachs.findById(id)
        return res.status(200).json(oneCoach)

    } catch (error) {
        return res.status(500).json(error)
    }
};

const getCoachByClass = async (req, res) => {
    try {
        const { id } = req.params
        const oneCoachByCourse = await Coachs.find({courses:id})
        return res.status(200).json(oneCoachByCourse)

    } catch (error) {
        return res.status(500).json(error)
    }
};


  
  const postCoach = async (req, res) => {
      try {
          const newCoach = new Coachs(req.body)
          const createdCoach = await newCoach.save()
          return res.status(201).json(createdCoach)
      } catch (error) {
          return res.status(500).json(error)
      }
  }
  
  const putCoach = async (req, res) => {
      try {
          const { id } = req.params
          const putCoachs = new Coachs(req.body)
          putCoachs._id = id;
          const updateCoach = await Coachs.findByIdAndUpdate(id, putCoachs, { new: true })
          if (!updateCoach) {
              return res.status(404).json({ message: "no existe un coach con este id" })
          }
          return res.status(200).json(updateCoach)
      } catch (error) {
          return res.status(500).json(error)
      }
  }
  
  const deleteCoach = async (req, res) => {
      try {
          const { id } = req.params
          const deleteCoach = await Coachs.findByIdAndDelete(id)
          if (!deleteCoach) {
              return res.status(404).json({ message: "este id no existe" })
          }
          return res.status(200).json(deleteCoach)
      } catch (error) {
          return res.status(500).json(error)
      }
  }
  
  module.exports = { getCoachs,getOneCoach,getCoachByClass, postCoach, putCoach, deleteCoach }
