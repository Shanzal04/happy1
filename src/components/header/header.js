import { React, useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
const HeaderComp = ({ selected }) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);
  const [isResourceDrawerVisible, setResourceDrawerVisibility] = useState(false);
  const drawerHandleMouse = (event) => {
    setDrawerVisibility((current) => !current);
  };
  const resourcedrawerHandleMouse = (event) => {
    setResourceDrawerVisibility((current) => !current);
  };
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const menuHandleMouseClick = (event) => {
    setMenuVisibility((current) => !current);
  };

  const menuHandleMouseLeave = (event) => {
    setMenuVisibility(false);
    setDrawerVisibility(false);
    setResourceDrawerVisibility(false);
  };

  return (
    <>
      <Link style={{ marginLeft: '5%' }} href="/">
        <img id={styles.logo} loading="lazy" src="/home/NJACK logo.svg" alt="NJACK Logo" />
      </Link>
      <section>
        <Link id={selected == 'Home' ? styles.selected : undefined} href="/">
          HOME
        </Link>
        {/* 480 for Home + 4 */}
        {/* Change @media (max-width: __px) accordingly <Link id={selected == 'Resources' ? styles.selected : undefined} href='/resources'>
					RESOURCES
				</Link> */}
        {/* 400 for Home + 3*/}
        <div
          onMouseEnter={drawerHandleMouse}
          onMouseLeave={drawerHandleMouse}
          style={{ display: 'flex' }}
        >
          <Link id={selected == 'Departments' ? styles.selected : undefined} href="#">
            DEPARTMENTS
          </Link>
          {isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
        </div>
        <div
          onMouseEnter={resourcedrawerHandleMouse}
          onMouseLeave={resourcedrawerHandleMouse}
          style={{ display: 'flex' }}
        >
          <Link id={selected == 'Resources' ? styles.selected : undefined} href="#">
            RESOURCES
          </Link>
          {isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
        </div>
        <Link id={selected == 'Gallery' ? styles.selected : undefined} href="/gallery">
          GALLERY
        </Link>
        <Link id={selected == 'Contact' ? styles.selected : undefined} href="/contact-us">
          CONTACT
        </Link>
      </section>
      <div id={styles.menuButton} onMouseLeave={menuHandleMouseLeave}>
        <img loading="lazy" src="/home/MenuIcon.png" alt="Menu" onClick={menuHandleMouseClick} />
        {isMenuVisible && (
          <MenuDrawer
            selected={selected}
            isDrawerVisible={isDrawerVisible}
            drawerHandleMouse={drawerHandleMouse}
            resourcedrawerHandleMouse={resourcedrawerHandleMouse}
            isResourceDrawerVisible={isResourceDrawerVisible}
          />
        )}
      </div>
      {/* {isMenuVisible && <MenuDrawer selected={selected} vertical={true} />} */}
    </>
  );
};

const MenuDrawer = ({
  selected,
  isDrawerVisible,
  drawerHandleMouse,
  resourcedrawerHandleMouse,
  isResourceDrawerVisible
}) => {
  return (
    <section id={styles.menuDrawerVisible}>
      <Link id={selected == 'Home' ? styles.selected : undefined} href="/">
        HOME
      </Link>
      {/* 480 for Home + 4 */}
      {/* Change @media (max-width: __px) accordingly <Link id={selected == 'Resources' ? styles.selected : undefined} href='/resources'>
					RESOURCES
				</Link> */}
      {/* 400 for Home + 3*/}
      <div
        onMouseEnter={drawerHandleMouse}
        onMouseLeave={drawerHandleMouse}
        style={{ display: 'flex' }}
      >
        <Link id={selected == 'Departments' ? styles.selected : undefined} href="#">
          DEPARTMENTS
        </Link>
        {isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
      </div>
      <div
        onMouseEnter={resourcedrawerHandleMouse}
        onMouseLeave={resourcedrawerHandleMouse}
        style={{ display: 'flex' }}
      >
        <Link id={selected == 'Resources' ? styles.selected : undefined} href="#">
          RESOURCES
        </Link>
        {isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
      </div>
      <Link id={selected == 'Gallery' ? styles.selected : undefined} href="/gallery">
        GALLERY
      </Link>
      <Link id={selected == 'Contact' ? styles.selected : undefined} href="/contact-us">
        CONTACT
      </Link>
    </section>
  );
};

const DeptDrawer = ({ isVisible }) => {
  return (
    <div className={`${styles.drawer} ${isVisible ? styles.isVisible : ''}`}>
      <Link href="/departments/cp">Competitive Programming</Link>
      <Link href="/departments/devos">Dev & OS</Link>
      <Link href="/departments/ml">Machine Learning</Link>
      <Link href="/departments/cybersec">Cyber Security</Link>
    </div>
  );
};
const ResourceDrawer = ({ isVisible }) => {
  return (
    <div className={`${styles.resourcedrawer} ${isVisible ? styles.isVisible : ''}`}>
      <Link href="/resources/cp">Competitive Programming Resources</Link>
      <Link href="/resources/dev-os">Dev & OS Resources</Link>
      <Link href="/resources/ml">Machine Learning Resources</Link>
      <Link href="/resources/cyber-security">Cyber Security Resources</Link>
    </div>
  );
};

const Header = ({ selected }) => {
  return (
    <>
      <header className={styles.header}>
        <HeaderComp selected={selected} />
      </header>
      <header className={styles.header} id={styles.copy}>
        <HeaderComp selected={selected} />
      </header>
    </>
  );
};

export default Header;
