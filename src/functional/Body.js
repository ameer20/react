import React from 'react';
import Heading from './table_head';
import Rows from './table_row';
var data = [
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" }
  ];
 


export default function Body(){
    return <>
    <div>
        <table>
            <Heading/>
        <tbody>           
            <Rows items={data}/>
        </tbody>
        </table>
    </div>
    </>
}