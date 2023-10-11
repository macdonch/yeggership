import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Mothership1eLogo from '../../assets/1eLogoWebsite.png';
import DownloadIcon from '@mui/icons-material/Download';

const ClawsOutResources = () => {
  const module = {
    driveThruUrl: 'https://preview.drivethrurpg.com/en/product/370801/mothership-piece-by-piece',
    title: 'Claws Out',
    type: 'pamphlet module'
  };
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/clawsout/';
  const downloadUrl = gcsFolderUrl + 'ClawsOut.zip';
  const moduleLogo = gcsFolderUrl + 'ClawsOutLogo.png';
  const pawPrint = gcsFolderUrl + 'PawPrint.png';
  const images = [
    {
      displayText: 'Agamemnon .pdf preview',
      url: gcsFolderUrl + 'Freighter-Agamemnon.png'
    },
    {
      displayText: 'Deck A',
      url: gcsFolderUrl + 'agamemnonDeckA.png'
    },
    {
      displayText: 'Deck B',
      url: gcsFolderUrl + 'agamemnonDeckB.png'
    },
    {
      displayText: 'Deck C',
      url: gcsFolderUrl + 'agamemnonDeckC.png'
    }
  ];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={3} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
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
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
              <br />
              <i>Claws Out</i> will be launched via Kickstarter in Q4 2023.
            </Typography>
          </Grid>
          <Grid sm={12}>
            <br />
            <br />
            <Typography variant="h5">
              Additional Material
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              The module is set on the cargo ship <i>Agamemnon</i>, but a map is not provided. Wardens can make their own map, or can use the maps provided here.
              They can be viewed below, or you can download them as a zip file. The zip files also provides deck plans without ventilation,
              which makes the maps more readable.
              < br />
              < br />
              <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloadUrl} sx={{ display:  'block' }}>
                Download .zip {<DownloadIcon />}
              </Link>
            </Typography>
            <br />
          </Grid>
        </Grid>
        <Box>
          {images.map(({displayText, url}) => (
            <Grid container rowSpacing={1} alignItems="top">
                  <Grid key={displayText + 'title'} sm={3} md={3} sx={{ display: { xs: 'none', sm: 'block'} }}>
                    <Typography>{displayText}</Typography>
                  </Grid>
                  <Grid key={displayText + 'url'} sm={9} md={9} sx={{ display: { xs: 'none', sm: 'block'} }}>
                    <Box 
                      component="img"
                      sx={{ 
                        height: 100,
                        '&:hover': {
                          height: 1,
                          maxWidth: 0.75
                        }
                      }}
                      src={url}
                      ></Box>
                  </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
  );
}
export default ClawsOutResources;