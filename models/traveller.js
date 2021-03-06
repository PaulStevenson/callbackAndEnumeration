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
    return this.journeys.filter((journey) => {
        return journey.transport === transport;
    })
};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
    return this.journeys.filter((journey) => {
        return journey.distance >= distance;
    })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((total, journey) => {
        return total + journey.distance;
    }, 0);

};

Traveller.prototype.getUniqueModesOfTransport = function (property, value) {
};


module.exports = Traveller;
