import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Repos from "./components/Repos";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#ABC4FF",
    secondary: "#D9F3F0",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <div className="App-Container">
          <Header />
          <Main />
          <Repos />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
