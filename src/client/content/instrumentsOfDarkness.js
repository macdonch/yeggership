import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';

const InstrumentsOfDarkness = () => {

  const module = {
    driveThruUrl: 'https://www.drivethrurpg.com/en/product/542459/mothership-instruments-of-darkness',
    tkgUrl: 'https://www.tuesdayknightgames.com/products/instruments-of-darkness',
    title: "Instruments of Darkness",
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
                A Plague of Lizards threatens millions with starvation. Compliance Officer Aasha Kumari 
                accompanies your cargo run to the Banquo Mining Facility, looking for the source. An accident 
                during docking entangles you and your crew in a web of malfeasance, corporate secrets and 
                spreading madness.
                <br />
                <br />
                Can you survive the evil about to be unleashed by the <i>Instruments of Darkness?</i>?
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
                <i>Nietzsche's Demon</i> is a 32-page half-size booklet (5.5" x 8.5") compatible with the Mothership RPG&trade;. It contains:
                <ul>
                  <li>optional integration with ship mechanics from the Ship Builder's Toolkit.</li>
                  <li>12 illustrated NPCs.</li>
                  <li>8 optional Survive, Solve or Save events.</li>
                  <li>Murdered Sleep: a d10 table of recurring visions.</li>
                  <li>a Villain Monologue.</li>
                  <li>cosmic horror.</li>
                  <li>end-of-adventure consequences for one-shots and campaign play.</li>
                </ul>
                <br />
                ALSO INCLUDED:
                <ul>
                  <li>audio recordings of the Villain Monologue and an unhinged pilot.</li>
                  <li>full color and print-friendly pdf</li>
                  <li>a "Welcome to Banquo" player handout (pdf)</li>
                  <li>an optional player character sheet for the Compliance Officer (pdf)</li>
                </ul>
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography display="inline">
              <br />
              <br />
              <i>{module.title}</i> is now availabe for purchase at &nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href={module.driveThruUrl}>
                DriveThruRPG
              </Link>
              &nbsp; and &nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href={module.tkgUrl}>
                Tuesday Knight Games
              </Link>
              .
            </Typography>
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