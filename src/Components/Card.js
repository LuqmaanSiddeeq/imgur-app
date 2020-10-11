import React from "react";
import "./Card.css";
import axios from "axios";

function Card({ imageCounter, cardTitle, cardPostedDate, points }) {
	// const [responseData, setResponseData] = useState("");

	// const clientId = "47dd85fc01aae88&";

	var options = {
		method: "GET",
		url: "https://api.imgur.com/oauth2/authorize?",
		header: {
			client_id: "7b78ad9df6876d4",
			response_type: "token",
			state: "luqmaan",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});

	return (
		<div className="card">
			<div className="card__container">
				<div className="card__image">
					<img src="https://i.imgur.com/E54QjJkb.jpg" alt="" />
					<div className="card__imageCounter">{imageCounter}</div>
				</div>
				<div className="card__info">
					<div className="card__title">
						<h3>{cardTitle}</h3>
					</div>
					<div className="card__postedDate">{cardPostedDate}</div>
					<div className="card__points">{points}</div>
					<div className="card__tags">
						<span className="each__tag">car</span>
						<span className="each__tag">carGuys</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
