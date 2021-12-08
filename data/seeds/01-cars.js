// STRETCH
exports.seed = async function (knex) {
    // Truncating a table deletes ALL existing entries and resets the primary keys
    await knex('cars').truncate()
    await knex('cars').insert([
      { vin:'123244dd', make:'Chevrolet', model:'Colorado', mileage:144050, title:'yes', transmission:'automatic'},
      { vin:'123gaasd', make:'Honda', model:'Civic', mileage:289006, title:'yes', transmission:'manual'},
      { vin:'123b44dd', make:'Dodge', model:'Journey', mileage:62000, title:'yes', transmission:'automatic'},
      { vin:'1g3244dd', make:'Scion', model:'TC', mileage:200789, title:'yes', transmission:'manual'},
      { vin:'12ds244e', make:'Jeep', model:'Cherokee', mileage:100040, title:'yes', transmission:'automatic'},
      { vin:'12jh244d', make:'Honda', model:'Pilot', mileage:140, title:'yes', transmission:'automatic'},
    ]);
  };