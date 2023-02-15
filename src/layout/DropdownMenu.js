import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Link } from '@mui/material'
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
                    cursor: "pointer",
                    '&:hover': {
                        color: "primary.main",
                        borderWidth: "4px",
                    }
                }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                onMouseOver={handleClick}
            >
                Yedek Parça
                <ArrowDropDownIcon />
            </Box>
            <Menu
                id="fade-menu"
                MenuListProps={{ onMouseLeave: handleClose }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                    cursor: "pointer",
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
