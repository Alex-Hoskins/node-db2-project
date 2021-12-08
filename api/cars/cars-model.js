const db = require('../../data/db-config')

module.exports = {
  getAll,
  getById,
  create,
  getByVin
};

async function getAll(){
  // DO YOUR MAGIC
  const rows = await db('cars')
    .select('id', 'vin', 'make', 'model', 'mileage', 'title', 'transmission')
    .orderBy('id', 'asc')
  return rows
}

async function getById(id){
  // DO YOUR MAGIC
  const [car] = await db('cars')
  .where('id', id)
  return car
}

async function getByVin(vin){
  // DO YOUR MAGIC
  const [car] = await db('cars')
  .where('vin', vin)
  return car
}

async function create(car){
  // DO YOUR MAGIC
  const carid = await db('cars')
    .insert(car)
  const newCar = await getById(carid)
  return newCar
}
