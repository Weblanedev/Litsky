import hotelblock from '../data/hotels/hotel.json';
import hotelamenities from '../data/hotels/amenities.json';
import hotelaccomodation from '../data/hotels/accomodation.json';
// Amenities
function getAmenities(items) {
    var elems = hotelamenities.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Accomodation
function getAccomodation(items) {
    var elems = hotelaccomodation.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Hotel details
function getHotel(id) {
    return hotelblock.filter(hotel => { return hotel.id === parseInt(id) })[0];
}
// Related hotel
function getHotelByCategory(items, pageRoute) {
    var elems = hotelblock.filter((hotel) => { return parseInt(hotel.id) !== parseInt(pageRoute) && hotel.category.some(r => items.includes(r)) });
    return elems;
}
// Recent Hotel
function changeToMonth(month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}
function setDemoDate() {
    var today = new Date();
    hotelblock.slice(0, 5).map((hotel) => {
        hotel.timestamp = today.getTime() - (3 * 24 * 60 * 60 * 1000);
        // Remove this date on your live demo. This is only used for preview purposed. Your date should actually be updated
        // in the hotel.json object
        hotel.hoteldate = `${today.getDate()} ${changeToMonth(today.getMonth())}, ${today.getFullYear()}`;
        return hotel;
    });
}
function getRecentHotel() {
    var elems = hotelblock.filter(hotel => {
        return hotel.timestamp < new Date(hotel.hoteldate);
    });
    return elems;
}
setDemoDate();
// Filter
function getFilteredHotel(hotels, filter = { priceFilter: [] }) {
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    // Price Filter
    if (priceFilterValue) {
        hotels = hotels.filter(hotel => {
            return (hotel.price !== undefined && hotel.price !== null) && hotel.price > filter.priceFilter[0] && hotel.price <= filter.priceFilter[1]
        })
    }
    return hotels;
}
export { getAmenities, getAccomodation, getHotel, getHotelByCategory, getRecentHotel, getFilteredHotel };