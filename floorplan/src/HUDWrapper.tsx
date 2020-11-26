// import './HUDWrapper.scss'

import React from 'react';
import clsx from 'clsx';
import { Button, createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    playground: {
      display: 'table-row',
      height: '100%',
    }
  }),
);

export interface HUDWrapperProps {
  children?: React.ReactNode;
}

const HUDWrapper = ({ children }: HUDWrapperProps) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
      </div>
      <Divider />
      <List>
        <ListItem id="addRoomButton" button key={'addRoomButton'}>
          <ListItemIcon>{<AddIcon />}</ListItemIcon>
          <ListItemText primary={'Ajouter une pièce'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem id="addOpeningButton" button key={'addOpeningButton'}>
          <ListItemIcon>{<AddIcon />}</ListItemIcon>
          <ListItemText primary={'Ajouter une ouverture'} />
        </ListItem>
        <ListItem className="exportImportButton" button key={'exportImportButton'}>
          <ListItemIcon>{<ImportExportIcon />}</ListItemIcon>
          <ListItemText primary={'Export/Import'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Button 
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor: "#83878f", width: "fit-content", height: "fit-content", cursor: "pointer", borderRadius: "0px 8px 8px 0px", top: 20}} 
        onClick={handleDrawerToggle} 
      >
        <div>
          <div style={{backgroundColor: "white", borderRadius: 3, width: 6, height: 35, display: "inline-block", float: "left"}}></div>
          {open  ? <ChevronLeftIcon style={{color: "white"}} fontSize={'large'} /> : <ChevronRightIcon style={{color: "white"}} fontSize={'large'} />}
        </div>
      </Button>
      <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.playground}>
          {children}
        </div>
      </main>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <SwipeableDrawer
            className={classes.drawer}
            anchor="left"
            variant="persistent"
            open={open}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{backgroundColor: "green"}}
          >
            {drawer}
          </SwipeableDrawer>

            {/* <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
        </Hidden> */}
      </nav>
    </div>
  );
};

export { HUDWrapper };