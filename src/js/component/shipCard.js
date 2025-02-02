
import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const ShipCard = props => {
	const { store, actions } = useContext(Context);
	const shipStore = store.starShip.filter(ship => ship.name == props.ship.name);
	useEffect(() => actions.starShipDescription(props.ship.url), []);

	return (
		<div class="col-sm">
			<Card className="m-2 bg-dark bg-opacity-25 text-white bg-opacity-75">
				<Card.Img
					className="p-3"
					variant="top"
					src="https://starwars-visualguide.com/assets/img/vehicles/8.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.ship.name}</Card.Title>
					{shipStore[0] ? (
						<Card.Text>
							<p>Model: {shipStore[0].model}</p>
							<p>Class: {shipStore[0].starship_class}</p>
							<p>Passengers: {shipStore[0].passengers}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/single_starship/" + props.ship.uid} data={shipStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.ship.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

ShipCard.propTypes = {
	index: PropTypes.number,
	ship: PropTypes.object,
	id: PropTypes.number
};

export default ShipCard;