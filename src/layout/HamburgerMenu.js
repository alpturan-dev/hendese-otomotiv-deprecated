import React from 'react'
import Menu from 'react-burger-menu/lib/menus/stack'
import { Box, Link } from '@mui/material';
import { Shake } from 'reshake';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import DropdownMenu from './DropdownMenu'
function HamburgerMenu({ pageWrapId, outerContainerId }) {
    var styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '28px',
            height: '20px',
            left: '36px',
            top: '115px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#eee',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'flex'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <Menu styles={styles} pageWrapId={pageWrapId} outerContainerId={outerContainerId} >
            <Box
                sx={{ transition: "1s", listStyle: "none", textDecoration: "none", fontSize: "0.9rem", fontWeight: "bold", display: "flex", flexDirection: "column", alignItems: "start", gap: "30px" }}
            >
                <Box>
                    <Link href="/" sx={{
                        paddingBottom: "10px",
                        paddingX: "2px",
                        textDecoration: "none",
                        color: "black",
                        borderBottom: "0 solid #ed3137",
                        transition: "border .2s ease-in-out",
                        '&:hover': {
                            color: "primary.main",
                            borderWidth: "4px"
                        }
                    }}>
                        Anasayfa
                    </Link>
                </Box>
                <Box>
                    <DropdownMenu />
                </Box>
                <Box>
                    <Link href="#" sx={{
                        paddingBottom: "10px",
                        paddingX: "2px",
                        textDecoration: "none",
                        color: "black",
                        borderBottom: "0 solid #ed3137",
                        transition: "border .2s ease-in-out",
                        '&:hover': {
                            color: "primary.main",
                            borderWidth: "4px"
                        }
                    }}>
                        Teknik Bilgiler
                    </Link>
                </Box>
                <Box>
                    <Link href="#" sx={{
                        paddingBottom: "10px",
                        paddingX: "2px",
                        textDecoration: "none",
                        color: "black",
                        borderBottom: "0 solid #ed3137",
                        transition: "border .2s ease-in-out",
                        '&:hover': {
                            color: "primary.main",
                            borderWidth: "4px"
                        }
                    }}>
                        Hakkımızda
                    </Link>
                </Box>
                <Box>
                    <Link href="/contact" sx={{
                        paddingBottom: "10px",
                        paddingX: "2px",
                        textDecoration: "none",
                        color: "black",
                        borderBottom: "0 solid #ed3137",
                        transition: "border .2s ease-in-out",
                        '&:hover': {
                            color: "primary.main",
                            borderWidth: "4px"
                        }
                    }}>
                        İletişim
                    </Link>
                </Box>
                <Shake h={3} v={0} r={3}>
                    <a style={{ textDecoration: "none" }} href="tel:05303604105">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "primary.main",
                                gap: "10px",
                                transition: "0.5s",
                                padding: "15px 10px",
                                borderRadius: "5px 5px 0 0",
                                borderBottom: "2px solid #ed3137",
                                '&:hover': {
                                    backgroundColor: "primary.main",
                                    color: "secondary.main",
                                    cursor: "pointer"
                                }
                            }}
                        >
                            <PhoneInTalkRoundedIcon />
                            +90 530 360 41 05
                        </Box>
                    </a>
                </Shake>
            </Box>
        </Menu>
    );
}

export default HamburgerMenu