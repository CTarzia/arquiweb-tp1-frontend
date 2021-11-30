import React from "react";

import styles from "./styles.module.scss";

const Restaurant = ({ restaurant, handleClick }) => {
	const onSelectRestaurant = () => handleClick(restaurant);

	return (
		<div>
			<span className={styles.label}> {restaurant.name} </span>
			<span className={styles.label}> {restaurant.phoneNumber} </span>
			<span className={styles.label}>{restaurant.workingHours} </span>
			{restaurant.appId === 1 && (
				<div>
					<button onClick={onSelectRestaurant}> Ver detalle </button>
				</div>
			)}
			{/* {restaurant.appId === 2 && ()} */}
		</div>
	);
};

export default Restaurant;
