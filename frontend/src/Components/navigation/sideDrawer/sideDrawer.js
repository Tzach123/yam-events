import React from 'react';

import NavigationItems from '../navigationItems/navigationitems';
import classes from './sideDrawer.module.css';
import Backdrop from '../../UI/backdrop/backdrop';
import Auxilliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.side__drawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.side__drawer, classes.open];
    }
    return (
        <Auxilliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logo}>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilliary>
    );
};

export default sideDrawer;