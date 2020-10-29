import React from 'react';




export default function Rows(props){

return (<table>
        <tbody>
        {
            props.items.map((val)=>(
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.quantitiy}</td>
                    <td>{val.location}</td>
                </tr>
            ))
        }
</tbody>
</table>
)
}

// import React from "react";
// import Bodyrow from "./table-body-row.jsx";

// function Tablebody(props) {
//   const users = props.user;
  
//   return (
//     <tbody>
//       <Bodyrow users={users} />
//     </tbody>
//   );
// }

// export default Tablebody;