import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GroupsIcon from '@mui/icons-material/Groups';
import GradingIcon from '@mui/icons-material/Grading';
import BuildIcon from '@mui/icons-material/Build';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Link } from "react-router-dom";

/**
 * https://stackoverflow.com/questions/72239170/how-do-i-link-to-another-page-in-my-mui-mini-drawer-sidebar
 */

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",

    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemsList = [
        {
            text: "Home",
            icon: <HomeIcon style={{ fill: "white" }} />,
            to: "/home"
        },
        {
            text: "Conversation",
            icon: <QuestionAnswerIcon style={{ fill: "white" }} />,
            to: "/conversation"
        },
        {
            text: "Services",
            icon: <CallSplitIcon style={{ fill: "white" }} />,
            to: "/services"
        },
        {
            text: "Chat History",
            icon: <HistoryIcon style={{ fill: "white" }} />,
            to: "/chathistory"
        },
        {
            text: "Setting",
            icon: <SettingsIcon style={{ fill: "white" }} />,
            to: "/setting"
        }
    ];

    const itemsList2 = [
        {
            text: "Users",
            icon: <PermIdentityIcon style={{ fill: "white" }} />,
            to: "/users"
        },
        {
            text: "Groups",
            icon: <GroupsIcon style={{ fill: "white" }} />,
            to: "/groups"
        },
        {
            text: "Watchlist",
            icon: <GradingIcon style={{ fill: "white" }} />,
            to: "/watchlist"
        },
        {
            text: "Config",
            icon: <BuildIcon style={{ fill: "white" }} />,
            to: "/config"
        },
        {
            text: "Log Management",
            icon: <FormatListBulletedIcon style={{ fill: "white" }} />,
            to: "/logmanagement"
        },
        {
            text: "Report",
            icon: <ContentPasteIcon style={{ fill: "white" }} />,
            to: "/report"
        }
    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ background: "white" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" })
                        }}
                    >
                        <MenuIcon style={{ fill: "#85CEE9" }} />
                    </IconButton>
                    <Link to="/home">Home</Link>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        style={{ color: "#85CEE9" }}
                    >
                        PlanIt
                    </Typography> */}
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon style={{ fill: "white" }} />
                        ) : (
                            <ChevronLeftIcon style={{ fill: "white" }} />
                        )}
                    </IconButton>
                </DrawerHeader>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph></Typography>
            </Box>
        </Box>
    );
}
