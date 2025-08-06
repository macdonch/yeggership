import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';

const NietzschesDemon = () => {

  const module = {
    driveThruUrl: 'https://www.drivethrurpg.com/en/product/500887/mothership-nietzsche-s-demon',
    title: "Nietzsche's Demon",
    type: 'module'
  };
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/nietzschesdemon/';
  const downloadUrl = gcsFolderUrl + 'NietzschesDemon.zip';
  const moduleLogo = gcsFolderUrl + 'NietzschesDemonImaniScream.jpg';
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
                  NIETZSCHE'S DEMON
                </Typography>
                <Typography variant="h3" textAlign={"center"} sx={{ display: { xs: 'block', sm: 'none'} }}>
                  NIETZSCHE'S<br />DEMON
                </Typography>
                <Typography textAlign={"center"}>
                  <br />
                  <i>Here we go again.</i>
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
              <Typography>
                Hyperspace travel is… weird.
                <br />
                <br />
                Old Ben will tell you that things like this didn’t happen in the old days, before the FTL
                drives. Traveling through hyperspace is just… unnatural. The universe was already
                weird enough and FTL might just be making it, well, weirder.
                <br />
                <br />
                Join the passengers and crew of the cargo ship <i>Pharaon</i> and see just what can go
                wrong in hyperspace. If you survive, you will have a great story… but will anyone
                believe it?
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
                <i>Nietzsche's Demon</i> is a 52 page module compatible with the Mothership RPG&trade;. It contains:
                <ul>
                  <li>Descriptions and portraits for 8 NPCs.</li>
                  <li>A ship design for a small freighter, the <i>Pharaon</i>.</li>
                  <li>A detailed timeline of events, structured in five acts.</li>
                  <li>Detailed explanations of several module-specific mechanics.</li>
                  <li>Detailed mechanics and descriptions for the Entity.</li>
                  <li>Suggestions on how to handle common player actions, and how to incorporate character skills in to gameplay.</li>
                </ul>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
              Below is a sample of some the art found in <i>Nietzsche's Demon</i>, by&nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href="https://darkandstormyart.com/">
                Dark and Stormy Art.
              </Link>
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: { xs: 'flex', scrollMarginInlineEnd: 'flex'} }}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={collage}
            ></Box>
          </Grid>

          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography display="inline">
              <br />
              <br />
              <i>{module.title}</i> is now availabe for  purchase at &nbsp;
              <Link display="inline" underline="true" target="_blank" rel="noopener" href={module.driveThruUrl}>
                DriveThruRPG
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
export default NietzschesDemon; 