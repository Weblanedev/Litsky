import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogblock from '../../../data/blog/blog.json';
import Sidebar from '../../layouts/Blogsidebar';
import { getBlog, getPostNavigation, getDateInitials } from '../../../helper/blogHelper';
import { getAuthor, getTags, getCategories, socialShare } from '../../../helper/helper';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getBlog(detailId);
        return (
            <section className="section-padding bg-light-white">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4">
                            <div className="sidebar_wrap mb-md-80">
                                <Sidebar />
                            </div>
                        </aside>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-details bx-wrapper bg-custom-white padding-20">
                                        {/* article */}
                                        <article className="post p-relative">
                                            <div className="post-wrapper">
                                                <div className="post-img animate-img mb-xl-20">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="image-fit" alt={item.title} />
                                                </div>
                                                <div className="blog-meta bg-custom-white">
                                                    <div className="post-meta-box mb-xl-20">
                                                        <div className="post-categories">
                                                            {/* Data */}
                                                            {getCategories(item.category).map((cat, i) => (
                                                                <Link to={"/blog/cat/" + cat.id} className="text-custom-black fs-18" key={i}>{cat.title}</Link>
                                                            ))}
                                                            {/* Data */}
                                                        </div>
                                                        <div className="post-meta">
                                                            <Link to={"/blog-details/" + item.id} className="text-light-dark mr-2" tabIndex={-1}>
                                                                <span className="text-custom-blue">
                                                                    <i className="fas fa-comment" />
                                                                </span> {item.reviews.length}
                                                            </Link>
                                                            <Link to={"/blog-details/" + item.id} className="text-light-dark mr-2" tabIndex={-1}>
                                                                <span className="text-custom-blue">
                                                                    <i className="fas fa-thumbs-up" />
                                                                </span> {item.likes}
                                                            </Link>
                                                            <Link to={"/blog-details/" + item.id} className="text-light-dark mr-2" tabIndex={-1}>
                                                                <span className="text-custom-blue">
                                                                    <i className="fas fa-eye" />
                                                                </span> {item.views}
                                                            </Link>
                                                            <div className="post-date" dangerouslySetInnerHTML={{ __html: getDateInitials(item.postdate) }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="post-heading p-relative">
                                                        <h2><Link to={"/blog-details/" + item.id} className="text-custom-black">{item.title}</Link></h2>
                                                    </div>
                                                    {/* Data */}
                                                    {getAuthor(item.author).map((author, i) => (
                                                        <div className="post-author mb-xl-20" key={i}>
                                                            <div className="author-img animate-img">
                                                                <Link to={"/blog/author/" + author.id}>
                                                                    <img src={process.env.PUBLIC_URL + "/" + author.image} className="rounded-circle" alt={author.name} />
                                                                </Link>
                                                            </div>
                                                            <span className="text-theme fs-14">By <Link to={"/blog/author/" + author.id} className="text-custom-black fw-500">{author.name}</Link></span>
                                                        </div>
                                                    ))}
                                                    {/* Data */}
                                                    <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                                </div>
                                            </div>
                                        </article>
                                        {/* article */}
                                        <hr />
                                        {/* tags & social */}
                                        <div className="post-details-tags-social mb-xl-20">
                                            <div className="row no-margin">
                                                <div className="col-md-6">
                                                    <div className="tags-box">
                                                        <span className="fs-18 text-light-dark"><i className="fas fa-tags" /></span>
                                                        <div className="tags">
                                                            {/* Data */}
                                                            {getTags(item.tags).map((tag, i) => (
                                                                <Link to={"/blog/tag/" + tag.id} key={i}>{tag.title}</Link>
                                                            ))}
                                                            {/* Data */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="social-media-box">
                                                        <ul className="custom-flex">
                                                            {/* Data */}
                                                            {socialShare(item.title).map((social, i) => (
                                                                <li key={i}>
                                                                    <Link to="#" onClick={(e) => this.openSocialPopup(social, i)} className={social.iconStyle}>
                                                                        <i className={social.iconClass} />
                                                                    </Link>
                                                                    <span className="social-number bg-light-white">{social.postnumber}</span>
                                                                </li>
                                                            ))}
                                                            {/* Data */}
                                                            <li>
                                                                <Link to="#" className="bg-custom-blue">
                                                                    <i className="fas fa-share-alt" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* tags & social */}
                                        {/* post author */}
                                        {getAuthor(item.author).map((author, i) => (
                                            <div className="post-author bg-light-white padding-15 mb-xl-20" key={i}>
                                                <div className="author-img animate-img mb-sm-20">
                                                    <Link to={"/blog/author/" + author.id}>
                                                        <img src={process.env.PUBLIC_URL + "/" + author.image} className="image-fit rounded-circle" alt={author.name} />
                                                    </Link>
                                                </div>
                                                <div className="author-caption">
                                                    <h5 className="fw-600"><Link to={"/blog/author/" + author.id} className="text-custom-black">{author.name}</Link>
                                                        {author.social.map((social, i) => (
                                                            <span className="text-custom-blue fs-16 ml-2" key={i}><i className={social.icon} /></span>
                                                        ))}
                                                    </h5>
                                                    <Link to={"/blog/author/" + author.id} className="authorpost text-custom-blue fw-600">Most article by this author</Link>
                                                    <p className="text-light-white">{author.shorttext}</p>
                                                </div>
                                            </div>
                                        ))}
                                        {/* post author */}
                                        {/* post pagination */}
                                        <div className="pagination-btn">
                                            <nav>
                                                {/* Data */}
                                                <ul className="pagination">
                                                    {getPostNavigation(blogblock, blogblock.findIndex(item => parseInt(item.id) === parseInt(detailId)))}
                                                </ul>
                                                {/* Data */}
                                            </nav>
                                        </div>
                                        {/* post pagination */}
                                        {/* comments */}
                                        <div className="comment-box section-padding-top p-relative">
                                            <div id="comment-box">
                                                <h4 className="text-custom-black fw-600">Reviews [{item.reviews.length}]</h4>
                                                <ul className="comments custom">
                                                    {/* Data */}
                                                    {item.reviews.map((review, i) => (
                                                        <li className="comment" key={i}>
                                                            {getAuthor(review.user).map((user, i) => (
                                                                <article key={i}>
                                                                    <div className="comment-avatar">
                                                                        <img src={process.env.PUBLIC_URL + "/" + user.image} className="rounded-circle" alt={user.name} />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="comment-meta">
                                                                            <div className="comment-meta-header">
                                                                                <h5 className="text-custom-black fw-600 author mb-3">{user.name}</h5>
                                                                                <div className="post-date">
                                                                                    <Link to={"/blog-details/" + item.id} className="date bg-custom-blue text-custom-white">{review.commentdate}</Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="comment-meta-reply">
                                                                                <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment">
                                                                            <p className="text-light-dark">{review.comment}</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            ))}
                                                            <ul className="children">
                                                                {/* Data */}
                                                                {review.replies.map((review, i) => (
                                                                    <li className="comment" key={i}>
                                                                        {getAuthor(review.user).map((user, i) => (
                                                                            <article key={i}>
                                                                                <div className="comment-avatar">
                                                                                    <img src={process.env.PUBLIC_URL + "/" + user.image} className="rounded-circle" alt={user.name} />
                                                                                </div>
                                                                                <div className="comment-content">
                                                                                    <div className="comment-meta">
                                                                                        <div className="comment-meta-header">
                                                                                            <h5 className="text-custom-black fw-600 author mb-3">{user.name}</h5>
                                                                                            <div className="post-date">
                                                                                                <Link to={"/blog-details/" + item.id} className="date bg-custom-blue text-custom-white">{review.commentdate}</Link>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="comment-meta-reply">
                                                                                            <Link to="#" className="comment-reply-link btn-first btn-submit"><i className="fas fa-reply" /></Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="comment">
                                                                                        <p className="text-light-dark">{review.comment}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </article>
                                                                        ))}
                                                                    </li>
                                                                ))}
                                                                {/* Data */}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                    {/* Data */}
                                                </ul>
                                                <div className="comment-respond" id="respond">
                                                    <h4 className="text-custom-black fw-600">Leave Comment</h4>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="text-custom-black fw-500 fs-14">Full Name</label>
                                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="text-custom-black fw-500 fs-14">Email I'd</label>
                                                                    <input type="email" name="#" className="form-control form-control-custom" placeholder="Email I'd" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div className="form-group">
                                                                    <label className="text-custom-black fw-500 fs-14">Comment</label>
                                                                    <textarea rows={4} name="#" className="form-control form-control-custom" placeholder="Comment" />
                                                                </div>
                                                                <button type="submit" className="btn-first btn-submit">Leave Comment</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* comments */}
                                    </div>
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