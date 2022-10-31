class ParkingLot {
    // initialize
    constructor(size) {
      let lot = []
      for (let i = 0; i < size; i++) {
        lot.push(null)
      }
      this.lot = lot
    }
    
    // method to park
    park(vehicle) {
      let vehicleType = vehicle.constructor.name
      let vehicleSize = vehicleType === 'Bike' ? 1 :
        vehicleType === 'Car' ? 2 : 
        vehicleType === 'Van' ? 3 : 0
      let freeSpot = this.lot.findIndex((space, idx, spaces) => {
        let bikeSpace = space === null
        let carSpace = vehicleType === 'Bike' || spaces[idx + 1] === null
        let vanSpace = vehicleType === 'Bike' || vehicleType === 'Car' || spaces[idx + 2] === null
        return bikeSpace && carSpace && vanSpace
      })
  
      if (freeSpot > -1) {
        this.lot.fill(vehicle.license, freeSpot, freeSpot + vehicleSize)
        return true
      }
      return false
      
    }
  
    // remove a car
    retrieve(license) {
      let removalSpot = this.lot.indexOf(license)
      if (removalSpot > -1) {
        this.lot = this.lot.map(spot => spot === license ? null : spot)
        return true
      }

      return false
    }
  }