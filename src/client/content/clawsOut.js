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
  const mothership1eLogoLight = 'https://storage.googleapis.com/mothership-375920-media/images/1eLogo_lightmode.png'
  const mothership1eLogoDark = 'https://storage.googleapis.com/mothership-375920-media/images/1eLogo_darkmode.png'
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
              <Typography>
                The PCs are hired to retrieve an item from the Daedalus Robotics Lab, which is in lockdown after a fatality was reported. A number of employees are still in the facility.
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