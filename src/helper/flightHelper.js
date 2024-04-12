import flightblock from '../data/flights/flight.json';
import flightaccomodation from '../data/flights/accomondation.json';
import flightairlines from '../data/flights/airlines.json';
import flightamenities from '../data/flights/amenities.json';
import flightroute from '../data/flights/flightroute.json';
import flighttype from '../data/flights/flighttype.json';
import flightstops from '../data/flights/stops.json';

// Amenities
function getAmenities(items) {
    var elems = flightamenities.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Accomodation
function getAccomodation(items) {
    var elems = flightaccomodation.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Airlines
function getAirlines(items) {
    var elems = flightairlines.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Route
function getRoute(items) {
    var elems = flightroute.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Type
function getType(items) {
    var elems = flighttype.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Stops
function getStops(items) {
    var elems = flightstops.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Flight all details
// const getAllFlight =()=> flightblock.map(flight => flight);

const getAllFlight = () => flightblock.filter(flight => flight);

// function getAllFlight(id) {
//     return flightblock.filter(flight => { return flight.id === parseInt(id) })[0];
// }

// function getAllFlight(id) {
//     return flightblock.filter(item => item.id === (id)[0]);
//   }

// Flight details
function getFlight(id) {
    return flightblock.filter(flight => { return flight.id === parseInt(id) })[0];
}
// Related flight
function getFlightByCategory(items, pageRoute) {
    var elems = flightblock.filter((flight) => { return parseInt(flight.id) !== parseInt(pageRoute) && flight.category.some(r => items.includes(r)) });
    return elems;
}
// Recent Flight
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    flightblock.slice(0, 5).map((flight) => {
        flight.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the flight.json object
        flight.flightdate = `${today.getDate()} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return flight;
    });
}
function getRecentFlight() {
    var elems = flightblock.filter(flight => {
        return flight.timestamp < new Date(flight.flightdate);
    });
    return elems;
}
setDemoDate();
// Filter
function getFilteredFlight(flights, filter = { priceFilter: [] }) {
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    // Price Filter
    if (priceFilterValue) {
        flights = flights.filter(flight => {
            return (flight.price !== undefined && flight.price !== null) && flight.price > filter.priceFilter[0] && flight.price <= filter.priceFilter[1]
        })
    }
    return flights;
}
export { getAmenities, getAccomodation, getAirlines, getRoute, getType, getFlight, getStops, getFlightByCategory, getRecentFlight, getFilteredFlight, getAllFlight };