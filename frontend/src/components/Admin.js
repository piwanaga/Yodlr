/** Admin page component
 * - shows all users
 * - can change user state from 'pending' to 'active' and vice versa
 * - can delete users
 */

import React, { useEffect, useState } from 'react';
import API from '../API';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    header: {
        margin: '40px 0px'
    },
    dataGrid: {
        height: 600
    }
}));

const Admin = () => {
    const classes = useStyles();
    const [users, setUsers] = useState();
    const [userChanged, setUserChanged] = useState(true)

    /**Get list of users on component mount and when something is changed i.e. user is deleted or state is changed */
    useEffect(() => {
        const getUsers = async () => {
            const res = await API.getUsers();
            setUsers(res);
        };
        if (userChanged) {
            getUsers();
            setUserChanged(false)
        };
    }, [userChanged]);

    /**Call API to update user state, trigger effect via setUserChanged */
    const handleToggleState = async id => {
        await API.updateUserState(id);
        setUserChanged(true);
    };

    /**Call API to delete user, trigger effect via setUserChanged */
    const handleDelete = async id => {
        await API.deleteUser(id);
        setUserChanged(true);
    };

    return (
        <Grid container direction='column'>
            <Grid item>
                <Typography component={ Link } to='/'>Back to Home</Typography>
            </Grid>
            <Grid item>
                <Typography align='center' variant='h5' className={classes.header}>Users</Typography>
            </Grid>
            <Grid item className={classes.dataGrid}>
                {users ?
                <TableContainer component={ Paper }>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>Toggle State</TableCell>
                                <TableCell>Delete User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.state}</TableCell>
                                    <TableCell>
                                        {user.state === 'active' ?
                                        <Button variant='outlined' color='secondary' onClick={() => handleToggleState(user.id)}>Deactivate</Button> :
                                        <Button variant='outlined' color='primary' onClick={() => handleToggleState(user.id)}>Set Active</Button>
                                        }
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleDelete(user.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> :
                null
                }
            </Grid>
        </Grid>
    )
};

export default Admin;