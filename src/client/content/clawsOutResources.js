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
  const zineNoCover = gcsFolderUrl + 'ClawsOutSuppleent-NoCover.pdf';
  const zinePrintFriendly = gcsFolderUrl + 'ClawsOutSuppleent-PrintFriendly.pdf';
  const zineSpreads = [
    {
      displayText: 'Zine Spread 1',
      url: gcsFolderUrl + 'interiorSpread1.png'
    },
    {
      displayText: 'Zine Spread 2',
      url: gcsFolderUrl + 'interiorSpread2.png'
    },
    {
      displayText: 'Zine Spread 3',
      url: gcsFolderUrl + 'interiorSpread3.png'
    },
    {
      displayText: 'Zine Spread 4',
      url: gcsFolderUrl + 'interiorSpread4.png'
    },
    {
      displayText: 'Zine Spread 5',
      url: gcsFolderUrl + 'interiorSpread5.png'
    },
    {
      displayText: 'Zine Spread 6',
      url: gcsFolderUrl + 'interiorSpread6.png'
    },
    {
      displayText: 'Zine Spread 7',
      url: gcsFolderUrl + 'interiorSpread7.png'
    }
  ]
  const images = [
    {
      displayText: 'Agamemnon Manifest',
      url: gcsFolderUrl + 'agamemnonManifest.png'
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
        <Grid sm={3} sx={{ display: { xs: 'flex', sm: 'flex'} }}>
          <Box 
            component="img"
            sx={{ 
              maxWidth: 1,
              objectFit: "contain"
            }}
            src={moduleLogo}
          ></Box>
        </Grid>
        <Grid sm={9} sx={{ display: { xs: 'block', sm: 'block'} }}>
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
                maxWidth: 0.5,
                objectFit: "contain"
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
        <Grid sm={12} sx={{ display: 'block' }}>
          <Typography>
            <br />
            <br />
            <i>Claws Out</i> will be available on DriveThruRPG in Q4 2023.
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12}>
          <br />
          <br />
          <Typography variant="h5">
              Free Supplement Zine
          </Typography>
        </Grid>
        <Grid sm={12} sx={{ display: 'block' }}>
          <Typography>
            The module is describes the cargo ship <i>Agamemnon</i> and a monster, but a map is not provideddoes not provide a shpi map, or monster stats. Wardens can make their own, or can use the reource provided in the zine supplement provided in here.
            The interior spreads can be viewed below, and the zine can be downloaded as a pdf in few formats. The zine is also included in the .zip file in the Additional Material section.
            < br />
            < br />
            <Link display="inline" underline="none" target="_blank" rel="noopener" href={zineNoCover} sx={{ display:  'block' }}>
              Zine - Coverless (good for two page display in a browser) {<DownloadIcon />}
            </Link>
            <Link display="inline" underline="none" target="_blank" rel="noopener" href={zinePrintFriendly} sx={{ display:  'block' }}>
              Zine - Print Friendly (0.25 inch margins) {<DownloadIcon />}
            </Link>
          </Typography>
          <br />
        </Grid>
      </Grid>
      <Box>
        {zineSpreads.map(({displayText, url}) => (
          <Grid container rowSpacing={1} columnSpacing={1} alignItems="top">
                <Grid key={displayText + 'title'} sm={3} md={3} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  <Typography>{displayText}</Typography>
                </Grid>
                <Grid key={displayText + 'url'} sm={9} md={9} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  <Box 
                    component="img"
                    sx={{ 
                      height: 100,
                      '&:hover': {
                        height: 1,
                        maxWidth: 0.75,
                        objectFit: "contain"
                      }
                    }}
                    src={url}
                    ></Box>
                </Grid>
          </Grid>
        ))}
      </Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12}>
          <br />
          <br />
          <Typography variant="h5">
            Additional Material
          </Typography>
        </Grid>
        <Grid sm={12} sx={{ display: 'block' }}>
          <Typography>
            Blank ship maps, NPC portrais. The zip files also provides deck plans without ventilation,here
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
          <Grid container rowSpacing={1} columnSpacing={1} alignItems="top">
                <Grid key={displayText + 'title'} sm={3} md={3} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  <Typography>{displayText}</Typography>
                </Grid>
                <Grid key={displayText + 'url'} sm={9} md={9} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  <Box 
                    component="img"
                    sx={{ 
                      height: 100,
                      '&:hover': {
                        height: 1,
                        maxWidth: 0.75,
                        objectFit: "contain"
                      }
                    }}
                    src={url}
                    ></Box>
                </Grid>
          </Grid>
        ))}
      </Box>
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
    </Box>
  );
}
export default ClawsOutResources;