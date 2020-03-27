import React from 'react';
import {connect} from 'react-redux';
import { setcurrentpage } from '../../redux/busRoutes/actions'

export class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const {perPage,currentPage,buses,setCurrentPage}=this.props
         let length=buses.length
         let totalPages=length/perPage
        const pageList=[]
        for(let i=1; i<=totalPages+1; i++){
           
            pageList.push(<button key={i} onClick={()=>setCurrentPage(i)} type="button" className={`ml-1  btn ${currentPage==i ? 'btn-primary' : 'btn-secondary'}`}>{i}</button>)
        }
        console.log(pageList)
        return(
            <>
          
            <div className="text-center">
            {totalPages!==0 && pageList}
            </div>
            
            </>
        )
    }
}
const mapStateToProps=state=>({
    perPage:state.BusRoutesReducer.perPage,
    currentPage:state.BusRoutesReducer.currentPage,
    buses:state.BusRoutesReducer.buses

    // totalPages:state.BusRoutesReducer.totalPages
})
const mapDispatchToProps=dispatch=>({
    setCurrentPage:(payload)=>dispatch(setcurrentpage(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Pagination)