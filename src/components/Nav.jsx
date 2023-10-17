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
        marginLeft: '-1em'
    }

    const dropDownItemStyle = {
        position: 'absolute',
        listStyle: 'none',
        zIndex: 1,
        fontSize: "1.4rem",
        top: '100%', // Place the submenu items below the parent item
        left: '50%', // Horizontally center the submenu
        transform: 'translate(-50%)', // Center the submenu items within the red border box
        display: 'flex',
        flexDirection: 'column',
        textAlign: "center",
    }


  return (
    <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', margin: '5em auto'}}>
      <ul style={{ margin: '0 auto', position: 'relative', display: 'flex', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <li
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={{marginLeft: '-1em', cursor: 'pointer', position: 'relative', fontSize: '2.5rem', marginBottom: isSubMenuVisible ? '9rem' : '0',}}

        >
          WORKS
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
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={dropDownStyle}
        >TEXT</li>
        <li
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={dropDownStyle}
        >CV</li>
        <li
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={dropDownStyle}        
        >CONTACT</li>
        <li
          onMouseEnter={showSubMenu}
          onMouseLeave={hideSubMenu}
          style={dropDownStyle}        
        >EXHIBITIONS</li>
      </ul>
    </div>
  );
}
