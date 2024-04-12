import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/category.json";
import { getRecentPost } from "../../helper/blogHelper";

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Search</h5>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)} method="GET">
                        <div className="input-group group-form">
                            <input type="search" className="form-control form-control-custom" placeholder="Search" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                            <button type="submit" className="input-group-append">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Category</h5>
                    </div>
                    <ul className="categories custom">
                        {/* Data */}
                        {category.map((item, i) => (
                            <li key={i}>
                                <Link to={"/blog/cat/" + item.id} className="text-custom-black fs-14">{item.title} <span className="text-light-dark">({item.count})</span></Link>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="sidebar_widgets mb-xl-30">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Recent Post</h5>
                    </div>
                    <ul className="custom popular_post">
                        {/* Data */}
                        {getRecentPost().map((item, i) => (
                            <li className="mb-xl-20" key={i}>
                                <div className="post">
                                    <div className="post-wrapper">
                                        <div className="popular_post_img animate-img">
                                            <Link to={"/blog-details/" + item.id}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="image-fit" alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className="popular_post_title">
                                            <h6><Link to={"/blog-details/" + item.id} className="text-custom-black fs-14">{item.title}</Link></h6>
                                            <span className="date text-custom-blue fw-600 fs-14">{item.postdate}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title bg-custom-blue">
                        <h5 className="no-margin text-custom-white">Tags</h5>
                    </div>
                    <div className="tags">
                        {/* Data */}
                        {tags.map((item, i) => (
                            <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);