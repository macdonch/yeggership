import React from "react";
import NavBar from './client/components/navBar';
import Home from "./client/pages/home";
import Resources from "./client/pages/resources";
import CharacterGallery from "./client/pages/charactergallery";
import Ships from "./client/pages/ships";
import CharacterGenerator from "./client/pages/charactergenerator"
import FillableCharacter from "./client/pages/fillablecharacter"
import ClawsOut from "./client/content/clawsOut"
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {getTheme} from './theme';
import NietzschesDemon from "./client/content/nietzschesDemon";

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
                <Route path={"/resources"} element={<Resources />} />
                <Route path={"/charactergallery"} element={<CharacterGallery />} />
                <Route path={"/ships"} element={<Ships />} />
                <Route path={"/clawsout"} element={<ClawsOut />} />
                <Route path={"/nietzschesdemon"} element={<NietzschesDemon />} />
              </Routes>
          </Container>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;