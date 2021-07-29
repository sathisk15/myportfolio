import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    padding: "5px",
    margin: "50px 0",
    // height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  headingAbout: {
    padding: "5px",
    margin: "auto",
    borderBottom: "2px solid #D268CC",
  },
  aboutLeftSection: {
    width: "50%",
  },
  aboutRightSection: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  about: {
    // borderRadius: "100% 100% 100% 100% / 100% 100% 100% 100%",
    // background:
    //   "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    // opacity: "0.5",
  },
  abtContent: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

export default useStyles;
