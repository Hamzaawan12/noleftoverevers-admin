/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './Result.css'
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  TextField,
  Avatar,
  Typography
} from '@material-ui/core';
import {
  UserX as ProfileUnCompleteIcon,
  UserCheck as ProfileCompleteIcon,
  XCircle as BlockedIcon,
  CheckCircle as UnblockedIcon,
} from 'react-feather';
import UserService from 'src/services/UserService';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  root: {},
  queryField: {
    width: 500
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  mailColor:{
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  formControl: {
    width: 300
  }
}));

function Results({ className, customers, updateUser, ...rest }) {

  const classes = useStyles();
  const [selectedCustomers] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [users, setUsers] = useState(customers);
  const [dropdown, setDropdown] = useState();

  useEffect(() => {
    let list = []

    customers.map(user => {
      if(user?.email){
        list.push({
          id: user._id,
          value: user?.email
        })
      }
      return 0
    })

    setDropdown(list)

  }, [customers])

  const handleFilter = (data) => {

    if(data){

      let list = users

      const selected = list.filter(x => x._id === data.id)

      setUsers(selected)
    }else{
      setUsers(customers)
    }
  }
  
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Divider />

      <Box p={2} minHeight={56} display="flex" alignItems="center">
        <Box flexGrow={1} />
      </Box>

      <PerfectScrollbar>
        <Box minWidth={700}>
          <Box p={2} display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              <Typography variant='h3'>
                Total Vendor: {users.length}
              </Typography>
            </Box>
            <Autocomplete
              className={classes.formControl}
              id="combo-box-demo"
              options={dropdown}
              getOptionLabel={(option) => option.value}
              renderInput={(params) => <TextField variant='outlined' {...params} label="Select Email" />}
              onChange={(event, value) => handleFilter(value)}
            />
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">Username</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Profile Complete</TableCell>
                <TableCell align="center">Phone No</TableCell>
                <TableCell align="center">Business Contact No</TableCell>
                <TableCell align="center">Business Name</TableCell>
                <TableCell align="center">User Blocked</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(customer => {
                const isCustomerSelected = selectedCustomers.includes(
                  customer.id
                );

                return (
                  <TableRow
                    hover
                    key={customer?._id}
                    selected={isCustomerSelected}
                  >
                    <TableCell align="left">
                      <Avatar alt={customer?.name} src={customer?.profilePicture} />
                    </TableCell>
                    <TableCell style={{padding:'1px'}} align="left">{customer?.name}</TableCell>
                    <TableCell style={{padding:'1px'}} align="left" title="mailto"><a href={`mailto:${customer?.email}`} className={classes.mailColor}>{customer?.email}</a></TableCell>
                    <TableCell style={{padding:'1px'}} align="center">{customer?.isProfileSetup ? <ProfileCompleteIcon/> : <ProfileUnCompleteIcon/>}</TableCell>
                    <TableCell style={{padding:'1px'}} align="center">{customer?.ownerContactNumber}</TableCell>
                    <TableCell style={{padding:'1px'}} align="center">{customer?.phoneNumber}</TableCell>
                    <TableCell style={{padding:'1px'}} align="center">{customer?.businessName}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() => {
                          UserService.blockVendor(customer?._id, customer?.isBlocked)
                            .then(res => {
                              updateUser(null)
                              console.log('RES: ', res);
                              enqueueSnackbar(res.message , {
                                variant: 'success'
                              });
                              updateUser(res.data)
                            })
                            .catch(err => {
                              enqueueSnackbar('Unable to update user profile' , {
                                variant: 'error'
                              });
                              console.log('ERR: ', err)
                            });
                        }}
                      >
                        <SvgIcon fontSize="small">
                          {
                            customer?.isBlocked ? <BlockedIcon style={{color: 'red'}}/> : <UnblockedIcon/>
                          }
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card >
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array
};

Results.defaultProps = {
  customers: []
};

export default Results;
