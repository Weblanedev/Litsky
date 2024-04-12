import cruiseblock from '../data/cruise/cruise.json';
import cruiseaccomodation from '../data/cruise/accomodation.json';
import cruiseamenities from '../data/cruise/amenities.json';
import cruisecabintype from '../data/cruise/cabintype.json';
import cruiseline from '../data/cruise/cruiseline.json';
import cruisepreference from '../data/cruise/preference.json';

// Amenities
function getAmenities(items) {
    var elems = cruiseamenities.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Accomodation
function getAccomodation(items) {
    var elems = cruiseaccomodation.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Cabin type
function getCabintype(items) {
    var elems = cruisecabintype.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Cruise Line
function getCruiselin(items) {
    var elems = cruiseline.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Preference
function getPreference(items) {
    var elems = cruisepreference.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Cruise details
function getCruise(id) {
    return cruiseblock.filter(cruise => { return cruise.id === parseInt(id) })[0];
}
// Related cruise
function getCruiseByCategory(items, pageRoute) {
    var elems = cruiseblock.filter((cruise) => { return parseInt(cruise.id) !== parseInt(pageRoute) && cruise.category.some(r => items.includes(r)) });
    return elems;
}
// Filter
function getFilteredCruise(cruises, filter = { priceFilter: [], nightFilter: [] }) {
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    var nightFilterValue = filter.nightFilter[0] !== undefined && filter.nightFilter[1] !== undefined && filter.nightFilter[0] !== null && filter.nightFilter[1] != null && filter.nightFilter[0] !== '' && filter.nightFilter[1] !== '';
    // Price Filter
    if (priceFilterValue) {
        cruises = cruises.filter(cruise => {
            return (cruise.price !== undefined && cruise.price !== null) && cruise.price > filter.priceFilter[0] && cruise.price <= filter.priceFilter[1]
        })
    }
    // Night Filter
    if (nightFilterValue) {
        cruises = cruises.filter(cruise => {
            return (cruise.night !== undefined && cruise.night !== null) && cruise.night > filter.nightFilter[0] && cruise.night <= filter.nightFilter[1]
        })
    }
    return cruises;
}
export { getAmenities, getAccomodation, getCabintype, getCruiselin, getPreference, getCruise, getCruiseByCategory, getFilteredCruise };