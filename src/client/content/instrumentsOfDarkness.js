import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';

const InstrumentsOfDarkness = () => {

  const module = {
    driveThruUrl: 'https://www.drivethrurpg.com/en/product/500887/mothership-nietzsche-s-demon',
    title: "Nietzsche's Demon",
    type: 'module'
  };
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/instrumentsofdarkness/';
  const downloadUrl = gcsFolderUrl + 'InstrumentsOfDarkness.zip';
  const moduleLogo = gcsFolderUrl + 'aasha.png';
  const collage = gcsFolderUrl + 'NietzscheCollageSmall.jpg';
  const images = [];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={3} sx={{ display: { xs: 'flex', scrollMarginInlineEnd: 'flex'} }}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={moduleLogo}
            ></Box>
          </Grid>
          <Grid xs={12} sm={9} sx={{ display: { xs: 'block', sm: 'block'} }}>
            <Grid xs={12}>
              <Box>
                <Typography variant="h1" textAlign={"center"} sx={{ display: { xs: 'none', sm: 'block'} }}>
                  INSTRUMENTS OF DARKNESS
                </Typography>
                <Typography variant="h3" textAlign={"center"} sx={{ display: { xs: 'block', sm: 'none'} }}>
                INSTRUMENTS OF<br />DARKNESS
                </Typography>
                <Typography textAlign={"center"}>
                  <br />
                  <i>By the pricking of my thumbs,<br />
                  Something wicked this way comes.</i>
                  <br />
                  <br />
                  Written By Charles Macdonald<br />
                  Edited by Marcel Berridge
                </Typography>
                <br />
                <br />
              </Box>
            </Grid>
            <Grid xs={12} textAlign={"center"}>
              {
              <Box 
                component="img"
                sx={{ 
                  height: 1,
                  maxWidth: 0.5
                }}
                src={Mothership1eLogo}
              ></Box>
              }
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
              Funding now until August 21st on &nbsp;
                <Link display="inline" underline="true" target="_blank" rel="noopener" href="https://www.kickstarter.com/projects/yeggership/instruments-of-darkness-a-mothership-rpg-adventure?ref=8jbbu8">
                    Kickstarter.
                </Link>
                </Typography>
            </Box>
          </Grid>

          
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
              <br />
              Mothership RPG are trademarks of Tuesday Knight Games. For
              additional information, visit &nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href="http://www.tuesdayknightgames.com">
                www.tuesdayknightgames.com
              </Link>
              &nbsp; or contact contact@tuesdayknightgames.com.
            </Typography>
          </Grid>
          
        </Grid>
      </Box>
  );
}
export default InstrumentsOfDarkness; 