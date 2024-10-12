import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>sobre</MenuItem>
                    <MenuItem>habilidades</MenuItem>
                    <MenuItem>projetos</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar