import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const ResourcesHome = () => {

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={8} md={10} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <Typography  sx={{ display: { xs: 'none', sm: 'block'} }}>
                This area of the site contains resources that we created for our play sessions, such as:
                <ul>
                    <li>maps and tokens for Roll20 to supplement published modules</li>
                    <li>maps and system descriptions for our campaign setting.</li>
                </ul>
                Some of the links may contain spoilers.
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ResourcesHome; 