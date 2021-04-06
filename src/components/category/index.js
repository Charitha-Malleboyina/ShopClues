import React from 'react';
import womenClothing from '../../assets/women clothing.jpg';
import menClothing from '../../assets/men clothing.jpg';
import mobiles from '../../assets/mobiles.jpg';
import sports from '../../assets/sports.jpg';
import './styles.scss';
const ProductCategory = props=>{
    return(
        <div className="productscategory">
            <div className="wrap">
                <div className="item" 
                style={{backgroundImage: `url(${womenClothing})`}}>
                <a>Shop Women clothing</a>              
                </div>
                
                <div className="item" 
                style={{backgroundImage: `url(${menClothing})`}}>
                <a>Shop men clothing</a>              
                </div>
                <div className="item" 
                style={{backgroundImage: `url(${mobiles})`}}>
                <a>Mobiles and Gadgets</a>              
                </div>
                <div className="item" 
                style={{backgroundImage: `url(${sports})`}}>
                <a>sports and more</a>              
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;