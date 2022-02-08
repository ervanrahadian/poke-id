import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import ApolloProvider from "./ApolloProvider";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(ApolloProvider, document.getElementById("root"));

reportWebVitals();
serviceWorker.register();
