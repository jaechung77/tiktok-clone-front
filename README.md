# Purpose
This app is the front-end of Tiktok-clone site. 

## ERD
EDR can be found on my backend page on https://github.com/jaechung77/tiktok-clone-api/blob/main/README.md

## npm packges used
### styling: bootstrap, material ui, font awesome
### File handling: axios
### Video Player: react-player
### State Contorl: react-redux,
### Asyncronous issue: redux-thunk
... and many more

## cookie and session storage handling
JWT token is saved in httponly cookie(currently the flag is off) and user's nick name and user id(integer) is saved session storage to handle user's data easily.

## User's state handling
To easy communicate between componets, redux handles the state.
To resolve asyncronous issue while handling video files, redux thunk controls dispatch and update. 

