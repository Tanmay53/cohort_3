import React from "react"

const data = [
    {
        id:1,
        name:"Hall 101",
        floor: "first",
        img:"https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg",
        price:899
    },
    {
        id:2,
        name:"Hall 102",
        floor: "first",
        img:"https://studio42workspaces.com/wp-content/uploads/2018/08/meeting-room-hire-page-cropped-compressed.jpg",
        price:999
    },
    {
        id:3,
        name:"Hall 103",
        floor: "first",
        img:"https://lh3.googleusercontent.com/proxy/WvId8GrhpQ8en9hck0RvW-p4P9_tklNeTNEBIqDEkWf6qTKhKvqWiHzkujXPw4Z_bBWU4JyCUCtKunGb59e_NodhoLNZ7WaAXfo4Exe0dhsDgVzELmQ264SzgcSzm30fDUc5GIw5X4A1z60Pfrny9foNdSEYJLslVVfQ7BS0L309idHYZp66qi017g",
        price:1099
    },
    {
        id:4,
        name:"Hall 104",
        floor: "first",
        img:"https://conradhotels3.hilton.com/resources/main/Property_Photography/Conrad/TYOCICI/10894221_28F_Meeting_Room_3_Magic_01_750x350.jpg",
        price:799
    },
    {
        id:5,
        name:"Hall 201",
        floor: "second",
        img:"https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg",
        price:1899
    },
    {
        id:6,
        name:"Hall 202",
        floor: "second",
        img:"https://studio42workspaces.com/wp-content/uploads/2018/08/meeting-room-hire-page-cropped-compressed.jpg",
        price:1999
    },
    {
        id:7,
        name:"Hall 203",
        floor: "second",
        img:"https://lh3.googleusercontent.com/proxy/WvId8GrhpQ8en9hck0RvW-p4P9_tklNeTNEBIqDEkWf6qTKhKvqWiHzkujXPw4Z_bBWU4JyCUCtKunGb59e_NodhoLNZ7WaAXfo4Exe0dhsDgVzELmQ264SzgcSzm30fDUc5GIw5X4A1z60Pfrny9foNdSEYJLslVVfQ7BS0L309idHYZp66qi017g",
        price:2099
    },
    {
        id:8,
        name:"Hall 204",
        floor: "second",
        img:"https://conradhotels3.hilton.com/resources/main/Property_Photography/Conrad/TYOCICI/10894221_28F_Meeting_Room_3_Magic_01_750x350.jpg",
        price:1799
    },
    {
        id:9,
        name:"Hall 301",
        floor: "third",
        img:"https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg",
        price:2899
    },
    {
        id:10,
        name:"Hall 302",
        floor: "third",
        img:"https://studio42workspaces.com/wp-content/uploads/2018/08/meeting-room-hire-page-cropped-compressed.jpg",
        price:2999
    },
    {
        id:11,
        name:"Hall 303",
        floor: "third",
        img:"https://lh3.googleusercontent.com/proxy/WvId8GrhpQ8en9hck0RvW-p4P9_tklNeTNEBIqDEkWf6qTKhKvqWiHzkujXPw4Z_bBWU4JyCUCtKunGb59e_NodhoLNZ7WaAXfo4Exe0dhsDgVzELmQ264SzgcSzm30fDUc5GIw5X4A1z60Pfrny9foNdSEYJLslVVfQ7BS0L309idHYZp66qi017g",
        price:2899
    },
    {
        id:12,
        name:"Hall 304",
        floor: "third",
        img:"https://conradhotels3.hilton.com/resources/main/Property_Photography/Conrad/TYOCICI/10894221_28F_Meeting_Room_3_Magic_01_750x350.jpg",
        price:1399
    },
]



function InitialState() {
    return (
        data.map(ele => (
            <center>
                <div className = "card m-4" style={{width: "500px", height: "400px"}}>
                <h2 style={{width: "500px", height: "50px", backgroundColor:"lightgrey"}}>{ele.name} </h2>
                <img src={ele.img} alt="Hall" className ="card-img-top image-fluid" style={{width: "500px", height: "250px"}}/>
                <div>
                    <p style={{width: "500px", height: "50px", backgroundColor:"lightgrey"}}>
                        <div>
                            <b> floor : {ele.floor} </b>
                        </div>
                        <div>
                            {ele.price}
                        </div>
                        <div><button className ="mt-2">BOOK NOW</button></div>
                    </p>
                </div>
                </div>
            </center>
        ))
        
    )
}

export default InitialState
