import "./App.css";
import Header from "./components/Header";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#845EC2",
    secondary: "#FF6F91",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;
