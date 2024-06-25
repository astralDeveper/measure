import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../firebase/firebase';

const ProfilePage = () => {
  const { id, type } = getId();
  const navigate = useNavigate();

  const handleNewMeasure = () => {
    navigate(`/measurement-form`)  
  };
  
  const handleSaveMeasure = () => {
    navigate(`/project/${id}`)  
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    navigate('/login');
  };

  return (
    <div className="profile-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid style={{ textAlign: 'center' }} item>
          <h1 style={{ fontSize: '36px', fontWeight: 700, lineHeight: '56px' }}>Welcome to Measure Boss</h1>
        </Grid>
        <Grid item>
          <button  className="action-btn" onClick={handleNewMeasure}>New Measurement</button>
        </Grid>
        <Grid item>
          <button  className="action-btn" onClick={handleSaveMeasure}>Saved Measurements</button>
        </Grid>
        <Grid item>
          <button  className="action-btn" onClick={handleLogout}>Logout</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
