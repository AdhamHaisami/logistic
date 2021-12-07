import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as HomeLogo } from '../assets/home.svg';
import { ReactComponent as Settings } from '../assets/settings.svg';
import { ReactComponent as Exit } from '../assets/exit.svg';
import { ReactComponent as Driver } from '../assets/driver.svg';
import { ReactComponent as Maps } from '../assets/maps.svg';
import { ReactComponent as ProfileLogo } from '../assets/profile.svg';
import { ReactComponent as Shipments } from '../assets/shipments.svg';

const SideNav: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70px',
        height: '100vh',
        backgroundColor: '#101357',
        position: 'sticky',
        top: 0

      }}
    >
      <Logo style={{ position: 'absolute' , top: 32 }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '50%'
        }}
      >
        <Link to='/'>
          <HomeLogo />
        </Link>
        <Link to='/shipments'>
          <Shipments />
        </Link>
        <Link to='/drivers'>
          <Driver />
        </Link>
        <Link to='/maps'>
          <Maps />
        </Link>
        <Link to='/settings'>
          <Settings />
        </Link>
        <Link to='/profile'>
          <ProfileLogo />
        </Link>
        <Exit />
      </div>
    </div>
  );
};

export default SideNav;
