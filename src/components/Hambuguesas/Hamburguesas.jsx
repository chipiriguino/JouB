import React from 'react';
import {hamburguesas} from "../Products/data";
import Products from '../Products/index';

export default function Hamburguesas() {
    return (
        <div>
            <h1>HAMBURGUESAS</h1>
                  <Products heading="Nuestras Hambuguesas" data={hamburguesas} />
        </div>
    )
}
