class Plane {
    constructor(){
        this.passengers = []
        this.destination = undefined
        this.location = undefined
    }
    board(passenger){
        this.passengers.push(passenger)
    }
    setDestination(destination){
        this.destination = destination
    }
    setLocation(location) {
        this.location = location
    }
}
module.exports = Plane