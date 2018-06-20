const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.journeys = function () {
    return this.journeys.map((journey) => {
        return journey;
    });

};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map((journey) => {
      return journey.endLocation;
    });
};

Traveller.prototype.getModesOfTransport = function (transport) {
    return this.journeys.map((journey) => {
      return journey.transport;
    });
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
