import React, { useContext } from "react";
//GENERAL
import { TextField, Grid, Select, MenuItem } from "@material-ui/core";
import { isWidthDown } from "@material-ui/core/withWidth";
//CONTEXT
import { UserContext } from "./UserContext";
import { useState
 } from "react";
export default props => {
  const [state] = useContext(UserContext);
  const { user, errors } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
    user.event_selected = event.target.value;
  };
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
    // Add more events as needed
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your team_name here'
          name='team_name'
          label='team_name'
          value={user.team_name}
          variant='outlined'
          InputLabelProps={{
            shrink: true
          }}
          required
          inputProps={{
            minLength: 3,
            maxLength: 20
          }}
          error={!!errors["team_name"]}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your email here'
          name='email'
          label='Email'
          value={user.email}
          type='email'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["email"]}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder='Type your phone number here'
          name='phone'
          label='Phone'
          value={user.phone}
          type='number'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["number"]}
          required
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <Select
          value={user.event_selected}
          onChange={handleEventChange}
          variant="outlined"
          margin="normal"
          fullWidth
          required
          displayEmpty 
        >
          <MenuItem value="" disabled>Select an event</MenuItem>
          {events.map((event) => (
            <MenuItem key={event.id} value={event.id}>
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      {/* <Grid item xs={12}>
        <TextField
          type='date'
          name='birthdate'
          id='birthdate'
          label='Birthdate'
          defaultValue={user.birthdate}
          helperText='You need to be at least 18 years old'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            min: "1920-01-01",
            max: dateLimit.toISOString().slice(0, 10)
          }}
          error={!!errors["birthdate"]}
          required
          fullWidth={isWidthDown("sm")}
        />
      </Grid> */}

      {/* <Grid item xs={12} lg={6}>
        <TextField
          placeholder='Type your password here'
          name='password'
          label='Password'
          value={user.password}
          type='password'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          required
          error={!!errors["password"]}
          inputProps={{
            minLength: 6,
            maxLength: 20
          }}
          fullWidth
        />
      </Grid> */}
      {/* <Grid item xs={12} lg={6}>
        <TextField
          placeholder='Re-type your password here'
          label='Password'
          name='confirmPassword'
          value={user.confirmPassword}
          type='password'
          variant='outlined'
          margin='normal'
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors["confirmPassword"]}
          inputProps={{
            minLength: 6,
            maxLength: 20
          }}
          required
          fullWidth
        />
      </Grid> */}
    </Grid>
  );
};
