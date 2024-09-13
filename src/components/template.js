import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const Container = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '10vh',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function CardTemplate({ name, descripthion, temp, feels_like, humidity, icon}) {

  return (
    <>
      {/* <CssBaseline enableColorScheme /> */}
      <Container  >
        <Card variant="outlined">

          <Stack direction={"row-reverse"} spacing={2} sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Box>
              <Typography>{name}</Typography>
              <Typography>{descripthion}</Typography>
            </Box>
            <Box>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=''></img>
            </Box>
          </Stack>

          <Stack direction={"row-reverse"} spacing={2} sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Box>
              <Typography>טמפ'</Typography>
              <Typography>{temp}{'\u00b0'}C</Typography>
            </Box>
            <Box>
              <Typography>מרגיש כמו</Typography>
              <Typography>{feels_like}{'\u00b0'}C</Typography>
            </Box>
            <Box>
              <Typography>לחות</Typography>
              <Typography>{humidity}%</Typography>
            </Box>
          </Stack>

        </Card>
      </Container>
    </>

  );
}