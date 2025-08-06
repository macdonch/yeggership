import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';

const Pharaon = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/ships/pharaon/';
  const mainDeck = gcsFolderUrl + 'pharaonMainDeck.png';
  const upperEngine = gcsFolderUrl + 'pharaonUpperEngine.png';
  const blueprint = gcsFolderUrl + 'pharaonMapPrintFriendly.png';
  const downloadUrl = gcsFolderUrl + 'pharaon.zip';

  return (
    <Box>
      <Grid container rowSpacing={2} columnSpacing={2} alignItems="top">
        <Grid xs={12}>
          <Typography variant='h2'>
            The Pharaon
          </Typography>
        </Grid>
        <Grid sx={12}>
          <Typography variant='h3'>
            Freighter
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography>
            The <i>Pharaon</i> was originally designed following the ship building rules in Mothership 0e, and sailed long before
            the Ship Breakers Toolkit was released. It is assumed to have magic space gravity throughout.
          </Typography>
        </Grid>

        <Grid xs={12} sx={{ display: 'block' }}>
          <Typography variant='h4'>
            FULL MAP
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Box 
            component="img"
            sx={{ 
              maxWidth: 1,
              objectFit: "contain"
            }}
            src={blueprint}
          ></Box>
        </Grid>
        <Grid xs={12} sx={{ display: 'block' }}>
          <Typography variant='h4'>
            Main Deck
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Box 
            component="img"
            sx={{ 
              maxWidth: 1,
              objectFit: "contain"
            }}
            src={mainDeck}
          ></Box>
        </Grid>
        <Grid xs={12} sx={{ display: 'block' }}>
          <Typography variant='h4'>
            UPPER ENGINE ROOM
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Box 
            component="img"
            sx={{ 
              maxWidth: 1,
              objectFit: "contain"
            }}
            src={upperEngine}
          ></Box>
        </Grid>
        <Grid sm={12} sx={{ display: { xs: 'flex', md: 'flex'} }}>
          <Typography>
            Maps and diagrams are available for download as a zip file.
            < br />
            < br />
            <Link display="inline" underline="true" target="_blank" rel="noopener" href={downloadUrl} sx={{ display:  'block' }}>
              Download .zip {<DownloadIcon />}
            </Link>
          </Typography>
          <br />
        </Grid>
    
        <Grid xs={12} sx={{ display: 'block' }}>
          <Typography>
            <br />
            <br />
            The maps of the <i>Pharaon</i> are modelled after the Accessible Maps created by Violet Ballard for the RV Games publication &nbsp;
            <Link display="inline" underline="true" target="_blank" rel="noopener" href="https://www.rvgames.company/advanced-rules/">
              <i>Advanced Rules</i>
            </Link>
            &nbsp; available under a Creative Commons &nbsp;
            <Link display="inline" underline="true" target="_blank" rel="noopener" href="https://www.rvgames.company/advanced-rules/license">
              license.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Pharaon; 