import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Rutger = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/characters/rutger/';
  const characterImage = gcsFolderUrl + 'rutger.png'

  return (
    <Box>
        <Grid container rowSpacing={1} alignItems="top">
          <Grid sm={12} sx={{ display: 'flex' }}>
            <Typography variant='h2'>
              RUTGER
            </Typography>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={4} alignItems="top">
          <Grid sm={12} md={6} sx={{ display: 'block' }}>
            <Typography>
              Rutger is an uplifted chimpanzee that communcites with his peers via a text-to-speech device. 
              He wears a patch that reads "Not a Monkey", and has a hot-key at the ready with that phrase.
            </Typography>
            <br />
            <Typography>
              Rutger survived <i>Vita Nova</i> and <i>Black Pyramid</i>. He is now a Teamster on the USCSS Kestrel.
            </Typography>
            <br />
            <Typography>
              'Rutger' was created as an NPC by Charles Allen, but became a replacement PC played by Jonathan Schell. 
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: 'block', textAlign: "center" }}>
            <Typography>"Rutger" by Charles Allen</Typography>
            <Box 
              component="img"
              sx={{ 
                height: 300,
              }}
              src={characterImage}
              ></Box>
          </Grid>
        </Grid>
      </Box>
  );
}
export default Rutger; 