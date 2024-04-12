import author from '../data/team.json';
import tags from '../data/tags.json';
import category from '../data/category.json';
import testimonials from '../data/testimonials.json';

// Author
function getAuthor(items) {
    var elems = author.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Tags
function getTags(items) {
    var elems = tags.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Categories
function getCategories(items) {
    var elems = category.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
// Testimonials
function getTestimonials(items) {
    var elems = testimonials.filter(item => {
        return items.includes(item.id)
    });
    return elems;
}
function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<span className="text-light-white" key={i}><i className="fas fa-star"/></span>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <span className="text-yellow" key={i}><i className="fas fa-star"/></span>;
        }
    }
    return stars;
};
// Social Share
const pageUrl = window.location.href;
function socialShare(title) {
    var socialIcons = [
        {
            title: "facebook",
            iconClass: "fab fa-facebook-f",
            iconStyle: "fb",
            postnumber:500,
            link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "twitter",
            iconClass: "fab fa-twitter",
            iconStyle: "tw",
            postnumber:20,
            link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "linkedin",
            iconClass: "fab fa-linkedin-in",
            iconStyle: "fb",
            postnumber:46,
            link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl) + "&title=" + encodeURIComponent(title) + ""
        }
    ];
    return socialIcons;
}
export { getAuthor, Rating, socialShare, getTags, getCategories, getTestimonials };