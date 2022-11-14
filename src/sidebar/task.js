import * as React from 'react';
import Stack from '@mui/material/Stack';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Task() {
    return (

        <Stack direction="row" spacing={2}>
            <Item>Type of Task</Item>


            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Add</InputLabel>

                <MenuItem value={10}>Study</MenuItem>
                <MenuItem value={20}>Task</MenuItem>
                <MenuItem value={30}>Event</MenuItem>

            </FormControl>
        </Stack>
    );
}