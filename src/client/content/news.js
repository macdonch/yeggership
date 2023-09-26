import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GetNews } from '../services/newsData';

const News = () => {

  const newsJson = GetNews();

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
          <Typography variant='h5'>
            News
          </Typography>
        </Grid>
        <Box>
          <Grid container rowSpacing={1} alignItems="top">
            {newsJson.reverse().map(({date, title, text}) => (
              <Box key={date + 'box'}>
                <Grid key={title + 'title'} sm={12} sx={{ display: { sm: 'block'} }}>
                  <Typography variant='h6'>{title}</Typography>
                </Grid>
                <Grid key={text + 'text'} sm={12} sx={{ display: { sm: 'block'} }}>
                  <Typography>{text}</Typography>
                </Grid>
                <Grid key={date + 'date'} sm={12} sx={{ display: { sm: 'block'} }}>
                  <Typography variant="caption text">{date}</Typography>
                </Grid>
                <br />
              </Box>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
export default News; 