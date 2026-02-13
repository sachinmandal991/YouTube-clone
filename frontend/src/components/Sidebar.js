import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const token = localStorage.getItem('token');

  const menuItems = [
    { icon: '🏠', label: 'Home', path: '/' },
    { icon: '📱', label: 'Shorts', path: '/shorts' },
    { icon: '📺', label: 'Subscriptions', path: '/subscriptions' },
  ];

  const userItems = token ? [
    { icon: '👤', label: 'You', path: '/you', divider: true },
    { icon: '📢', label: 'Your channel', path: '/channel' },
    { icon: '🕐', label: 'History', path: '/history' },
    { icon: '📋', label: 'Playlists', path: '/playlists' },
    { icon: '🎬', label: 'Your videos', path: '/your-videos' },
    { icon: '⏰', label: 'Watch Later', path: '/watch-later' },
    { icon: '👍', label: 'Liked videos', path: '/liked' },
    { icon: '✂️', label: 'Your clips', path: '/clips' },
  ] : [];

  return (
    <aside style={styles.sidebar}>
      <div style={styles.section}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.menuItem,
              ...(location.pathname === item.path ? styles.active : {})
            }}
          >
            <span style={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {token && (
        <>
          <div style={styles.divider}></div>
          <div style={styles.section}>
            {userItems.map((item) => (
              <React.Fragment key={item.path}>
                {item.divider && <div style={styles.divider}></div>}
                <Link
                  to={item.path}
                  style={{
                    ...styles.menuItem,
                    ...(location.pathname === item.path ? styles.active : {})
                  }}
                >
                  <span style={styles.icon}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </aside>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    left: 0,
    top: '56px',
    width: '240px',
    height: 'calc(100vh - 56px)',
    background: '#212121',
    overflowY: 'auto',
    paddingTop: '12px',
    zIndex: 100
  },
  section: {
    paddingBottom: '8px'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 24px',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  icon: {
    marginRight: '24px',
    fontSize: '20px'
  },
  active: {
    background: '#303030',
    fontWeight: '500'
  },
  divider: {
    height: '1px',
    background: '#404040',
    margin: '12px 0'
  }
};

export default Sidebar;
