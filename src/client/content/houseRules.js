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
import { GetTalents } from '../services/characterGeneratorData';

const HouseRules = () => {
  const gcsFolderUrl = 'https://storage.googleapis.com/mothership-375920-media/resources/houserules/';
  const downloads = {
    panicTable: {
      thumbNail: gcsFolderUrl + 'panicTable.png',
      url: gcsFolderUrl + 'panicTable.pdf'
    },
    talentsTable: {
      thumbNail: gcsFolderUrl + 'talentsTable.png',
      url: gcsFolderUrl + 'talentsTable.pdf'
    }
  }

  const panic = [
    {
      d20: 1,
      panicEffect: "LASER FOCUS. [+] on all rolls for the next 2d10 minutes."
    },
    {
      d20: 2,
      panicEffect: 'ZEN. Remove 2 stress'
    },
    {
      d20: 3,
      panicEffect: 'UNEASY. Gain 1 Stress.'
    },
    {
      d20: 4,
      panicEffect: 'ANXIOUS. Gain 1 Stress.'
    },
    {
      d20: 5,
      panicEffect: 'FRETFUL. Gain 1 Stress.'
    },
    {
      d20: 6,
      panicEffect: 'JUMPY. Gain 1 Stress. All Nearby crewmembers gain 2 stress.'
    },
    {
      d20: 7,
      panicEffect: 'OVERWHELMED. All actions at [-] for 1d10 minutes. Permanently raise your Minimum Stress by 1.'
    },
    {
      d20: 8,
      panicEffect: 'PHOBIA. Gain a new Condition: When encountering this phobia make a Fear[-] Save or gain 1d5 stress.'
    },
    {
      d20: 9,
      panicEffect: 'DEFLATED. Gain a new Condition. Whenever a nearby crewmember fails a Save, gain 1 stress.'
    },
    {
      d20: 10,
      panicEffect: "LOSS OF CONFIDENCE. Gain a new Condition. Choose one of your skills and lose that skill's bonus."
    },
    {
      d20: 11,
      panicEffect: 'DOOMED. Gain a new Condition.You feel cursed and unlucky, All Critical Successes are Critical Failures instead.'
    },
    {
      d20: 12,
      panicEffect: 'DEATH WISH. For the next 24 hours, whenever you encounter a stranger or a known enemy, you must \
                    make a Sanity Save or immediately attack them.'
    },
    {
      d20: 13,
      panicEffect: 'PARANOID. For the next week, whenever someone enters your presence (even if they only left for \
                    a short period of time), make a Fear Save.'
    },
    {
      d20: 14,
      panicEffect: 'RAGE. Immediately attack the closest crew member until you inflict at least 2d10 DMG or 1 Wound. \
                    If there is no crewmember Nearby, you attack your surrounding environment.'
    },
    {
      d20: 15,
      panicEffect: 'SPIRALING. Gain a new Condition. You make Panic Checks with Disadvantage.'
    },
    {
      d20: 16,
      panicEffect: 'DISCRETION. Gain a new Condition. You must make a Fear Save to engage in a course of \
                    action likely to lead to combat.'
    },
    {
      d20: 17,
      panicEffect: 'AWARENESS OF MORTALITY. Gain a new Condition. You must make a Fear Save when you take \
                    any damage in combat, or flee.'
    },
    {
      d20: 18,
      panicEffect: 'COMPOUNDING PROBLEMS. Roll twice on this table. Permanently raise your Minimum Stress by 1.'
    },
    {
      d20: 19,
      panicEffect: 'HEART ATTACK/SHORT CIRCUIT (ANDROIDS). Permanently lose 1 Wound. Gain [-] on all rolls for \
                    1d10 hours. Permanently raise your Minimum Stress by 1.'
    },
    {
      d20: 20,
      panicEffect: 'COLLAPSE. You no longer control this character in this adventure.'
    }
  ]

  const talents = () => {
    // get talents and sort by type
    console.log('hi');
    const arrTalents = [];
    const arrGenericTalents = [];
    let genericDone = false;
    ['android', 'marine', 'scientist', 'teamster'].forEach(charClass => {
      GetTalents(charClass, true).forEach(talent => {
        if (talent.type !== 'generic') {
          arrTalents.push(talent);
        } else {
          if (!genericDone) {
            arrGenericTalents.push(
              {
                name: talent.name,
                description: talent.description,
                type: 'any'
              }
            );
          }
        }
      });
      genericDone = true;
    });
    console.log(arrGenericTalents.concat(arrTalents))
    return arrGenericTalents.concat(arrTalents);
  }

  return (
    <Box>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid sm={12}>
          <Typography variant='h3'>
            HOUSE RULES
          </Typography>
        </Grid>
        <Grid sm={12}>
          <br />
          <Typography>
              We have a few house rules we play with. Some are from the Warden's Operation Manual, 
              but we also have a few of own.
          </Typography>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} alignItems="top">
        <Grid container rowSpacing={1} alignItems="top" columnSpacing={4}>
          <Grid sm={12}>
            <Typography variant='h4'>
              Panic Table (Revised)
            </Typography>
            <br />
            <Typography>
                We have removed 'COWARD', 'NIGHTMARES' and 'CATATONIC' from the table, made the first
                few entries a bit more innocuous, and reordered some others. The Mothership PSG v1.1 
                made some modifications to the Panic Table that we have not considered yet for this table.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>D20</TableCell>
                    <TableCell>PANIC EFFECT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {panic.map(({d20, panicEffect}) => (
                    <TableRow key={d20}>
                      <TableCell style={{ verticalAlign: 'top' }}>
                        {d20}
                      </TableCell>
                      <TableCell>
                        {panicEffect}
                      </TableCell>
                    </TableRow>
                  ))}                
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Box 
              component="img"
              sx={{ 
                height: 150
              }}
              src={downloads.panicTable.thumbNail}
              ></Box>
            <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloads.panicTable.url} sx={{ display: { xs: 'none', sm: 'block'} }}>
              Panic Table {<DownloadIcon />}
            </Link>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} alignItems="top" columnSpacing={4}>
          <Grid sm={12}>
            <Typography variant='h4'>
              Talents
            </Typography>
            <br />
            <Typography>
                We give each PC a talent that can be used once per session (unless otherwise noted). 
                Players choose from a random list of three talents during character creation. 
                Some talents are specific to a character class.
            </Typography>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'flex'} }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>TALENT</TableCell>
                    <TableCell>DESCRIPTION</TableCell>
                    <TableCell>CLASS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {talents().map(({name, description, type}) => (
                    <TableRow key={name}>
                      <TableCell style={{ verticalAlign: 'top' }}>
                        {name}
                      </TableCell>
                      <TableCell>
                        {description}
                      </TableCell>
                      <TableCell>
                        {type}
                      </TableCell>
                    </TableRow>
                  ))}                
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid sm={12} md={6} sx={{ display: { xs: 'none', sm: 'flex', gap: '1rem' } }}>
            <Box 
              component="img"
              sx={{ 
                height: 150
              }}
              src={downloads.talentsTable.thumbNail}
              ></Box>
            <Link display="inline" underline="none" target="_blank" rel="noopener" href={downloads.talentsTable.url} sx={{ display: { xs: 'none', sm: 'block'} }}>
              Talents Table {<DownloadIcon />}
            </Link>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}
export default HouseRules;