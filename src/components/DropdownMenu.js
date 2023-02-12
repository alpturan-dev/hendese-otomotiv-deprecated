import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import { Box } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';

export default function DropdownMenu() {

    const { categories } = useContext(SparePartContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box
                sx={{
                    paddingX: "2px",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "black",
                    borderBottom: "0 solid #ed3137",
                    transition: "border .2s ease-in-out",
                    '&:hover': {
                        color: "primary.main",
                        borderWidth: "4px"
                    }
                }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Yedek Parça
                <ArrowDropDownIcon />
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem sx={{ background: "#ddd" }} onClick={handleClose}>Tüm Yedek Parçalar</MenuItem>
                {categories.map((category, key) => (
                    <MenuItem key={key} onClick={handleClose}>{category}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}

// import * as React from 'react';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Typography } from '@mui/material';
// import { useContext } from 'react';
// import SparePartContext from '../context/SparePartContext';
// export default function MenuListComposition() {

//     const { categories } = useContext(SparePartContext);

//     const [open, setOpen] = React.useState(false);
//     const anchorRef = React.useRef(null);

//     const handleToggle = () => {
//         setOpen((prevOpen) => !prevOpen);
//     };

//     const handleClose = (event) => {
//         if (anchorRef.current && anchorRef.current.contains(event.target)) {
//             return;
//         }

//         setOpen(false);
//     };

//     function handleListKeyDown(event) {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             setOpen(false);
//         } else if (event.key === 'Escape') {
//             setOpen(false);
//         }
//     }

//     // return focus to the button when we transitioned from !open -> open
//     const prevOpen = React.useRef(open);
//     React.useEffect(() => {
//         if (prevOpen.current === true && open === false) {
//             anchorRef.current.focus();
//         }

//         prevOpen.current = open;
//     }, [open]);

//     return (
//         <Stack direction="row" spacing={2}>
//             <div>
//                 <Typography
//                     href="#" sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         textDecoration: "none",
//                         color: "black",
//                         fontWeight: "bold",
//                         fontSize: "1.1rem",
//                         transition: "0.1s",
//                         '&:hover': {
//                             color: "primary.main",
//                             borderBottom: "2px solid #ed3137",
//                         }
//                     }}
//                     ref={anchorRef}
//                     id="composition-button"
//                     aria-controls={open ? 'composition-menu' : undefined}
//                     aria-expanded={open ? 'true' : undefined}
//                     aria-haspopup="true"
//                     onClick={handleToggle}
//                 >
//                     Yedek Parçalar
//                     <ArrowDropDownIcon />

//                 </Typography>
//                 <Popper
//                     open={open}
//                     anchorEl={anchorRef.current}
//                     role={undefined}
//                     placement="bottom-start"
//                     transition
//                     disablePortal
//                 >
//                     {({ TransitionProps, placement }) => (
//                         <Grow
//                             {...TransitionProps}
//                             style={{
//                                 transformOrigin:
//                                     placement === 'bottom-start' ? 'left top' : 'left bottom',
//                             }}
//                         >
//                             <Paper>
//                                 <ClickAwayListener onClickAway={handleClose}>
//                                     <MenuList
//                                         autoFocusItem={open}
//                                         id="composition-menu"
//                                         aria-labelledby="composition-button"
//                                         onKeyDown={handleListKeyDown}
//                                     >
//                                         <MenuItem onClick={handleClose}>Tüm Yedek Parçalar</MenuItem>
//                                         {categories.map((category, key) => (
//                                             <MenuItem key={key} onClick={handleClose}>{category}</MenuItem>
//                                         ))}
//                                     </MenuList>
//                                 </ClickAwayListener>
//                             </Paper>
//                         </Grow>
//                     )}
//                 </Popper>
//             </div>
//         </Stack>
//     );
// }