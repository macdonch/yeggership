import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';

const Agamemnon = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/ships/agamemnon/';
  const sideView = gcsFolderUrl + 'agamemnonSideView.png';
  const deckA = gcsFolderUrl + 'agamemnonDeckA.png';
  const deckB = gcsFolderUrl + 'agamemnonDeckB.png';
  const deckC = gcsFolderUrl + 'agamemnonDeckC.png';
  const statsBlock = gcsFolderUrl + 'agamemnonStats.png';
  const downloadUrl = gcsFolderUrl + 'agamemnon.zip';

  return (
    <Box>
        <Grid container rowSpacing={2} columnSpacing={2} alignItems="top">
          <Grid xs={12}>
            <Typography variant='h2'>
            The Agamemnon
            </Typography>
          </Grid>
          <Grid sx={12}>
            <Typography variant='h3'>
            Class II Freighter
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              The <i>Agamemnon</i> was already old when it was dismantled by the Company, then hauled from the
              Core to be reassembled as one of the first vessels working in the fledgling Prosporo System. After a few decades, the
              <i>Agamemnon</i> was fitted with a Jump1 drive, and repurposed to haul freight and passengers to the other developing
              systems in the Faustus Sector.
              </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography>
              Originally designed for a crew complement of 9, the ship can now operate with a crew of only four, plus an android.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={statsBlock}
            ></Box>
          </Grid>
          <Grid xs={12} md={6}>
            <Grid xs={12}>
              <Typography>
                The Agamemnon is equipped with a purpose-built android unit, KR-A (Kara). Kara is tighly coupled with
                the ship's Neural Adaptive Translateral processing unit (NAT). Over time, Kara and NAT have become so
                intertwined that if either became disabled, the other's ability to function would substantially degrade.
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>
                Many of the ship's system are antiquated, and their  operations are unfamiliar to modern hands, such as
                the large rolling hatches that seperate interior compartments, and the manual controls for the ship's
                sytems. The cryopods are reasonably modern, but the added medbay is dated: it was added 30 years ago so
                a travelling doctor could provide care on a regular basis to remote stations and colonies.
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>
                The Agamemnon has a minimum complement of four crew members: the Captain, Lead Hand, Chief
                Engineer, and Engineer's Mate. An additional two hands may be contracted to assist with maintenance,
                or cargo handling.
              </Typography>
            </Grid>
          <Grid xs={12}>
            <Typography>
                The ship can also accomodate up to six passengers in the five cabins on deck B.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={4} alignItems="top">
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography variant='h4'>
              SIDE VIEW
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={sideView}
            ></Box>
          </Grid>
          <Grid xs={12}>
            <ol>
              <li>
                <Typography>
                  <b>Bridge.</b> 360 degree view. Control stations configured to make the direction of travel unimportant for
                  operations.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Airlock.</b> Main entry, one on each side of the ship. Sealed by a rolling hatch on the inside. Outer
                  hatches have been upgraded to be compatible with modern umbilicals.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Habitat Areas.</b> Habitat for crew and passengers spread over the forward portion of two decks.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Operational Areas.</b> Operational and technical facilities spread over the aft portion of two decks,
                  including cryo chambers, medbay, and life support.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Engineering Spaces.</b> Power plant, jump drive, fuel, and maintenance areas aft. Access to solar sail
                  deployment/retraction mechanisms.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Cargo Deck.</b> Room for 50 cargo containers. Unpressurized, with no gravity. Contains power/
                  environmental hookups for specialized containers that require atmosphere, temperature controls, and/
                  or gravity. Containers are removed via a hatch on the top of the hull.
                </Typography>
              </li>
            </ol>
          </Grid>
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography variant='h4'>
              DECK A
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={deckA}
            ></Box>
          </Grid>
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography variant='h4'>
              DECK B
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={deckB}
            ></Box>
          </Grid>
          <Grid xs={12} sx={{ display: 'block' }}>
            <Typography variant='h4'>
              DECK C
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
                objectFit: "contain"
              }}
              src={deckC}
            ></Box>
          </Grid>
          <Grid sm={12} sx={{ display: { xs: 'flex', md: 'flex'} }}>
            <Typography>
              Maps and diagrams are available for download as a zip file.
              < br />
              < br />
              <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloadUrl} sx={{ display:  'block' }}>
                Download .zip {<DownloadIcon />}
              </Link>
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Box>
  );
}
export default Agamemnon; 