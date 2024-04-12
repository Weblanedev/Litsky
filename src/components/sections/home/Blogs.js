import React, { Component } from 'react';
import { getRecentPost, getDateInitials } from '../../../helper/blogHelper';
import { getAuthor } from '../../../helper/helper';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "d-flex slick-dots",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: 'linear',
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: true,
            slidesToShow: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }, {
        breakpoint: 576,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
        }
    }]
};

class Blogs extends Component {
    render() {
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="section-header">
                        <div className="section-heading">
                            <h3 className="text-custom-black">Our Blog</h3>
                            <div className="section-description">
                                <p className="text-light-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings} className="blog-slider arrow-layout-2 row">
                                {/* article */}
                                {getRecentPost().map((item, i) => (
                                    <article key={i} className="col-12 post slide-item">
                                        <div className="post-wrapper bx-wrapper">
                                            <div className="post-img animate-img">
                                                <Link to={"/blog-details/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="full-width" alt={item.title} />
                                                </Link>
                                                <div className="post-date" dangerouslySetInnerHTML={{ __html: getDateInitials(item.postdate) }}>
                                                </div>
                                            </div>
                                            <div className="blog-meta padding-20 bg-custom-white p-relative">
                                                <div className="post-meta mb-xl-20">
                                                    <Link to={"/blog-details/" + item.id} className="text-light-dark mr-1">
                                                        <span className="text-custom-blue">
                                                            <i className="fas fa-comment" />
                                                        </span> {item.reviews.length} Comments
                                                    </Link>
                                                    <Link to={"/blog-details/" + item.id} className="text-light-dark mr-1">
                                                        <span className="text-custom-blue">
                                                            <i className="fas fa-thumbs-up" />
                                                        </span> {item.likes} Likes
                                                    </Link>
                                                </div>
                                                <div className="post-heading">
                                                    <h2>
                                                        <Link to={"/blog-details/" + item.id} className="text-custom-black fw-600 fs-20">{item.title}</Link>
                                                    </h2>
                                                    <p className="text-light-dark no-margin">{item.shorttext}...</p>
                                                </div>
                                            </div>
                                            <div className="post-footer">
                                                {getAuthor(item.author).map((author, i) => (
                                                    <div className="post-author" key={i}>
                                                        <cite className="text-custom-black">Post By <Link to={"/blog/author/" + author.id}>{author.name}</Link></cite>
                                                    </div>
                                                ))}
                                                <Link to={"/blog-details/" + item.id} className="text-custom-blue fs-14 fs-600">Read More</Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                                {/* article */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;