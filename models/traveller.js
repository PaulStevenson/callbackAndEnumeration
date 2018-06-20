const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.journeys = function () {
    return this.journeys.map((journey) => {
        return journey;
    });

};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
    return this.journeys.find((journey) => {
        return journey.startLocation === startLocation;
    });
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
