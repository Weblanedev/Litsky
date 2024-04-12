import React from 'react';
import block from "../../../data/gallery/gallery.json";
import category from "../../../data/gallery/category.json";
import Masonry from "react-masonry-component";
import { Link } from 'react-router-dom';
import Popuphelper from '../../../helper/Popuphelper';

class Content extends Popuphelper {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts: block,
            activeItem: 0
        };
    }
    handleClick = id => {
        let filteredProducts = [];
        if (id === 0) {
            filteredProducts = block;
        } else {
            filteredProducts = block.filter(
                (product) => product.category.includes(id)
            );
        }
        this.setState({ filteredProducts, activeItem: id });
    };
    render() {
        const renderAll = this.state.filteredProducts.map((item, i) => (
            <div className="col-lg-4 col-md-6 filter-box" key={i}> 
                <div className="gallery-item mb-xl-30"> <a rel={"external"} href={item.image} className="popup">
                    <img src={process.env.PUBLIC_URL + "/" + item.image} className="image-fit" alt="img" />
                </a> </div>
            </div>
        ));
        return (
            <section className="section-padding bg-light-white gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs filter-gallery">
                                <ul className="custom-flex nav nav-tabs mb-xl-40">
                                    <li className="nav-item">
                                        <Link to="#" className={this.state.activeItem === 0 ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, 0)}>Show All</Link>
                                    </li>
                                    {category.map((item, i) => (
                                        <li className="nav-item" key={i}>
                                            <Link to="#" className={this.state.activeItem === parseInt(item.id) ? 'nav-link active' : 'nav-link'} onClick={this.handleClick.bind(this, item.id)}>{item.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Masonry className="row gallery-grid">
                                {/* Data */}
                                {renderAll}
                                {/* Data */}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;