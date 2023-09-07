import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import HeadphonesIcon from '@mui/icons-material/Headphones'

const TerminalDelays = () => {
  const driveThruUrl = 'https://preview.drivethrurpg.com/en/product/365735/mothership-terminal-delays-at-anarene-s-folly';
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/terminaldelays/';
  const downloadUrl = gcsFolderUrl + 'TerminalDelays.zip';
  const audioUrl = gcsFolderUrl + 'cryoboostFinal.mp3';
  const images = [
    {
      displayText: 'Crew Manifest',
      url: gcsFolderUrl + 'crewManifest.png'
    },
    {
      displayText:'Pente Character Sheet',
      url: gcsFolderUrl + 'penteSheet.png',
    },
    {
      displayText: 'Warre Character Sheet',
      url: gcsFolderUrl + 'warreSheet.png'
    },
    {
      displayText: 'Nair Character Sheet',
      url: gcsFolderUrl + 'nairSheet.png'
    },
    {
      displayText: 'Character Bios (Preview)',
      url: gcsFolderUrl + 'bios.png'
    },
    {
      displayText: 'Pente Token',
      url: gcsFolderUrl + 'pente.png'
    },
    {
      displayText: 'Warre Token',
      url: gcsFolderUrl + 'warre.png'
    },
    {
      displayText:'Nair Token',
      url: gcsFolderUrl + 'nair.png',
    },
    {
      displayText:'Ashbrook Token',
      url: gcsFolderUrl + 'ashbrook.png',
    },
    {
      displayText:'Button Token',
      url: gcsFolderUrl + 'button.png',
    },
    {
      displayText:'Mlynnik Token',
      url: gcsFolderUrl + 'mlynnik.png',
    }
  ];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Box display="inline">
            <Typography display="inline">
                <i>Terminal Delays</i> is a pamplet module published by Tuesday Knight Games. It is availabe for 
                purchase at &nbsp;
                <Link display="inline" underline="hover" target="_blank" rel="noopener" href={driveThruUrl}>
                  DriveThruRPG
                </Link>
                .
            </Typography>
          </Box>
          </Grid>
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography display="inline">
              <p>
                The PCs are trying to dock at the station "Anarene's Folly", but are delayed by the Space Traffic Controller. The 
                module comes with an in-world audio file of an "on-hold" message, which the players will hear everytime 
                they try to contact the station.
              </p>
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography display="inline">
              <p>
                I ran this module in a single session, as a 'prequel' with pre-generated characters that appeared as NPCs later 
                in our campaign timeline. I used Audacity to splice the "hold" message with commercials from<i>Blade Runner</i> and Public Service 
                Announcements from <i>Starship Troopers</i>. I also created a custom commerical for "AdrenoBoost". 
              </p>
              <p>
                I have made the following resources available:
                <ul>
                  <li>a crew manifest for the players' ship, the USCSS <i>Agamemnon</i></li>
                  <li>character sheets for three players</li>
                  <li>bios for the crew</li>
                  <li>crew images to be used as tokens on Roll20</li>
                  <li>An audio commercial for "AdrenoBoost", intended to be played with the hold music.</li>
                </ul>
                These can be viewed below, or you can download them as a zip file.
                </p>
              <p>
              <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloadUrl} sx={{ display: { xs: 'none', sm: 'block'} }}>
                Download .zip {<DownloadIcon />}
              </Link>
              </p>
              <p>
              <Link display="inline" underline="none" target="_blank" rel="noopener" href={audioUrl} sx={{ display: { xs: 'none', sm: 'block'} }}>
                adrenoBoost Ad {<HeadphonesIcon />}
              </Link>
              </p>
            </Typography>
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
export default TerminalDelays; 