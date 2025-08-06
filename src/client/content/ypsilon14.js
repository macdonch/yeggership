import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import HeadphonesIcon from '@mui/icons-material/Headphones'

const Ypsilon14 = () => {
  const module = {
    driveThruUrl: 'https://https://preview.drivethrurpg.com/en/product/300016/mothership-the-haunting-of-ypsilon-14',
    title: 'The Haunting of Ypsilon 14',
    type: 'pamphlet module'
  }
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/ypsilon14/';
  const downloadUrl = gcsFolderUrl + 'ypsilon14.zip';
  const terminalPreview = [
    {
      displayText: 'Terminal Login',
      url: gcsFolderUrl + 'terminal1.png'
    },
    {
      displayText:'Control Menu',
      url: gcsFolderUrl + 'terminal2.png',
    },
    {
      displayText:'Heracles Layout',
      url: gcsFolderUrl + 'terminal3.png',
    }
  ]
  const idPreviews = [
    {
      displayText: 'Ashraf Higani',
      url: gcsFolderUrl + 'ashraf.png'
    },
    {
      displayText:'Dr. Edmond Brunn',
      url: gcsFolderUrl + 'brunn.png',
    },
    {
      displayText: 'Dana Flores',
      url: gcsFolderUrl + 'dana.png'
    },
    {
      displayText: 'Dr. Ethan Giovanni',
      url: gcsFolderUrl + 'ethan.png'
    },
    {
      displayText: 'Grunge Porkins',
      url: gcsFolderUrl + 'grunge.png'
    },
    {
      displayText: 'Isaac Newton',
      url: gcsFolderUrl + 'isaac.png'
    },
    {
      displayText: 'Jerome Flores',
      url: gcsFolderUrl + 'jerome.png'
    },
    {
      displayText:'Kantaro Yorozaki',
      url: gcsFolderUrl + 'kantaro.png',
    },
    {
      displayText:'Mike Stogen',
      url: gcsFolderUrl + 'mike.png',
    },
    {
      displayText:'M.O.B.I',
      url: gcsFolderUrl + 'mobi.png',
    },
    {
      displayText:'Morgan Xaviet',
      url: gcsFolderUrl + 'morgan.png',
    },
    {
      displayText:'Pid Little',
      url: gcsFolderUrl + 'pid.png',
    },
    {
      displayText: "Rosa D'Ameila",
      url: gcsFolderUrl + 'rosa.png',
    },
    {
        displayText:'Sonya Hurtz',
        url: gcsFolderUrl + 'sonya.png',
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
                  <Link display="inline" underline="true" target="_blank" rel="noopener" href={module.driveThruUrl}>
                    DriveThruRPG
                  </Link>
                  .
              </Typography>
            </Box>
          </Grid>
          <Grid sm={12}>
            <Typography>
              <br />
              The PCs arrive at the remote mining base Ypsilon 14, and discover that one of the workers has disappeared... and then NPCs continue to disappear
              at regular intervals.
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              <br />
              The module comes with two audio recordings, a music track and descriptions of ten NPCs.              
              <br />
              <br />
              The resources below were created and shared by Mothership discord server member <b>Jay_dont</b>, and have been posted here with their permission:
              
            </Typography>
              <ul style={{ listStyleType: 'square'}}>
                <li>ID cards with images of the NPCs</li>
                <li>Images of cassete tapes and a cassette player for the audio files</li>
                <li>an interactive html page to represent the station's computer system</li>
              </ul>
            <Typography>
              <br />
                There are previews below, and you can download all of the resources in a zip file.
              
              <br />
                <Link display="inline" underline="true" target="_blank" rel="noopener" href={downloadUrl} sx={{ display: { xs: 'block', sm: 'block'} }}>
                  Download .zip {<DownloadIcon />}
                </Link>
              
            </Typography>
          </Grid>
        </Grid>

        <Grid sm={12}>
          <Typography variant='h5'>
            Terminal
          </Typography>
          <Typography>
            The Terminal emulates the station computer system; you can just run it locally in your browser.
            It has several menus that require different levels of access.
            A few screen shots are shown below.
          </Typography>
        </Grid> 

        <Box>
          {terminalPreview.map(({displayText, url}) => (
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

        <Grid sm={12}>
          <Typography variant='h5'>
            ID Cards
          </Typography>
          <Typography>
            The ID cards are provided as pdf files, with two cards per page. Print them cut them, and fold them in half.
            <i>Note: the QR codes contain important information relating to the terminal.</i>
          </Typography>
        </Grid>

        <Box>
          {idPreviews.map(({displayText, url}) => (
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
export default Ypsilon14; 