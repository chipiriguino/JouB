import React from 'react';
import {hamburguesas} from "../Products/data";
import Products from '../Products/index';

export default function Postres() {
    return (
        <div>

                  <Products heading="Nuestras Hambuguesas" data={hamburguesas} />
        </div>
    )
}
