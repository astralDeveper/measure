import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import { GetAllDocs, db } from '../../firebase/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import '../User List/userList.css';

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [createAdminModal, setCreateAdminModal] = useState(false);

  const [filterData, setFilterdata] = useState([])
  const navigate = useNavigate();

  const onProject = (id) => { navigate(`/project/${id}`) }

  const [showAlert, setShowAlert] = useState(false);
  const [dynamicData, setDynamicData] = useState([]);

  const getData = () => {
    GetAllDocs('users')
      .then((res) => {
        setDynamicData([...res])
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const openDeleteUserModal = (id) => {
    setDeleteUserModal(true)
    setSelectedUser(id)
  }

  const closeDeleteUserModal = () => {
    setDeleteUserModal(false)
    setSelectedUser(null)
  }

  const openCreateAdminModal = (id) => {
    setCreateAdminModal(true)
    setSelectedUser(id)
  }

  const closeCreateAdminModal = () => {
    setCreateAdminModal(false)
    setSelectedUser(null)
  }

  const deleteSelectedUser = () => {
    deleteDoc(doc(db, 'users', selectedUser))
      .then(() => {
        setShowAlert(true);
        getData();
        setTimeout(() => setShowAlert(false), 3000);
        setSelectedUser(null)
        setDeleteUserModal(false)
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const makeAdmin = async () => {
    await updateDoc(doc(db, "users", selectedUser), {
      type: 'admin'
    });

    getData();
    setSelectedUser(null)
    setCreateAdminModal(false)
  };

  const handleSearch = (e) => {
    let arr = dynamicData.filter((x) => {
      if ((x.email.toLowerCase()).includes(e.target.value.toLowerCase())) {
        return x
      } else if ((x.phone.toLowerCase()).includes(e.target.value.toLowerCase())) {
        return x
      }
    })

    setFilterdata([...arr]);
  }

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    navigate('/login');
  };

  if (!dynamicData) return null;

  return (
    <div className="table-container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: '3.5rem', color: "#06bd37" }}>All Users</h1>
      </div>
      <div style={{ width: "30%", textAlign: "left", marginTop: '2%' }}>
        {showAlert && (
          <Alert variant="filled" severity="success" onClose={() => setShowAlert(false)}>
            Delete Successfully
          </Alert>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: "flex-end", gap: '10px' }}>
        {/* <button className='action-btn' onClick={() => navigate('/add-admin')} >Add Admin</button> */}
        <button className='action-btn' onClick={handleLogout} >Logout</button>
      </div>
      <div className='searchBar'>
        <FormControl sx={{
          width: "100%",
          '& .MuiInputBase-input.MuiInput-input, & .MuiFormLabel-root.MuiInputLabel-root': {
            fontFamily: '"Outfit", sans-serif',
          },
          '& .MuiFormLabel-root.MuiInputLabel-root': {
            color: '#38b038'
          }
        }}>
          <InputLabel htmlFor="search">Search</InputLabel>
          <Input
            color="success"
            id="search"
            onChange={handleSearch}
            name="search"
            label="Search"
            variant="standard"
          />
        </FormControl>
      </div>

      <table className="dynamic-table">
        <thead>
          <tr>
            <th>Email Address</th>
            <th>Type</th>
            <th>Phone No.</th>
          </tr>
        </thead>
        {filterData.length > 0 ?
          <tbody>
            {filterData.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                {user.type == 'admin' ?
                  <td style={{ backgroundColor: "#06bd37", textAlign: 'center', color: 'white' }}>{user.type}</td>
                  :
                  <td style={{ textAlign: 'center' }}>{user.type}</td>
                }
                <td style={{ display: 'flex', justifyContent: 'space-between' }}>{user.phone}
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    {user.type !== 'admin' &&
                      <button className='btn_project' onClick={() => onProject(user.id)}>Project</button>
                    }
                    {(user.id !== localStorage.getItem('id')) &&
                      <>
                        {user.type !== 'admin' &&
                          <button className='btn_project' onClick={() => openCreateAdminModal(user.id)}>Make admin</button>
                        }
                        <button className='btn_delete' onClick={() => openDeleteUserModal(user.id)}>Delete</button>
                      </>
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          :
          <tbody>
            {dynamicData.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                {user.type == 'admin' ?
                  <td style={{ backgroundColor: "#06bd37", textAlign: 'center', color: 'white' }}>{user.type}</td>
                  :
                  <td style={{ textAlign: 'center' }}>{user.type}</td>
                }
                <td style={{ display: 'flex', justifyContent: 'space-between' }}>{user.phone}
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                    {
                      user.type !== 'admin' &&
                      <button className='btn_project' onClick={() => onProject(user.id)}>Project</button>
                    }
                    {(user.id !== localStorage.getItem('id')) &&
                      <>
                        {user.type !== 'admin' &&
                          <button className='btn_project' onClick={() => openCreateAdminModal(user.id)}>Make admin</button>
                        }
                        <button className='btn_delete' onClick={() => openDeleteUserModal(user.id)}>Delete</button>
                      </>
                    }
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        }
      </table>
      <Dialog open={deleteUserModal} onClose={closeDeleteUserModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' } }}>
          Are you sure you want to delete this user?
        </DialogTitle>

        <DialogActions>
          <button onClick={deleteSelectedUser} className="action-btn">Yes</button>
          <button onClick={closeDeleteUserModal} autoFocus className="action-btn">No</button>
        </DialogActions>
      </Dialog>

      <Dialog open={createAdminModal} onClose={closeCreateAdminModal} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' } }}>
          Are you sure you want to make this user admin?
        </DialogTitle>

        <DialogActions>
          <button onClick={makeAdmin} className="action-btn">Yes</button>
          <button onClick={closeCreateAdminModal} autoFocus className="action-btn">No</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserList;
