import React from 'react'

 function Pro(){
	return(
		<div>
			<button className="btn btn-warning">Pro</button>
		</div>
	)
}
function Gap(){
	return(
		<div className ="col-3">

		</div>
	)
}

export default function Blank(){
	return(
		<div className ="container background">
			<div className="row">
				<Gap />
				<div className ="col-6 cardbg mt-4 mb-4">
					<div className ="row mt-4">
						<div className ="col-3">
							<Pro/>
						</div>
						<div className ="col-6">
							<div style= {{padding: "5px"}}>
								<img className="pic img-fluid" src ="girl.jpg"/>
							</div>	
						</div>
					</div>
					<div className ="row">
						<div className ="col">
							<h4 className ="text-center text-light">Ricky Park</h4>
						</div>
					</div>
					<div className ="row">
						<div className ="col">
							<h6 className ="text-center text-light">New York</h6>
						</div>
					</div>
					<div className ="row mt-3">
						<div className ="col">
							<p className ="text-center text-light">User interface designer and</p>
						</div>
					</div>
					<div className ="row">
						<div className ="col">
							<p className ="text-center text-light">front End develper</p>
						</div>
					</div>
					<div className ="row mb-4">
						<div className ="col-6">
							<center><button className ="btn btn-info">Message</button></center>
						</div>
						<div className ="col-6">
							<center><button className ="btn btn-outline-info">Following</button></center>
						</div>
					</div>
				<div className ="container skill">
					<div className ="row">
						<p className ="text-light">SKILLS</p>
					</div>
					<div className ="row">
						<div className ="col-2 size text-light ml-2"><center>UI/UX</center></div>
						<div className ="col-6 size text-light ml-1"><center>FRONT END DEVELOPMENT</center></div>
						<div className ="col-2 size text-light ml-1"><center>HTML</center></div>
					</div>
					<div className ="row mb-3 mt-2">
						<div className ="col size text-light ml-2"><center>CSS</center></div>
						<div className ="col size text-light ml-1"><center>JAVASCRIPT</center></div>
						<div className ="col size text-light ml-1"><center>NODE</center></div>
						<div className ="col size text-light ml-1 mr-2"><center>REACT</center></div>
					</div>
				</div>	
				</div>
				<Gap />
			</div>
		</div>
	)
}
