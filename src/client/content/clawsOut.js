import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
              <Typography>
                The cargo ship <i>Agamemnon</i> is the oldest ship you’ve ever seen… 
                you didn’t know any of this class were still in service. Rolling hatches, manual 
                interfaces… how does The Company find parts for this thing?
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box>
              <br />
              <br />
              <Typography display="inline">
                <i>Claws Out</i> is a pamphlet module compatible with the Mothership RPG&trade;. It contains descriptions of
                events that occur onboard the last voyage of the cargo ship <i>Agamemnon</i>, seven NPCs &nbsp; &nbsp;
              </Typography>
              <Box 
                display="inline"
                component="img"
                sx={{ 
                  height: 30,
                  maxWidth: 1
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
            <Typography>
              <br />
              <br />
              <i>Claws Out</i> will be available on DriveThruRPG in Q4 2023.
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