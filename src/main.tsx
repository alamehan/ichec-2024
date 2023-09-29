import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ConfigProvider } from "antd";
import { theme } from "./assets/themes";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import "./assets/styles/main.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConfigProvider theme={theme}>
			<RouterProvider>
				<App />
			</RouterProvider>
		</ConfigProvider>
	</React.StrictMode>
);
