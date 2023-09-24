import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';

const ClawsOut = () => {

  const module = {
    driveThruUrl: 'https://preview.drivethrurpg.com/en/product/370801/mothership-piece-by-piece',
    title: 'Claws Out',
    type: 'pamphlet module'
  };
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/clawsout/';
  const downloadUrl = gcsFolderUrl + 'ClawsOut.zip';
  const moduleLogo = gcsFolderUrl + 'ClawsOutLogo.png';
 const images = [];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={3} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Box 
              component="img"
              sx={{ 
                height: 1,
                maxWidth: 1
              }}
              src={moduleLogo}
            ></Box>
          </Grid>
          <Grid sm={9} sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Grid sm={12}>
              <Box>
                <Typography variant="h1" textAlign={"center"}>
                  CLAWS OUT
                </Typography>
                <Typography textAlign={"center"}>
                  <br />
                  <i>Losing one passenger may be regarded as misfortune...</i>
                  <br />
                  <i>losing two looks like carelessness.</i>
                  <br />
                  <br />
                  Written By Charles Macdonald<br />
                  Edited by Marcel Berridge
                </Typography>
                <br />
                <br />
              </Box>
            </Grid>
            <Grid sm={12} textAlign={"center"}>
              <Box 
                component="img"
                sx={{ 
                  height: 1,
                  maxWidth: 0.5
                }}
                src={Mothership1eLogo}
              ></Box>
            </Grid>
          </Grid>
          <Grid sm={12}>
            <Box>
              <br />
              <br />
              <Typography>
                The cargo ship <i>Agamemnon</i> is the oldest ship you’ve ever seen… 
                you didn’t know any of this class were still in service. Rolling hatches, manual 
                interfaces… how does The Company find parts for this thing?
              </Typography>
            </Box>
          </Grid>
          <Grid sm={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
                <i>Claws Out</i> is a pamphlet module compatible with the Mothership RPG. It contains descriptions of
                events that occur onboard the last voyage of the cargo ship <i>Agamemnon</i>, seven NPCs &nbsp; &nbsp;
              </Typography>
              <Box 
                display="inline"
                component="img"
                sx={{ 
                  height: 30,
                  maxWidth: 1
                }}
                src={moduleLogo}
              ></Box>
                <br />
                <br />
              <Typography>
                ... and one cat.
              </Typography>
            </Box>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
              <br />
              Mothership RPG are trademarks of Tuesday Knight Games. For
              additional information, visit &nbsp;
              <Link display="inline" underline="hover" target="_blank" rel="noopener" href="http://www.tuesdayknightgames.com">
                www.tuesdayknightgames.com
              </Link>
              &nbsp; or contact contact@tuesdayknightgames.com.
            </Typography>
          </Grid>
        </Grid>
      </Box>
  );
}
export default ClawsOut; 