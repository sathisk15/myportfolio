import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: "5px",
    margin: "50px 0",
    height: "80vh",
    display: "flex",
    alignItems: "center",
  },
  contactHeading: {
    padding: "5px",
    margin: "5px auto",
    borderBottom: "2px solid #D268CC",
  },
  contactContent: {
    margin: "20px 0",
  },
  contactImageContainer: {
    width: "100%",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  contact: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

export default useStyles;
