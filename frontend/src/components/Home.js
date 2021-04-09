/**Homepage component
 * - links to register and admin pages
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Grid } from '@material-ui/core'; 

const useStyles = makeStyles(() => ({
    header: {
        margin: '40px 0px'
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container direction='column' alignItems='center'>
            <Grid item className={classes.header}>
                <Typography variant='h2'>Yodlr Homepage</Typography>
            </Grid>
            <Grid item container direction='row' justify='center' spacing={4}>
                <Grid item>
                    <Typography component={ Link } to='/register'>Register</Typography>
                </Grid>
                <Grid item>
                    <Typography component={ Link } to='admin'>Admin</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Home;