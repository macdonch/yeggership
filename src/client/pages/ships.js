import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { GetShips, GetShipContent } from '../services/getShips'

const Ships = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const sideBar = GetShips();

  const Home = GetShipContent('shipsHome');

  const [currentContent, setCurrentContent] = React.useState(Home);
  const [fontWeight, setFontWeight] = React.useState({charactersHome: 'bold'});

  const selectContent = (event) => {
    setCurrentContent(GetShipContent(event.currentTarget.id));
    for (const key of Object.keys(fontWeight)) {
        fontWeight[key] = 'normal';
    }
    fontWeight[event.currentTarget.id] = 'bold'
    setFontWeight(fontWeight)
  }

  const getFontWeight = (key) => {
    return fontWeight[key];
  }
  

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none'} }}>
        <Typography>The webmaster hates phones!<br />For now, this page requires a horizontal resolution of at least 600 pixels to render properly.</Typography>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
        <Grid container rowSpacing={1} alignItems="top">
            <Grid sm={12} md={3}>
                {sideBar.map(({displayText, key}) => (
                    <Grid key={key} sm={12}>
                        <Button
                            key={key}
                            id={key}
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={selectContent}
                        >
                            <Typography key={key} name={key} sx={{mx: 1, fontWeight: getFontWeight(key)}}>{displayText}</Typography>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Grid sm={12} md={9}>
                {currentContent}
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Ships; 