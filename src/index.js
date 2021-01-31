import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme ,CssBaseline,ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		background:'light',
	  primary: {
		main: "#61dafb",
	  },
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

serviceWorker.unregister();
