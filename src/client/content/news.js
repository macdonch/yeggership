import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GetNews } from '../services/newsData';

const News = () => {

  const newsJson = GetNews();

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid xs={12} sx={{borderBottom: 1, my: 1, display: 'flex' }}>
          <Typography variant='h5'>
            News
          </Typography>
        </Grid>
        <Box>
          <Grid container rowSpacing={2} alignItems="top">
            {newsJson.reverse().map(({date, title, text}) => (
                <Grid key={title + 'title'} xs={12}>
                  <Typography variant='h6'>{title}</Typography>
                  <Typography>{text}</Typography>
                  <Typography variant="caption text">{date}</Typography>
                </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
export default News; 