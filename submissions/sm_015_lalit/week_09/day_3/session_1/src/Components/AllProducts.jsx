import React from 'react'
import { Route, Link} from 'react-router-dom'
// import ProductDetails from './ProductsDetails'
export default class AllProducts extends React.Component{
    constructor(props){
        super(props)
        
    }
    products=[
        {
            name:"Tech",
            image:"https://placeimg.com/640/480/tech",
            details:"Lorem ipsum dolor sit amet, legimus voluptua cum in, et scaevola consequat vel, eu his odio autem. Liber nihil dissentias nec id, no eum sint ullamcorper. Dicat suavitate sed ea, ei eum ignota epicurei accusamus. Nam integre persius an, no esse omnium dissentiet mea. Putent lobortis vis an. Liber mediocrem voluptatum nam ex, eos ne latine interesset, no alienum abhorreant mel. Paulo iuvaret assueverit ad usu."
        },
        {
            name:"Animals",
            image:"https://placeimg.com/640/480/animals",
            details:"Lorem ipsum dolor sit amet, suas viderer forensibus nam ad, graeci postulant repudiare mei an. Quo cibo zril reprimique cu. Numquam concludaturque mel in, eirmod splendide expetendis eos ei. Dico soleat tincidunt in sed, duo idque mollis melius no, vix elitr lucilius et. Cu debet erant adversarium per, sale adhuc maiestatis ei nam. Veri solet tritani eos te. Id eius augue mea, mel noluisse voluptua accommodare no."
        },
        {
            name:"People",
            image:"https://placeimg.com/640/480/people",
            details:"Lorem ipsum dolor sit amet, cu aperiri habemus reprimique est, nobis inciderint cu vix, eum prompta persecuti id. Rebum brute tamquam te qui. Id errem quaeque menandri eos. Ei cum omnis prima laboramus, ne sit nemore contentiones, ceteros mentitum periculis at pro. Ei sit nullam fastidii, eu dictas impetus perfecto sed. Ei cum ferri vivendum, ei nam debet placerat, sint docendi appetere sit ex."
        },
        {
            name:"Nature",
            image:"https://placeimg.com/640/480/nature",
            details:"Lorem ipsum dolor sit amet, euismod labores an mel. Sea ad gloriatur maiestatis, ei meis homero quo. Sed ea facer tibique appetere. Democritum voluptatibus his ut, ut duo mazim veniam comprehensam. Qui periculis efficiendi signiferumque in, ornatus propriae senserit sit te. Cum duis fastidii ei, vocent delicata ne nec."
        },
        {
            name:"Sepia",
            image:"https://placeimg.com/640/480/sepia",
            details:"Lorem ipsum dolor sit amet, mea et quot eruditi recteque, eu nam mazim nusquam reprehendunt. Sit enim prima iudicabit eu. Cu agam facilisis has. Zril dolores nec in, lorem nominati senserit at nec. Ei sea facer comprehensam, eu duo duis fastidii albucius. Usu ea dico brute suavitate."
        },
        {
            name:"Grayscale",
            image:"https://placeimg.com/640/480/grayscale",
            details:"Lorem ipsum dolor sit amet, usu omnis latine te, accusam maiestatis nam at. Sed sint integre maiestatis ne, integre neglegentur cu vis, no usu quidam impetus scripta. Est et etiam meliore democritum, sit in modo magna munere, illum viris et vim. Ad fugit errem molestie duo, an ius modus voluptua, sit in homero copiosae. Alterum laoreet pri in."
        },
    ]
    render(){
        return(
            <> 
            <h2 className="text-center mt-5">Choose any one !</h2>
            <ul className="text-center">
                {this.products.map(e=><Link className="text-warning" to={`/list/${e.name}`}><li>{e.name}</li></Link>)}
                </ul>
                {/* <Route exact path="/" render={()=>{return <p className="display-3 text-center">Welcome!</p>}} />
                <Route exact path="/products/:name" render={(props)=><ProductDetails {...props}/>} /> */}
            </>
        )
    }
}