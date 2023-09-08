import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';

const PieceByPiece = () => {
    const module = {
    driveThruUrl: 'https://preview.drivethrurpg.com/en/product/370801/mothership-piece-by-piece',
    title: 'Piece By Piece',
    type: 'pamphlet module'
  }
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/piecebypiece/'
  const downloadUrl = gcsFolderUrl + 'PieceByPiece.zip'
  const images = [
    {
      displayText: 'Blank Map',
      url: gcsFolderUrl + 'piece-by-piece-map.png'
    },
    {
      displayText:'Evac Map',
      url: gcsFolderUrl + 'piece-by-piece-evac-plan.png',
    },
    {
      displayText: 'Staff List',
      url: gcsFolderUrl + 'StaffFiles.png'
    },
    {
      displayText:'Abi',
      url: gcsFolderUrl + 'abi.png',
    },
    {
      displayText:'Curtis',
      url: gcsFolderUrl + 'curtis.png',
    },
    {
      displayText:'Dewey',
      url: gcsFolderUrl + 'dewey.png',
    },
    {
      displayText:'Kelvin',
      url: gcsFolderUrl + 'kelvin.png',
    },
    {
      displayText:'Luca',
      url: gcsFolderUrl + 'luca.png',
    },
    {
      displayText:'Martina',
      url: gcsFolderUrl + 'martina.png',
    },
    {
      displayText:'Ojo',
      url: gcsFolderUrl + 'ojo.png',
    },
    {
      displayText:'Pin Setter',
      url: gcsFolderUrl + 'pinSetter.png',
    },
  ];

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12} sx={{ display: { xs: 'none', sm: 'flex'} }}>
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
              The PCs are hired to retrieve an item from the Daedalus Robotics Lab, which is in lockdown after a fatality was reported. A number of employees are still in the facility.
            </Typography>
          </Grid>
          <Grid sm={12} sx={{ display: 'block' }}>
            <Typography>
              I made a few resources to supplement the pamplet:
            </Typography>
            <ul key="xx" style={{ listStyleType: 'square'}}>
              <li>a blank map of the facility, which we used on Roll20 with 'Fog of War', revealing the areas as the characters explored the facility</li>
              <li>an "Evacuation Route" map, which the players found posted on the wall in the Employee Lounge</li>
              <li>a list of employees in the facility, provided to the players by the person who hired them</li>
              <li>AI generated images of the NPCs, used in the employee list, and as tokens on Roll20</li>
              <li>A 'Pin Setter' in a pool of android 'blood'. It was used by Luca in self-defense against Curtis.</li>
            </ul>
            <Typography>
              These can be viewed below, or you can download them as a zip file.
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
export default PieceByPiece; 