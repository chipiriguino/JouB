import React from 'react';
import {postres} from "../Products/data";
import Products from '../Products/index';

export default function Hamburguesas() {
    return (
        <div>

                  <Products heading="Nuestros Postres" data={postres} />
        </div>
    )
}
