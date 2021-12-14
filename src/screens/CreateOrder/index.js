import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

import Topbar from "../../components/Topbar";
import { ROUTES } from "../../constants/routes";

import styles from "./styles.module.scss";
import PostOrder from "./components/PostOrder";

const CreateOrder = () => {
	const [order, setOrder] = useState({});

	const { id: restaurantId } = useParams();
	const search = useLocation().search;
	const tableNumber = new URLSearchParams(search).get("mesa");
	const restaurantName = new URLSearchParams(search).get("name");
	const appId = parseInt(new URLSearchParams(search).get("appId"));

	const handleOnInputChange = (evt) => {
		setOrder({ ...order, [evt.target.name]: evt.target.value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const type = tableNumber ? "table" : "pickup";
		let orderToSend = order;
		if (tableNumber) {
			orderToSend = { ...order, tableNumber };
		}

		switch (appId) {
			case 1:
				fetch(
					`https://ver-la-carta.herokuapp.com/orders/${type}/${restaurantId}`,
					{
						method: "POST",
						body: JSON.stringify({ ...orderToSend }),
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
					.then((res) => res.json())
					.then((json) => {
						if (tableNumber) {
							window.alert(`Su pedido ha sido enviado.`);
						} else {
							window.alert(
								`Su pedido ha sido enviado. Su número de pedido es: 1-${restaurantId}-${json.orderId}. `
							);
						}
					});
				break;
			case 2:
				fetch(
					`https://arquiweb-tp1.herokuapp.com/api/restaurants/${restaurantId}/orders/new`,
					{
						method: "POST",
						body: JSON.stringify({
							order_text: orderToSend.content,
							table_id: 0,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					}
				)
					.then((res) => res.json())
					.then((json) => {
						window.alert(
							`Su pedido ha sido enviado. Su número de pedido es: 2-${restaurantId}-${json.order_id}.`
						);
					});
				break;
			default:
				fetch(
					`http://moorfy.com:5000/clients/place_an_order?branch_id=${restaurantId}&table_id=0&user_id=0&order_content=${orderToSend.content}`
				)
					.then((res) => res.json())
					.then((json) => {
						window.alert(
							`Su pedido ha sido enviado. Su número de pedido es: 3-${restaurantId}-${json["orden id"]}.`
						);
					});
				break;
		}
	};

	return (
		<div className={styles.container}>
			<Topbar returnRoute={ROUTES.NEARBY_RESTAURANTS} title={`Hacer Pedido`} />
			<PostOrder
				handleSubmit={handleSubmit}
				handleOnInputChange={handleOnInputChange}
				tableNumber={tableNumber}
			/>
		</div>
	);
};
export default CreateOrder;
