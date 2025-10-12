import React from 'react';

import NavigationItems from '../navigationItems/navigationitems';
import classes from './sideDrawer.module.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, closed }) => {
    const attachedClasses = open 
        ? [classes.side__drawer, classes.open]
        : [classes.side__drawer, classes.close];
    
    return (
        <Auxiliary>
            <Backdrop show={open} clicked={closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;