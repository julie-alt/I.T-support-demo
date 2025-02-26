import { styled, createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import InfoBoxes from "./Components/InfoBoxes";
import InfoSectionOne from "./Components/infoSections/InfoSectionOne";
import InfoSectionTwo from "./Components/infoSections/InfoSectionTwo";
import InfoSectionThree from "./Components/infoSections/infoSectionThree";
import Team from "./Components/Team";
import InfoSectionFour from "./Components/infoSections/InfoSectionFour";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";

const GlobalStyle = createGlobalStyle`
*{ 
  margin: 0;
  padding:0;
};
body{
  background-color:  ${(props) => props.theme.colors.bgDefault};
  font-family: 'Roboto', sans-serif;
  color:  ${(props) => props.theme.colors.light};
};
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bgDefault};
  height: 100vh;
`;
const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgLight: "aliceBlue",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
        <InfoSectionThree />
        <InfoSectionFour />
        <Team />
        <Blogs />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
