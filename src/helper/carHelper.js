import carblock from '../data/cars/cars.json';
import caramenities from '../data/cars/amenities.json';
import caragents from '../data/cars/agents.json';
import carpreference from '../data/cars/prefrences.json';
import cartype from '../data/cars/type.json';

// Amenities
function getAmenities(items) {
    var elems = caramenities.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Agents
function getAgents(items) {
    var elems = caragents.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Car type
function getCartype(items) {
    var elems = cartype.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Preference
function getPreference(items) {
    var elems = carpreference.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Car details
function getCar(id) {
    return carblock.filter(car => { return car.id === parseInt(id) })[0];
}
// Related car
function getCarByCategory(items, pageRoute) {
    var elems = carblock.filter((car) => { return parseInt(car.id) !== parseInt(pageRoute) && car.category.some(r => items.includes(r)) });
    return elems;
}
// Filter
function getFilteredCar(cars, filter = { priceFilter: [] }) {
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    // Price Filter
    if (priceFilterValue) {
        cars = cars.filter(car => {
            return (car.price !== undefined && car.price !== null) && car.price > filter.priceFilter[0] && car.price <= filter.priceFilter[1]
        })
    }
    return cars;
}
export { getAmenities, getAgents, getCartype, getPreference, getCar, getCarByCategory, getFilteredCar };