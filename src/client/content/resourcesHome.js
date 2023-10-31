import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ResourcesHome = () => {
  const gcsFolderUrl= 'https://storage.googleapis.com/mothership-375920-media/resources/';
  const setPageViewOnChrome =  gcsFolderUrl + 'setPageViewOnChrome.png';
  const setPageViewOnDocument = gcsFolderUrl + 'setPageViewOnDocument.png';
  const setPageViewOnReader = gcsFolderUrl + 'setPageViewOnReader.png';
  const bookletPrinting = gcsFolderUrl + 'bookletPrinting.png';

  return (
    <Box>
      <Grid container rowSpacing={2} alignItems="top">
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
            <Typography  sx={{ display: 'block' }}>
              This area of the site contains resources that we created for our play sessions, such as:
            </Typography>
              <ul style={{ listStyleType: 'square'}}>
                <li>maps and system descriptions for our campaign setting.</li>
                <li>maps and tokens for Roll20 to supplement published modules</li>
                <li>house rules, including a modified Panic Table</li>
                <li>desciptions of hyperspace and terraforming</li>
              </ul>
            <Typography variant='h4'>
                SPOILER ALERT
            </Typography>
            <Typography>
                Some of the module resources contain spoilers.
            </Typography>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
          <Typography variant='h5'>
            PDF Viewing and Printing Tips
          </Typography>
          <Typography>
            Many Mothership pdf files are intended to be viewed as a two page spread, and printed as booklets. Most browsers and Acrobat Reader
            default to a single page view, and Print settings also usually default to a single page.
          </Typography>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
          <Typography variant='h6'>
              Acrobat Reader
          </Typography>
          <Typography>
            Acrobat Reader allows you select a Two-page view, and has an option "Show cover page", which displays the cover page seperately.
            This is usually what you want.
          </Typography>
          <br />
          <Box 
            component="img"
            sx={{ 
              maxWidth: 0.75,
              objectFit: "contain"
            }}
            src={setPageViewOnReader}
            ></Box>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
          <Typography variant='h6'>
              Chrome
          </Typography>
          <Typography>
            At the time of writing, Chrome does give you the option to set the two page view with a seperate cover.
            You can get around this by using "Print as PDF" to create a coverless copy for viewing.

            To set Chrome for two page viewing, open the pdf file, then use the hamburger menu on the to right, and
            select "Two page view".
          </Typography>
          <br />
          <Box 
            component="img"
            sx={{ 
              maxWidth: 0.75,
              objectFit: "contain"
            }}
            src={setPageViewOnChrome}
            ></Box>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
          <Typography variant='h6'>
              Printing Booklets
          </Typography>
          <Typography>
              If the pdf is a collection of 5.5" x 8.5" pages, select "Booklet" when printing, then check the preview.
              Ensure you are printing on both sides of the paper.
              This should print two pages of the pdf on each 8.5" x 11" sheet, that you can then fold in half to make a booklet.
          </Typography>
          <br />
          <Box 
            component="img"
            sx={{ 
              maxWidth: 0.75,
              objectFit: "contain"
            }}
            src={bookletPrinting}
            ></Box>
        </Grid>
        <Grid xs={8} md={10} sx={{ display: 'block' }}>
          <Typography variant='h6'>
            Creating Initial Views for Booklets
          </Typography>
          <Typography>
              If you are creating a pdf in Acrobat, you can set the default view in the "Document Properties", under the
              "Initial View" tab.
          </Typography>
          <br />
          <Box 
            component="img"
            sx={{ 
              maxWidth: 0.75,
              objectFit: "contain"
            }}
            src={setPageViewOnDocument}
            ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default ResourcesHome; 