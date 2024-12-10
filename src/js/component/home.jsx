import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Grid from "./grid";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
	<Navbar/>
	<div className="container">

	<Jumbotron/>

	{/* <Card/> */}
	<Grid/>
	
	</div>
	<Footer/>
	</>
	);
};

export default Home;
