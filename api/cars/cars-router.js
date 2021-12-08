// DO YOUR MAGIC
const router = require('express').Router()
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
}=require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
      const cars = await Car.getAll()
      res.status(200).json(cars)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
      const car = await Car.getById(req.params.id)
      res.status(200).json(car)
    } catch (err) {
      next(err)
    }
  })

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      const car = await Car.create(req.body)
      res.status(201).json(car)
    } catch (err) {
      next(err)
    }
  })
  

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message
    })
  })


  module.exports = router;