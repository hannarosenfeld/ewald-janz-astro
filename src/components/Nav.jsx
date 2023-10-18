import { useState } from 'react';

export default function Nav() {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  const dropDownStyle = {
    position: 'relative',
    fontSize: '2.5rem',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    marginLeft: '-1em',
  };

  let dropDownItemStyle = {
    position: 'absolute',
    listStyle: 'none',
    zIndex: 1,
    fontSize: '1.4rem',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    maxHeight: isSubMenuVisible ? '100vh' : '0',
    transition: 'max-height 0.5s ease-in-out', // Slowly unfold the submenu
  };

  // Add a hover animation for "WORKS"
  const dropDownItemHoverStyle = {
    maxHeight: isSubMenuVisible ? '100vh' : '0',
    transition: 'max-height 0.5s ease-in-out', // Slowly unfold the submenu
  };

  // Apply the hover animation style when hovering
  if (isSubMenuVisible) {
    dropDownItemStyle = { ...dropDownItemStyle, ...dropDownItemHoverStyle };
  }

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', alignContent: 'center', margin: '5em auto', justifyContent: "center" }}>
      <ul style={{ margin: '0 auto', position: 'relative', display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <li
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={{ marginLeft: '-1em', cursor: 'pointer', position: 'relative', fontSize: '2.5rem', marginBottom: isSubMenuVisible ? '9rem' : '0' }}
        >
          <a href="/works">WORKS</a>
          {isSubMenuVisible && (
            <ul
              style={dropDownItemStyle}
            >
              <li>Paintings</li>
              <li>Drawings</li>
              <li>Collages</li>
              <li>Object</li>
            </ul>
          )}
        </li>
        <li
          style={dropDownStyle}
        >
            <a href="/text">TEXT</a>
        </li>
        <li
          style={dropDownStyle}
        >
            <a href="/exhibitions">EXHIBITIONS</a>
        </li>
        <li
          style={dropDownStyle}
        >
            <a href="/cv">CV</a>
        </li>
        <li
          style={dropDownStyle}
        >CONTACT</li>
      </ul>
    </div>
  );
}
