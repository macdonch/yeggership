import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';

const ClawsOut = () => {

  const module = {
    driveThruUrl: 'https://www.drivethrurpg.com/en/product/458045/mothership-claws-out-letter-and-a4-size',
    title: 'Claws Out',
    type: 'pamphlet module'
  };
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/clawsout/';
  const downloadUrl = gcsFolderUrl + 'ClawsOut.zip';
  const moduleLogo = gcsFolderUrl + 'ClawsOutLogo.png';
  const pawPrint = gcsFolderUrl + 'PawPrint.png';
  const images = [];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid xs={3} sx={{ display: { xs: 'flex', sm: 'flex'} }}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={moduleLogo}
            ></Box>
          </Grid>
          <Grid xs={9} sx={{ display: { xs: 'block', sm: 'block'} }}>
            <Grid xs={12}>
              <Box>
                <Typography variant="h1" textAlign={"center"} sx={{ display: { xs: 'none', sm: 'block'} }}>
                  CLAWS OUT
                </Typography>
                <Typography variant="h2" textAlign={"center"} sx={{ display: { xs: 'block', sm: 'none'} }}>
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
            <Grid xs={12} textAlign={"center"}  sx={{ display: { xs: 'none', sm: 'block'} }}>
              <Box 
                component="img"
                sx={{ 
                  maxWidth: 0.5,
                  objectFit: "contain"
                }}
                src={Mothership1eLogo}
              ></Box>
            </Grid>
            <Grid xs={12} textAlign={"center"}  sx={{ display: { xs: 'block', sm: 'none'} }}>
              <Box 
                component="img"
                sx={{ 
                  maxWidth: 1,
                  objectFit: "contain"
                }}
                src={Mothership1eLogo}
              ></Box>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
              <i>{module.title}</i> is a pamphlet module compatible with the Mothership RPG&trade;
              . It contains descriptions of
              events that occur onboard the cargo ship <i>Agamemnon</i>, seven NPCs &nbsp; &nbsp;
              </Typography>
              <Box 
                display="inline"
                component="img"
                sx={{ 
                  height: 30,
                  maxWidth: 1,
                  objectFit: "contain"
                }}
                src={pawPrint}
              ></Box>
                <br />
                <br />
              <Typography>
                ... and one cat.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography display="inline">
              <br />
              <br />
              <i>{module.title}</i> is now availabe for  purchase at &nbsp;
              <Link display="inline" underline="hover" target="_blank" rel="noopener" href={module.driveThruUrl}>
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