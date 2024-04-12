import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogblock from '../../../data/blog/blog.json';
import { getDateInitials } from '../../../helper/blogHelper';
import { getAuthor } from "../../../helper/helper";
import Sidebar from '../../layouts/Blogsidebar';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: blogblock,
            activePage: 1,
            itemPerpage: 6
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <article key={i} className="col-md-6 post mb-xl-30">
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
        });
        return (
            <section className="section-padding bg-light-white our_articles">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap mb-md-80">
                                <Sidebar />
                            </div>
                        </aside>
                        <div className="col-lg-8">
                            <div className="row">
                                {/* article */}
                                {paginationData}
                                {/* article */}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <nav className="pagination_layout section-padding-top">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={this.state.itemPerpage}
                                            totalItemsCount={this.state.data.length}
                                            pageRangeDisplayed={this.state.data.length}
                                            onChange={this.handlePageChange.bind(this)}
                                            innerClass="pagination mb-0 justify-content-center"
                                            activeClass="active"
                                            itemClass="page-item"
                                            linkClass="page-link"
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;