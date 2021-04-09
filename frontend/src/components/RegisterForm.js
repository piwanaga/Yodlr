/**RegisterForm component to create new user */

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import API from '../API';
import { makeStyles, Grid, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header: {
        margin: '40px 0px'
    },
    form: {
        margin: '40px 0px'
    }
}));

const RegisterForm = () => {
    const classes = useStyles();
    const history = useHistory();

    const INITIAL_STATE = {
        email: '',
        firstName: '',
        lastName: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({...data, [name]: value}));
    };

    /**Call API to create new user and redirect to homepage */
    const handleSubmit = async evt => {
        evt.preventDefault();
        try {
            await API.createUser(formData);
            history.push('/');
        } catch (e) {
            console.error(e);
        };
    };

    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography component={ Link } to='/'>Back to Home</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h5' align='center' className={classes.header}>Register</Typography>
            </Grid>
            <Grid item>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container direction='column' alignItems='center' spacing={3}>
                        <Grid item>
                            <TextField
                                id='email'
                                name='email'
                                label='Email'
                                variant='outlined'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='firstName'
                                name='firstName'
                                label='First Name'
                                variant='outlined'
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id='lastName'
                                name='lastName'
                                label='Last Name'
                                variant='outlined'
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button type='submit' variant='outlined' color='primary'>Register!</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default RegisterForm;