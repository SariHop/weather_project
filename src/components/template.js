import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: theme.spacing(2.5),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '350px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));


export default function CardTemplate({ name, descripthion, temp, feels_like, humidity, icon}) {

  return (
    <>
        <Card variant="outlined">

          <Stack direction={"row-reverse"} spacing={2} sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Box>
              <Typography variant="h4" >{name}</Typography>
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
              <Typography gutterBottom >טמפ' נמדדת</Typography>
              <Typography variant="h5">{temp.toFixed()}{'\u00b0'}C</Typography>
            </Box>
            <Box>
              <Typography gutterBottom> טמפ' מורגשת</Typography>
              <Typography variant="h5">{feels_like.toFixed()}{'\u00b0'}C</Typography>
            </Box>
            <Box>
              <Typography gutterBottom>לחות</Typography>
              <Typography variant="h5">{humidity}%</Typography>
            </Box>
          </Stack>

        </Card>
    </>

  );
}