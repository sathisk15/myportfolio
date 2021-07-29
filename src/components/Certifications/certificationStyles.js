import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  certificationSection: {
    padding: "5px",
    margin: "50px 0",
  },
  certificationHeading: {
    padding: "5px",
    margin: "5px auto",
    borderBottom: "2px solid #D268CC",
  },
  certificationContent: {
    margin: "20px 0",
  },
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    boxShadow:
      "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: "auto",
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    padding: "0 2px",
  },
  imageContainer: {
    marginTop: theme.spacing(6),
  },
}));

export default useStyles;
