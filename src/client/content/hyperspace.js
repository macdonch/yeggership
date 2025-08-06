import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import DownloadIcon from '@mui/icons-material/Download';

const Hyperspace = () => {
  
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/hyperspace/';
  const downloads = {
    hyperspace: {
      thumbNail: gcsFolderUrl + 'HyperspaceMechanics.png',
      url: gcsFolderUrl + 'HyperspaceMechanics.pdf'
    }
  }
  
  const imageUrls = {
    hyperspace: gcsFolderUrl + 'hyperspace_bw.png',
    spinNetwork: gcsFolderUrl + 'spin-network.jpg',
  }

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12}>
          <Typography variant='h3'>
            HYPERSPACE
          </Typography>
        </Grid>
        <Grid container rowSpacing={1} alignItems="top" columnSpacing={4}>
          <Grid sm={12}>
            <Typography>
                Hyperspace travel refers to the "faster than light" travel made possible by manipulating stable 
                Einstein-Rosen bridges, colloquially known as wormholes, or Jump Points.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: 'block' }}>
            <Typography>
              <br />
                The relationship between Hyperspace and Einsteinian flat space-time is illustrated in the Minkowski 
                space as a larger cone surrounding the future light cone (Figure 1). Hyperspace travel is always 
                faster than conventional travel in Einsteinian space, which means that any hyperspace travel always 
                ends outside of the future light cone.
              
              <br />
                While the future light cone must always be at 45°, it is not yet known what the angle of the Hyperspace 
                Cone is or if it even is a cone. It is possible that the Hyperspace Cone is actually all of the space 
                time outside of the Future and Past light cones. This has some interesting theoretical implications:
            </Typography>
                <ol>
                  <li>
                    It may be possible for hyperspace travelers to go “back in time” to points outside of the past light 
                    cone. Being outside of the past light cones means they cannot have any causal effect on past or future 
                    effects within the light cones.
                  </li>
                  <li>
                    A hyperspace traveler could spend an arbitrary amount of time in hyperspace and return to the spacetime 
                    coordinate they left, as it is within neither the past nor the future light cone.
                  </li>
                </ol>             
              
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'block', sm: 'block'} }}>
            <br />
            <Typography sx={{ fontWeight: 'bold', textAlign: "center" }}>
              Figure 1 - Hyperspace Cone in Minkowski Space
            </Typography>
            <br />
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
              }}
              src={imageUrls.hyperspace}
              ></Box>
          </Grid>
          <Grid sm={12}>
            <Typography>
              <br />
                A hyperspace traveler can re-enter the future light cone by traveling through Einsteinian spacetime or by 
                making a subsequent Jump to a point that lies within their original future light cone but lies outside of 
                their new future light cone. This means that, in theory, a traveler could make a hyperspace Jump then another 
                back to his original future light cone and then watch himself make the first Jump. This has not been achieved 
                in practice.
            </Typography>
            <br />
            <Typography variant='h5'>
              Spin Networks
            </Typography>
            <Typography>
              <br />
                Many (but not all) systems in Einsteinian space contain stable Jump Points connected through a mesh of spin 
                networks (Figure 2). The Quantum Entanglement Core<sup>TM</sup>, in conjunction with calculations made by the Margolis 
                SpinAI<sup>TM</sup>, allows ships to travel through hyperspace safely and consistently when following the precisely mapped 
                out routes through the spin networks.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: 'block' }}>
            <Typography>
              <br />
                The time required to make a transit depends on two factors:
            </Typography>
                <ol>
                  <li>
                    The distance of the route in hyperspace, which is not directly related to the distance in Einsteinian space. 
                    Routes are currently rated 1 through 9, corresponding to the required engine sizes.
                  </li>
                  <li>
                    The frequency with which the route has been traveled. New and infrequently traveled routes have a greater degree 
                    of variability in the transit time. More powerful Jump engines do not transit hyperspace faster than less powerful 
                    engines but are able to propel more mass.
                  </li>
                </ol>             
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'block', sm: 'block'} }}>
            <br />
            <Typography sx={{ fontWeight: 'bold', textAlign: "center" }}>
              Figure 2 - Hyperspace Mapping
            </Typography>
            <br />
            <Box 
              component="img"
              sx={{ 
                maxWidth: 1,
              }}
              src={imageUrls.spinNetwork}
              ></Box>
          </Grid>
          <Grid sm={12}>
            <Typography>
              <br />
                Multiple routes may exist between a pair of systems. It is speculated that traveling a route may occasionally 
                give rise to new, more efficient routes as any 'new' route discovered has always been shorter than the existing 
                mapped route. For example, the original route from the Core to the Faustus Sector was a Jump-4 route, but a 
                Jump-3 route was discovered later, leading to increased interest and development in Faustus.
            </Typography>
          </Grid>
        </Grid>
        <Grid sm={12} sx={{ display: { xs: 'flex', sm: 'flex', gap: '1rem' } }}>
            <Box 
              component="img"
              sx={{ 
                height: 150
              }}
              src={downloads.hyperspace.thumbNail}
              ></Box>
            <Link display="inline" underline="true" target="_blank" rel="noopener" href={downloads.hyperspace.url} sx={{ display: { xs: 'block', sm: 'block'} }}>
              Hyperspace Mechanics{<DownloadIcon />}
            </Link>
          </Grid>
      </Grid>
    </Box>
  );
}
export default Hyperspace;