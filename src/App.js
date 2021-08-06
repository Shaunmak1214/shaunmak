import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Repos from "./components/Repos";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#ABC4FF",
    accent: "#F2F6FF",
    secondary: "#D9F3F0",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
  components: {
    Button: {
      variants: {
        solid() {
          return {
            _hover: {
              bg: `#BBC7E4`,
            },
            _active: { bg: `#BBC7E4` },
          };
        },
      },
    },
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
          <Projects />
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
