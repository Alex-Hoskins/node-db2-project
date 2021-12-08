const Car = require('./cars-model')
const vinValidator = require('vin-validator');

exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const validCar = await Car.getById(req.params.id)
    .then(res=>{
      if(res){
        console.log(res)
        next()
      }
      else{
        next({ status: 404, message: `car with id ${req.params.id} is not found` })
      }
    })
    .catch(err=>{
      next(err)
    })
}

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if (!req.body.vin){
    next({ status: 400, message: "vin is missing" })
  }
  else if(!req.body.make){
    next({ status: 400, message: "make is missing"})
  }
  else if(!req.body.model){
    next({ status: 400, message: "model is missing" })
  }
  else if(!req.body.mileage){
    next({ status: 400, message: "mileage is missing" })
  }
  else {
    next();
  }
}

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  var isValidVin = vinValidator.validate(req.body.vin);
  if(isValidVin == false){
    next({ status: 400, message: `vin ${req.body.vin} is invalid`  })
  }
  else{
    next()
  }
}

exports.checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getByVin(req.body.vin)
    console.log(car)
    if(car){
      next({ status: 400, message: `vin ${req.body.vin} already exists`  })
    }
    else{
      next()
    }
  } catch (err) {
    next(err)
  }
}
