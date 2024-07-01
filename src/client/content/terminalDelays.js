import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import HeadphonesIcon from '@mui/icons-material/Headphones'

const TerminalDelays = () => {
  const module = {
    driveThruUrl: 'https://preview.drivethrurpg.com/en/product/365735/mothership-terminal-delays-at-anarene-s-folly',
    title: 'Terminal Delays',
    type: 'pamphlet module'
  }
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
    },
    {
      displayText:'Kara Token',
      url: gcsFolderUrl + 'kara.png',
    },
    {
      displayText:'Kat Token',
      url: gcsFolderUrl + 'kat.png',
    }
  ];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12}>
            <Box display="inline">
              <Typography display="inline">
                  <i>{module.title}</i> is a {module.type} published by Tuesday Knight Games. It is availabe for 
                  purchase at &nbsp;
                  <Link display="inline" underline="hover" target="_blank" rel="noopener" href={module.driveThruUrl}>
                    DriveThruRPG
                  </Link>
                  .
              </Typography>
            </Box>
          </Grid>
          <Grid sm={12}>
            <Typography>
              <br />
                The PCs are trying to dock at the station "Anarene's Folly", but are delayed by the Space Traffic Controller. The 
                module comes with an in-world audio file of an "on-hold" message, which the players will hear everytime 
                they try to contact the station.
              
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
                I ran this module in a single session, as a 'prequel' with pre-generated characters that appeared as NPCs later 
                in our campaign timeline. I used Audacity to splice the "hold" message with commercials from <i>Blade Runner</i> and Public Service 
                Announcements from <i>Starship Troopers</i>. I also created a custom commerical for "AdrenoBoost". 
              <br />
              <br />
                I have made the following resources available:
              
            </Typography>
              <ul style={{ listStyleType: 'square'}}>
                <li>a crew manifest for the players' ship, the USCSS <i>Agamemnon</i></li>
                <li>character sheets for three players</li>
                <li>bios for the crew</li>
                <li>crew images to be used as tokens on Roll20</li>
                <li>An audio commercial for "AdrenoBoost", intended to be played with the hold music.</li>
              </ul>
            <Typography>
              <br />
                These can be viewed below, or you can download them as a zip file.
              
              <br />
                <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloadUrl} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  Download .zip {<DownloadIcon />}
                </Link>
              
              <br />
                <Link display="inline" underline="none" target="_blank" rel="noopener" href={audioUrl} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  adrenoBoost Ad {<HeadphonesIcon />}
                </Link>
              
            </Typography>
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
      </Box>
  );
}
export default TerminalDelays; 