import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'none'} }}>
        <Typography>This page requires a horizontal resolution of at least 600 pixels to render properly.</Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid container rowSpacing={1} alignItems="top">
          {/* Welcome */}
          <Grid xs={12}>
            <Typography>
              Welcome to YEGGERSHIP! We have some free stuff. Someday soon though, we will try to sell you some modules.
            </Typography>
          </Grid>

          {/* Products */}
          <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
            <Typography variant="h5">Products</Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              We are working towards publishing two modules in 2023/2024: the pamphlet module <i>Claws Out</i>, and the 50+ page 
              module <i>Nietzsche's Demon</i>.
              <br />
              <br />
              <i>Claws Out</i> has been submitted to Tuesday Knight Games for approval. <i>Nietzsche's Demon</i> is being edited, 
              and waiting for some art work.
              <br />
              <br />
              Both modules will be launched via Kickstarter, then available from DriveThruRPG.
            </Typography>
          </Grid>

          {/* Site Description */}
          <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
            <Typography variant="h5">Free Stuff</Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant={'h6'}>Character Generator</Typography>
            <Typography display="inline">
              <Link display="inline" underline="hover" href="./charactergenerator">
                PC GEN
              </Link>
              &nbsp; guides you through the character creation process. It randomly generating all necessary dice rolls, 
              validates skill tree selections and then generates a .pdf for download.
              <br />
              <br />
              Characters can be created using the Mothership 1e standard rules, or with our House Rules.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant={'h6'}>Character Sheet</Typography>
            <Typography display="inline">
              <Link display="inline" underline="hover" href="./fillablecharacter">
                PC SHEET
              </Link>
              &nbsp; allows free-form entry for all character fields, and then produces a .pdf.
              <br />
              <br />
              Characters can be created using the Mothership 1e standard rules, or with our House Rules.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant={'h6'}>Campaign and Module Supplementary Content</Typography>
            <Typography display="inline">
              The&nbsp;
              <Link display="inline" underline="hover" href="./resources">
                RESOURCES
              </Link>
              &nbsp; page contains a campaign setting, and material we created for our own play sessions of published modules. 
              The&nbsp;
              <Link display="inline" underline="hover" href="./charactergallery">
                HALL OF FAME
              </Link>
              &nbsp; contains memorable characters we have encountered. Feel free to use them as NPCs in your own sessions.
            </Typography>
          </Grid>

          {/* About Us */}
          <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
            <Typography variant="h5">About Us</Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              Our group is mostly in Edmonton, Alberta, Canada, but we also have players in the US and BC. We mostly play online, 
              using Roll20 for maps and dice, and Discord for A/V. We play in a shared universe with two Wardens. We have mostly played a mix of 
              one shots and short arc campaigns.
              <br />
              <br />
              We have a longer running campaign going with six players, running a mix of characters that survived <i>Vita Nova</i> and <i>Black Pyramid</i>.
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
            <Typography variant="h5">Contact</Typography>
          </Grid>
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>Discord: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://discordapp.com/users/458484150828269578" sx={{ display: { xs: 'none', sm: 'block'} }}>
              leibniz_2013
            </Link>
          </Grid>
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>GitHub: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://github.com/macdonch" sx={{ display: { xs: 'none', sm: 'block'} }}>
              macdonch
            </Link>
          </Grid>
          <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Typography>RedBubble: </Typography>
            <Link underline="hover" target="_blank" rel="noopener" href="https://www.redbubble.com/people/leibniz/shop" sx={{ display: { xs: 'none', sm: 'block'} }}>
              leibniz
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
}
export default Home; 