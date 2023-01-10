import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  projectsSection: {
    padding: '5px',
    margin: '50px 0',
  },
  projectsHeading: {
    padding: '5px',
    margin: '5px auto',
    borderBottom: '2px solid #0a66c2',
  },
  projectsContent: {
    margin: '20px 0',
  },
  root: {
    maxWidth: 345,
    margin: theme.spacing(4),
  },
  media: {
    height: 230,
    transition: 'transform .4s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  visitPage: {
    backgroundColor: '#0a66c2',
    // background: "rgb(255,102,179)",
    // background:
    // "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    color: '#FFF',
    padding: '8px',
    paddingRight: '30px',
    paddingLeft: '30px',
    borderRadius: '5px',
    border: '1px solid #0a66c2',
    margin: '10px',
    '&:hover': {
      background: '#FFFFFF',
      color: '#0a66c2',
    },
    fontSize: '0.7rem',
  },
  viewSource: {
    backgroundColor: '#FFFFFF',
    color: '#0a66c2',
    padding: '8px',
    paddingRight: '30px',
    paddingLeft: '30px',
    fontSize: '0.7rem',
    borderRadius: '5px',
    border: '1px solid #0a66c2',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#0a66c2',
      // background: "rgb(255,102,179)",
      // background:
      //   'linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)',
      color: '#FFFFFF',
    },
  },
  btn: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
