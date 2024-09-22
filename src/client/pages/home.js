import React, {useState, useEffect, useRef} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import News from '../content/news';
import ClawsOut from '../content/clawsOut';
import NietzschesDemon from "../content/nietzschesDemon";

const Home = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <Box>
      <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
        <Grid container rowSpacing={2} columnSpacing={2} alignItems="top">
          {/* Welcome */}
          <Grid xs={12}>
            <Typography>
              Welcome to YEGGERSHIP!
            </Typography>
          </Grid>
          <Grid xs={12} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Typography>
              Try out our PC Generator at &nbsp;
              <Link display="inline" underline="hover" href="./charactergenerator">
                PC GEN
              </Link>
              .
              </Typography>
          </Grid>
          <Grid xs={12} sx={{ display: { xs: 'block', sm: 'none'} }}>
            <Typography>
              Some content will not render on screens with a horizonal resolution below 600px, but we're working on it.
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography display="inline">
              <i>Claws Out</i> is now available at &nbsp;
                <Link display="inline" underline="hover" target="_blank" rel="noopener" href="https://preview.drivethrurpg.com/en/product/458045/mothership-claws-out-letter-size">
                    DriveThruRPG!
              </Link>
              <br />
              <br />      
              Someday VERY soon we will launch a Kickstarter for Neitzsche's  Demon.
            </Typography>
            <br />
          </Grid>
          <Grid xs={12} md={3}>
            {News()}
          </Grid>
          <Grid xs={12} md={9}>
            <Box>
              <Grid container rowSpacing={1} alignItems="top">
                {/* Products */}
                <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
                  <Typography variant="h5">Products</Typography>
                </Grid>
                <Grid xs={12}>
                  {ClawsOut()}
                  <br />
                  <Divider variant="middle" color={primary}/>
                </Grid>
                <Grid xs={12}>
                  {NietzschesDemon()}
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
                      HR
                    </Link>
                    &nbsp; contains memorable characters we have encountered. Feel free to use them as NPCs in your own sessions.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            {/* Contact */}
            <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
              <Typography variant="h5">Contact</Typography>
            </Grid>
            <Grid xs={8} md={10} sx={{ display: { xs: 'flex', sm: 'flex', gap: '1rem' } }}>
              <Typography>Discord: </Typography>
              <Link underline="hover" target="_blank" rel="noopener" href="https://discordapp.com/users/458484150828269578" sx={{ display: { xs: 'block', sm: 'block'} }}>
                leibniz_2013
              </Link>
            </Grid>
            <Grid xs={8} md={10} sx={{ display: { xs: 'flex', sm: 'flex', gap: '1rem' } }}>
              <Typography>GitHub: </Typography>
              <Link underline="hover" target="_blank" rel="noopener" href="https://github.com/macdonch" sx={{ display: { xs: 'block', sm: 'block'} }}>
                macdonch
              </Link>
            </Grid>
            <Grid xs={8} md={10} sx={{ display: { xs: 'flex', sm: 'flex', gap: '1rem' } }}>
              <Typography>RedBubble: </Typography>
              <Link underline="hover" target="_blank" rel="noopener" href="https://www.redbubble.com/people/leibniz/shop" sx={{ display: { xs: 'block', sm: 'block'} }}>
                leibniz
              </Link>
            </Grid>
            <Grid xs={8} md={10} sx={{ display: { xs: 'flex', sm: 'flex', gap: '1rem' } }}>
              <Typography>Email: </Typography>
              <Link underline="hover" target="_blank" rel="noopener" href="mailto:yeggership@gmail.com" sx={{ display: { xs: 'blcok', sm: 'block'} }}>
                yeggership@gmail.com
              </Link>
            </Grid>
          </Grid>
          <Grid xs={12} md={9}>
            {/* About Us */}
            <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
              <Typography variant="h5">About Us</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>
                Our group is mostly in Edmonton, Alberta, Canada, but we also have players in the British Coumbia, and Washington State. We mostly play online, 
                using Roll20 for maps and dice, and Discord for A/V. We play in a shared universe with two Wardens. We have mostly played a mix of 
                one shots and short arc campaigns.
                <br />
                <br />
                We have a longer running campaign going with six players, running a mix of characters that survived <i>Vita Nova</i> and <i>Black Pyramid</i>.
              </Typography>
            </Grid>
          </Grid>
            <Typography>
              <br />
              &nbsp;
            </Typography>
        </Grid>
      </Box>
    </Box>

  );
}
export default Home; 