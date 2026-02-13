import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isOpen = true }) {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [showMoreExplore, setShowMoreExplore] = useState(false);

  const mainItems = [
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>, label: 'Home', path: '/' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M10 8v8l6-4-6-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>, label: 'Shorts', path: '/shorts' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4l-6-3.27v6.53L16 16z"/></svg>, label: 'Subscriptions', path: '/subscriptions' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"/></svg>, label: 'Library', path: '/library' },
  ];

  const exploreItems = [
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>, label: 'Shopping', path: '/shopping' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>, label: 'Music', path: '/music' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>, label: 'Movies', path: '/movies' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"/><circle cx="12" cy="12" r="3"/></svg>, label: 'Live', path: '/live' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>, label: 'Gaming', path: '/gaming' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>, label: 'News', path: '/news' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>, label: 'Sports', path: '/sports' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>, label: 'Courses', path: '/courses' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>, label: 'Fashion & Beauty', path: '/fashion' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-9c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/></svg>, label: 'Podcasts', path: '/podcasts' },
  ];

  const youtubeItems = [
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>, label: 'YouTube Premium', path: '/premium' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>, label: 'YouTube Studio', path: '/studio' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/></svg>, label: 'YouTube Music', path: '/music-app' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M21.39 13.19c0-5.08-3.13-6.13-5.89-6.13-2.76 0-5.89 1.05-5.89 6.13 0 .2.01.39.02.58.02.43.06.85.11 1.27.1.8.26 1.56.49 2.28.38 1.2.95 2.27 1.71 3.15.5.58 1.06 1.09 1.67 1.5.11.08.22.15.34.22.44.26.9.47 1.37.63.74.26 1.52.39 2.32.39.8 0 1.58-.13 2.32-.39.47-.16.93-.37 1.37-.63.12-.07.23-.14.34-.22.61-.41 1.17-.92 1.67-1.5.76-.88 1.33-1.95 1.71-3.15.23-.72.39-1.48.49-2.28.05-.42.09-.84.11-1.27.01-.19.02-.38.02-.58zm-9.89 0c0-3.23 1.28-4.13 3.89-4.13s3.89.9 3.89 4.13c0 .08 0 .15-.01.23-.01.28-.03.55-.07.82-.07.53-.18 1.04-.33 1.52-.27.88-.68 1.66-1.24 2.28-.36.4-.77.75-1.22 1.01-.09.05-.18.1-.27.15-.32.15-.65.27-.99.36-.54.14-1.08.21-1.65.21s-1.11-.07-1.65-.21c-.34-.09-.67-.21-.99-.36-.09-.05-.18-.1-.27-.15-.45-.26-.86-.61-1.22-1.01-.56-.62-.97-1.4-1.24-2.28-.15-.48-.26-.99-.33-1.52-.04-.27-.06-.54-.07-.82-.01-.08-.01-.15-.01-.23z"/></svg>, label: 'YouTube Kids', path: '/kids' },
  ];

  const settingsItems = [
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>, label: 'Settings', path: '/settings' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, label: 'Report history', path: '/report' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>, label: 'Help', path: '/help' },
    { icon: <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>, label: 'Send feedback', path: '/feedback' },
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
    <aside style={isOpen ? styles.sidebar : styles.sidebarMini}>
      <div style={styles.section}>
        {mainItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.menuItem,
              ...(location.pathname === item.path ? styles.active : {}),
              flexDirection: isOpen ? 'row' : 'column',
              padding: isOpen ? '10px 24px' : '16px 0',
              fontSize: isOpen ? '14px' : '10px'
            }}
          >
            <span style={{...styles.icon, marginRight: isOpen ? '24px' : '0', marginBottom: isOpen ? '0' : '4px', display: 'flex'}}>{item.icon}</span>
            {isOpen && <span>{item.label}</span>}
            {!isOpen && <span style={{fontSize: '10px'}}>{item.label}</span>}
          </Link>
        ))}
      </div>

      {isOpen && (
        <>
          <div style={styles.divider}></div>
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Explore</div>
            {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 3).map((item) => (
              <Link key={item.path} to={item.path} style={styles.menuItem}>
                <span style={{...styles.icon, marginRight: '24px', display: 'flex'}}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div style={styles.menuItem} onClick={() => setShowMoreExplore(!showMoreExplore)}>
              <span style={{...styles.icon, marginRight: '24px', display: 'flex'}}>
                {showMoreExplore ? 
                  <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg> :
                  <svg height="24" viewBox="0 0 24 24" width="24" fill="#fff"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
                }
              </span>
              <span>{showMoreExplore ? 'Show less' : 'Show more'}</span>
            </div>
          </div>

          <div style={styles.divider}></div>
          <div style={styles.section}>
            <div style={styles.sectionTitle}>More from YouTube</div>
            {youtubeItems.map((item) => (
              <Link key={item.path} to={item.path} style={styles.menuItem}>
                <span style={{...styles.icon, marginRight: '24px', display: 'flex'}}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div style={styles.divider}></div>
          <div style={styles.section}>
            {settingsItems.map((item) => (
              <Link key={item.path} to={item.path} style={styles.menuItem}>
                <span style={{...styles.icon, marginRight: '24px', display: 'flex'}}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div style={styles.divider}></div>
          <div style={styles.footer}>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>About</a>
              <a href="#" style={styles.footerLink}>Press</a>
              <a href="#" style={styles.footerLink}>Copyright</a>
              <a href="#" style={styles.footerLink}>Contact us</a>
              <a href="#" style={styles.footerLink}>Creators</a>
              <a href="#" style={styles.footerLink}>Advertise</a>
              <a href="#" style={styles.footerLink}>Developers</a>
            </div>
            <div style={styles.footerLinks}>
              <a href="#" style={styles.footerLink}>Terms</a>
              <a href="#" style={styles.footerLink}>Privacy</a>
              <a href="#" style={styles.footerLink}>Policy & Safety</a>
              <a href="#" style={styles.footerLink}>How YouTube works</a>
              <a href="#" style={styles.footerLink}>Test new features</a>
            </div>
            <div style={styles.copyright}>© 2026 Google LLC</div>
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
    zIndex: 100,
    transition: 'width 0.2s'
  },
  sidebarMini: {
    position: 'fixed',
    left: 0,
    top: '56px',
    width: '72px',
    height: 'calc(100vh - 56px)',
    background: '#212121',
    overflowY: 'auto',
    paddingTop: '12px',
    zIndex: 100,
    transition: 'width 0.2s'
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
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  active: {
    background: '#303030',
    fontWeight: '500'
  },
  divider: {
    height: '1px',
    background: '#404040',
    margin: '12px 0'
  },
  sectionTitle: {
    padding: '8px 24px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#fff'
  },
  footer: {
    padding: '16px 24px',
    fontSize: '12px',
    color: '#aaa'
  },
  footerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '8px'
  },
  footerLink: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '12px'
  },
  copyright: {
    marginTop: '12px',
    fontSize: '11px',
    color: '#717171'
  }
};

export default Sidebar;
