import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                At Shopper Haven, we believe that shopping should be an enjoyable and seamless experience. As a leading online retailer, we offer a curated selection of the latest fashion trends, lifestyle products, and must-have essentials for women, men, and kids. From stylish apparel and footwear to beauty products, accessories, and home decor, our wide range of high-quality items is designed to cater to every taste and preference. 
                </p>
                <p>
                We are committed to making online shopping accessible, enjoyable, and rewarding for everyone. Whether you're looking for the latest trends or timeless classics, our goal is to provide an inspiring selection of products that let you express yourself and elevate your lifestyle.
                </p>
                </div>  
        </div>
    );
};

export default DescriptionBox;
