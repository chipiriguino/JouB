import React from 'react';
import Hero from '../Hero/index';
import Products from '../Products/index';
import Feature from '../Feature/index';
import Video from '../Animation/Video';
import { productData, productDataTwo } from "../Products/data";



export default function Home() {
    return (
        <div>
            <Hero/>
            {/* <Products/> */}
            <Products heading="Nuestras Hambuguesas" data={productData} />
            {/* <Feature/> */}
            <Video/>
            <Products heading="Postres" data={productDataTwo} />
            {/* <Products heading="Entrantes" data={productDataTwo} /> */}
        </div>
    )
}
