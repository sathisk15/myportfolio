import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skillsSection: {
    padding: '5px',
    margin: '50px 0',
  },
  skillsHeading: {
    padding: '5px',
    margin: '5px auto',
    borderBottom: '2px solid #0a66c2',
  },
  skillsContent: {
    margin: '20px 0',
  },
  skillImgContainer: {
    width: '100%',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform .4s',

    '&:hover': {
      transform: 'scale(1.1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '6px 7px 40px -4px rgba(0, 0, 0, 0.2)',
    },
  },
  skillImg: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default useStyles;
