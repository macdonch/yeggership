import React from "react";
import NavBar from './client/components/navBar';
import Home from "./client/pages/home";
import About from "./client/pages/about";
import Resources from "./client/pages/resources";
import CharacterGallery from "./client/pages/charactergallery";
import Faq from "./client/pages/faq";
import CharacterGenerator from "./client/pages/charactergenerator"
import FillableCharacter from "./client/pages/fillablecharacter"
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {getTheme} from './theme';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let theme = this.state.theme;
    if (theme === 'dark') {
      theme = 'light'
    } else {
      theme = 'dark'
    }
    this.setState({ theme });
      }

  render() {
    const state = this.state;
    const theme = getTheme(state.theme);

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="xl">
            <NavBar state={state} handleChange={this.handleChange}/>
              <Routes>
                <Route exact path={"/"} element={ <Home />} />
                <Route path={"/charactergenerator"} element={<CharacterGenerator />} />
                <Route path={"/fillablecharacter"} element={<FillableCharacter />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/resources"} element={<Resources />} />
                <Route path={"/faq"} element={<Faq />} />
                <Route path={"/charactergallery"} element={<CharacterGallery />} />
              </Routes>
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;