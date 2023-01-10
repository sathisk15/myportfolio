import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#0a66c2',
    // background: "rgb(255,102,179)",
    // background:
    //   "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    boxShadow: 'none',
    color: '#1B1B1E',
  },
  title: {
    display: 'block',
    margin: theme.spacing(1),
    marginLeft: '2%',
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    fontSize: '30px',
    color: '#FFFFFF',
    fontFamily: 'Yellowtail, cursive',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  navButtons: {
    background: 'transparent',
    boxShadow: 'none',
    color: '#FFF',
    border: '1px solid #FFF',
    textTransform: 'none',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingRight: '30px',
    paddingLeft: '30px',
    '&:hover': {
      background: 'transparent',
      // boxShadow: "none",
    },
  },
  navItems: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    color: '#FFFFFF',
    border: '2px solid transparent',
    '&:hover': {
      cursor: 'pointer',
      color: '#FFFFFF',
      borderBottom: '2px solid #1877F2',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
