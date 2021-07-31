import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  projectsSection: {
    padding: "5px",
    margin: "50px 0",
  },
  projectsHeading: {
    padding: "5px",
    margin: "5px auto",
    borderBottom: "2px solid #D268CC",
  },
  projectsContent: {
    margin: "20px 0",
  },
  root: {
    maxWidth: 345,
    margin: theme.spacing(4),
  },
  media: {
    height: 230,
    transition: "transform .4s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

export default useStyles;
