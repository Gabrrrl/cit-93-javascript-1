let restaurant = {
    name: 'Grill House',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    } 
    ,seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    }
    ,removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
// seatparty
//removeparty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

