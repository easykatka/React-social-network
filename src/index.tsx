import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: "#00BFFF",

		},
		secondary: {
			main: '#B22222'
		}
	},
});
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<HashRouter>
						<CssBaseline />
						<App />
					</HashRouter>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);


