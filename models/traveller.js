const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.journeys = function () {
    const objectArray = this.journeys.map((journey) => {
        return journey;
    });
    return objectArray;

};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
    // const objectArray = this.traveller.getStartLovation.find((jojourney) => {
    //     return journey.startLocation === startLocation;
    // });
    // return objectArray

};

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
