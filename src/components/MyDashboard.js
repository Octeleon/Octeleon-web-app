import React from 'react'
import { AppBar, Avatar } from 'material-ui';
import MyVis from './MyVis'
import SimpleMediaCard from './SimpleMediaCard'

const MyDashboard = () => {
return (
    <div style={{marginTop:10}}>
          {/* <MyVis /> */}
          <SimpleMediaCard />
    </div>
);
}

export default MyDashboard