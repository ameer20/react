
import React, { Component } from 'react';



const arrayObj = [{ id: "id", name: "name", dep: "dep",salary: "salary" }, 
{ id: 1, name: "ak", dep: "trainee",salary: 30000},
{ id: 2, name: "khu", dep: "trainee",salary : 30000 }];
class Welcome extends Component {
  render() {
    return (
      <>
        <body>
          <table class="center">

            <tr>
              <th>Object.keys(arrayObj[0][0]) </th>
              <th>Name </th>
              <th>department </th>
              <th>salary </th>
            </tr>

            <tr>
              <td>1 </td>
              <td>ameer </td>
              <td>trainee </td>
              <td>15k </td>
            </tr>

            <tr>
              <td>2 </td>
              <td>pk </td>
              <td>trainee </td>
              <td>15k </td>
            </tr>

            <tr>
              <td>3 </td>
              <td>arun </td>
              <td>trainee </td>
              <td>15k </td>
            </tr>

          </table>
        </body>
      </>
    );
  }
}

export default Welcome;


