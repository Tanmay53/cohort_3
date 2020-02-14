
// class Filter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             details: this.props.data,
            
//         };
//     }

//     filterData = (e) => {
//         this.setState({
//             details: this.props.data.filter(function (val) {
//                 return (val.year==e.target.value);  
//             }) 
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <label>search movie by name</label>
//                 <input type="search"></input>
//                 <label>filter movie by year</label>
//                 <input type="number" onChange={this.filterData}></input>
                
//             </div> 
//         );
//     }
// }
// export default Filter