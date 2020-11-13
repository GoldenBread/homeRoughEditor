// import './HUDWrapper.scss'

import React from 'react';
import { Button, createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      display: 'table',
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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem id="addRoomButton" button key={'Export/Import'}>
          <ListItemIcon>{<AddIcon />}</ListItemIcon>
          <ListItemText primary={'Ajouter une pièce'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem id="addOpeningButton" button key={'Export/Import'}>
          <ListItemIcon>{<AddIcon />}</ListItemIcon>
          <ListItemText primary={'Ajouter une ouverture'} />
        </ListItem>
        <ListItem className="exportImportButton" button key={'Export/Import'}>
          <ListItemIcon>{<ImportExportIcon />}</ListItemIcon>
          <ListItemText primary={'Export/Import'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FloorPlan
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <SwipeableDrawer
            anchor="left"
            open={mobileOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
            <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.playground}>
          {children}
        </div>
      </main>
    </div>
  );
};

export { HUDWrapper };