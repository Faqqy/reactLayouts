import React from "react";
import { useState } from "react";
import IconSwitch from "./iconSwitch";
import CardsView from './CardsView';
import ListView from "./ListView";


function Store({products}) {

    const [iconChange, setIconChange] = useState('view_list');
    const [productsChange, setProductsChange] = useState('Cards');
    
    function changeImg() {
        if (productsChange === ('Cards')) {
            setIconChange('view_module')
            setProductsChange('List')
        } else {
            setIconChange('view_list')
            setProductsChange('Cards')
        }
    }

    console.log(productsChange);

    return (
        <>
            <IconSwitch 
                icon={iconChange} 
                onSwitch={changeImg}
            />
            <div className="Shop">
                {(productsChange === ('List') ? <ListView products={products} /> : <CardsView products={products} />)}
            </div>
        </>


    )


}

export default Store;