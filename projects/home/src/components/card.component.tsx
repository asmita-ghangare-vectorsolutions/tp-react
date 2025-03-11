import { Card, Table , TilingGrid} from "@vector-web-components/core";
import logo from  "../assets/vector-logo.png";
import user from "../assets/profile_img_placeholder.png"
import { useEffect, useState } from "react";


export default function CardWrapperComponent(){
const [column, setColumn] =useState([]);
const [items, setItems] =useState([]);

const col = [
  {
    "id": "first-name",
    "type": "text",
    "header": "First Name",
    "path": "firstName",
    "sortable": false,
    "style": {
      "maxWidth": "120px",
      "min-width": "80px"
    }
  },
  {
    "id": "author",
    "type": "text",
    "path": "author",
    "header": "",
    "sortable": false,
    
  }
];
const rows = [
  {
    "id": "1",
    "favorite": 0,
    "firstName": "Samanta",
    "author": "Dooley",
    "username": "Meta.Wisoky",
    "customIcon": 1
  }
]
useEffect(() =>{
  setColumn(col);
  setItems(rows);
});
return(
<>
<Card theme="padded elevated" style={{width: "500px"}}>
<img style={{ height: "112px", width: "282px", alignSelf: "auto"}} slot="image"  src={logo} />
<div slot="header" style={{display: "inline"}}>
<img style={{ height: "18px", width: "18px", marginRight:"5px"}}  src={user} />
    Firstname Lastname
</div>

  <div slot="content">
    Email: username@vectorsolutions.com<br/>
    Employee Id: #00019991
  </div>
</Card>
<Card theme="padded elevated" style={{width: "500px"}}>
<div slot="content">
  <Table columnDefs={column} items={items}>

  </Table>
</div>
</Card>

</>
);
}