import { NuqsAdapter } from "nuqs/adapters/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/theme-provider";

// biome-ignore lint/style/noNonNullAssertion: Must be exists
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NuqsAdapter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</NuqsAdapter>
	</StrictMode>,
);
