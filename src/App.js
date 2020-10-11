import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
	return (
		<div className="App">
			<h3>Hello Javascript!</h3>
			<div className="card__container__app">
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
				<Card
					imageCounter="1/2"
					cardTitle="Restored headlights on my buddy’s Camry"
					cardPostedDate="September 12 2017"
					points="46 Points"
				/>
			</div>
		</div>
	);
}

export default App;
