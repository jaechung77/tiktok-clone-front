import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Avatar from '@mui/material/Avatar';
import { Tooltip } from '@mui/material';
import SignUpModal from '../auth/SignUpModal';
import SignInModal from '../auth/SignInModal';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useDispatch } from 'react-redux';
import { searchString } from '../redux/actions/postActions'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Header() {

	const loginSuccess = sessionStorage.getItem('nickName')
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [signInModalOn, setSignInModalOn] = useState(false)
  const userName = loginSuccess

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();
  const [removeCookies] = useCookies(['accessToken'])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  const handleProfile = () => {
    handleMenuClose()
    navigate({ pathname: '/profile' })
  };

  const handlePosts= () => {
    let url = ""
    if (loginSuccess) {
      url = `/manage/${sessionStorage.getItem('userID')}`
    }
    setAnchorEl(null);
    handleMobileMenuClose();
    navigate({ pathname: url })
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignout = () => {
    setAnchorEl(null);
    sessionStorage.removeItem('nickName')
    sessionStorage.removeItem('userID')
    alert("Successfully Logged Out")
    navigate({ pathname: '/' })
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handlePosts}>Manage Posts</MenuItem> 
        <MenuItem onClick={handleSignout}>Log Out</MenuItem>

    </Menu>
  );

  const handleClick = () => {
    dispatch(searchString(search))
    navigate({ pathname:'search'})
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="info">
          <Badge  color="error">
          <PeopleIcon />
          </Badge>
        </IconButton>
        <p>Follow</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="info"
        >
          <Badge  color="error">
          <FileUploadIcon />
          </Badge>
        </IconButton>
        <p>Upload</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="info"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <SignUpModal show={signUpModalOn} onHide={()=>setSignUpModalOn(false)} />
		<SignInModal show={signInModalOn} onHide={()=>setSignInModalOn(false)} />
    <header id="header">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFFFFF', borderBottom: "3px solid rgb(212, 212, 212)" }} elevation={0}>
        <Toolbar>
        <MaterialLink component={RouterLink} style={{ textDecoration: 'none' }} to='/'>
          <IconButton
            size="middle"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            TikTok
          </IconButton>

        </MaterialLink>

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="gray"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>

          { sessionStorage.getItem("userID") &&
          <>
          <Search style={{color: '#0066CC'}}>
            <StyledInputBase style={{border: "1px solid blue"}}
              placeholder="Search by nickname"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <IconButton size="large" color="inherit">
              <SearchIcon style={{color: '#0066CC'}} onClick={handleClick}/>
            </IconButton>
          </Search>
          </>
          }
          <Box  sx={{ flexGrow: 1 }} />
          <Box  sx={{ display: { xs: 'none', md: 'flex' } }}>
          { sessionStorage.getItem("userID") &&
          <>
          <MaterialLink component={RouterLink} to='followings/1' >
            <Tooltip title="Follow">
              <IconButton size="large" color="inherit">
                <Badge  color="error" title="Follow">
                  <PersonSearchIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </MaterialLink>
          <MaterialLink component={RouterLink} to='followings/2'>
            <Tooltip title="Requested">
              <IconButton size="large" color="inherit">
                <Badge  color="error">
                  <PersonRemoveIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </MaterialLink>
          <MaterialLink component={RouterLink} to='followings/3'>
            <Tooltip title="Accept Requesting">
              <IconButton size="large" color="inherit">
                <Badge  color="error">
                  <PersonAddAlt1Icon />
                </Badge>
              </IconButton>
            </Tooltip>
          </MaterialLink>
          <MaterialLink component={RouterLink} to='followings/4'>
            <Tooltip title="Friends">
              <IconButton size="large" color="inherit">
                <Badge  color="error">
                  <PeopleIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </MaterialLink>

          <MaterialLink component={RouterLink} to='upload'>
            <Tooltip title="Upload">
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge color="error">
                  <FileUploadIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </MaterialLink>
          </>
        }
          { loginSuccess && loginSuccess !== ""
								?
            <>
              <Tooltip title="Settings & Log Out ...">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="info"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </>
								:
								<>
                  <Tooltip title="Log In">
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={()=> setSignInModalOn(true)}
                      color="info"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Tooltip>
                </>
          }

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="info"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </header>
    </>
  );
}
