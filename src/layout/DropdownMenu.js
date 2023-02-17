import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Link } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useContext } from 'react';
import SparePartContext from '../context/SparePartContext';
import { makeStyles } from '@mui/styles';

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
    const useStyles = makeStyles({
        popOverRoot: {
            pointerEvents: "none"
        }
    });
    let currentlyHovering = false;
    const styles = useStyles();
    function handleHover() {
        currentlyHovering = true;
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }


    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "10px",
                    paddingX: "2px",
                    textDecoration: "none",
                    color: "black",
                    backgroundImage: "linear-gradient(#ed3137 0 0)",
                    backgroundPosition: "right -100% bottom 0",
                    backgroundSize: "200% 2px",
                    backgroundRepeat: "no-repeat",
                    '&:hover': {
                        color: "primary.main",
                        backgroundPosition: "left -100% bottom 0",
                        transition: "background-position 1s"
                    }
                }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}
            >
                Yedek Parça
                <ArrowDropDownIcon />
            </Box>
            <Menu
                sx={{ cursor: "pointer" }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                    style: { pointerEvents: "auto" }
                }}
                getContentAnchorEl={null}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                PopoverClasses={{
                    root: styles.popOverRoot
                }}
            >
                <Link href="/kategori/Tüm Yedek Parçalar" sx={{ color: "inherit", textDecoration: "none" }}>
                    <MenuItem sx={{ background: "#ddd" }}>
                        Tüm Yedek Parçalar
                    </MenuItem>
                </Link>
                {categories.map((category, index) => (
                    <Link href={`/kategori/${category}`} key={index} sx={{ color: "inherit", textDecoration: "none" }}>
                        <MenuItem >
                            {category}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </div>
    );
}
