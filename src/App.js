import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screens/Home";
import OrderStatus from "./screens/OrderStatus";
import WelcomeTable from "./screens/WelcomeTable";
import { ROUTES } from "./constants/routes";
import Menu from "./screens/Menu";
import PendingOrders from "./screens/PendingOrders";
import CurrentOrders from "./screens/CurrentOrders";
import CreateOrder from "./screens/CreateOrder";
import RestaurantManagment from "./screens/RestaurantManagement";
import NearbyRestaurants from "./screens/NearbyRestaurants";
import LogIn from "./screens/Login";
import BackofficeHome from "./screens/BackofficeHome";
import TableStatus from "./screens/TableStatus";

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home}></Route>
					<Route
						exact
						path={ROUTES.CREATE_ORDER}
						component={CreateOrder}
					></Route>
					<Route
						exact
						path={ROUTES.ORDER_STATUS}
						component={OrderStatus}
					></Route>
					<Route
						exact
						path={ROUTES.WELCOME_TABLE}
						component={WelcomeTable}
					></Route>
					<Route exact path={ROUTES.MENU} component={Menu}></Route>
					<Route
						exact
						path={ROUTES.CURRENT_ORDERS}
						component={CurrentOrders}
					></Route>
					<Route
						exact
						path={ROUTES.PENDING_ORDERS}
						component={PendingOrders}
					></Route>
					<Route
						exact
						path={ROUTES.RESTAURANT_MANAGMENT}
						component={RestaurantManagment}
					></Route>

					<Route
						exact
						path={ROUTES.NEARBY_RESTAURANTS}
						component={NearbyRestaurants}
					></Route>
					<Route exact path={ROUTES.LOGIN} component={LogIn}></Route>
					<Route
						exact
						path={ROUTES.BACKOFFICE_HOME}
						component={BackofficeHome}
					></Route>
					<Route
						exact
						path={ROUTES.TABLE_STATUS}
						component={TableStatus}
					></Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
