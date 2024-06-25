import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { GetAllDocs, DeleteDoc, getId } from '../../firebase/firebase';
import '../Project List/projectList.css';

const Project = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [filterData, setFilterdata] = useState([]);
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { id, type } = getId();

  const getData = () => {
    GetAllDocs('measurements')
      .then((res) => {
        const findData = res.filter((x) => x.foreignKey === params.id);
        setData([...findData]);
      }).catch((err) => console.log(err));
  };

  const onDelete = (id) => {
    DeleteDoc('measurements', id)
      .then(() => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setShowAlert(true);
        getData();
        setTimeout(() => setShowAlert(false), 3000);
        setModalOpen(false)
      }).catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    let arr = data.filter((x) => {
      if ((x.name.toLowerCase()).includes(e.target.value.toLowerCase())) {
        return x;
      } else if ((x.email.toLowerCase()).includes(e.target.value.toLowerCase())) {
        return x;
      }
    });
    setFilterdata([...arr]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {id ?
        <div className="table-project-container">
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', color: "#06bd37" }}>Project List</h1>
          </div>
          <div style={{ width: '30%', textAlign: 'left', marginTop: '2%' }}>
            {showAlert && (
              <Alert variant="filled" severity="success" onClose={() => setShowAlert(false)}>
                Delete Successfully
              </Alert>
            )}
          </div>
          {type == 'user' ?
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={() => navigate('/measurement-form')} className="action-btn">Add New Measure</button>
              <button onClick={() => navigate('/profile')} className='action-btn'>Profile</button>
            </div>
            : ''
          }
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
                <th>Name</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th></th>
              </tr>
            </thead>
            {filterData.length > 0 ?
              <tbody>
                {filterData.map((project, index) => (
                  <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.streetAddress}</td>
                    <td>{project.streetAddress2}</td>
                    <td>
                      <div style={{ textAlign: 'center' }}>
                        <button className='btn_project' style={{ marginRight: '10px' }} onClick={() => navigate(`/measurement/${project.id}`)}>Detail</button>
                        <button className='btn_delete' onClick={() => setModalOpen(true)}>Delete</button>
                        <Dialog open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                          <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' }}}>
                            Are you sure you want to delete this project?
                          </DialogTitle>

                          <DialogActions>
                            <button onClick={() => onDelete(project.id)} className="action-btn">Yes</button>
                            <button onClick={() => setModalOpen(false)} autoFocus className="action-btn">No</button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              :
              <tbody>
                {data.map((project, index) => (
                  <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.streetAddress}</td>
                    <td>{project.streetAddress2}</td>
                    <td>
                      <div style={{ textAlign: 'center' }}>
                        <button className='btn_project' style={{ marginRight: '10px' }} onClick={() => navigate(`/measurement/${project.id}`)}>Detail</button>
                        <button className='btn_delete' onClick={() => setModalOpen(true)}>Delete</button>
                        <Dialog open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                          <DialogTitle id="alert-dialog-title" className='dialog-header' sx={{ '&.MuiTypography-root.MuiDialogTitle-root': { fontFamily: 'inherit' }}}>
                            Are you sure you want to delete this project?
                          </DialogTitle>

                          <DialogActions>
                            <button onClick={() => onDelete(project.id)} className="action-btn">Yes</button>
                            <button onClick={() => setModalOpen(false)} autoFocus className="action-btn">No</button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            }
          </table>
        </div>
        :
        <div>
          <h1>
            404 Page Not Found!
          </h1>
        </div>
      }
    </>
  );
};

export default Project;
