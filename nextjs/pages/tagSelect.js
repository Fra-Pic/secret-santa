import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Gadgets' },
    { key: 1, label: 'Cosmetics' },
    { key: 2, label: 'XMas' },
    { key: 3, label: 'Electronics' },
    { key: 4, label: 'Old Times' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="preferences"
            name="preferences"
            label="Inserisci le tue preferenze"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {chipData.map((data) => {
            let icon;

            if (data.label === 'React') {
              icon = <TagFacesIcon />;
            }

            return (
                      <ListItem key={data.key}>
                        <Chip
                          icon={icon}
                          label={data.label}
                          onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        />
                    </ListItem>

            );
          })}
          </Paper>
      </Grid>
    </Grid>
  );
}