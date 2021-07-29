import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "100vw",
    // height: "88vh",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  heroSection: {
    margin: "50px 0",
  },
  heroLeftSection: {
    padding: "10px",
  },
  heroRightSection: {
    padding: "10px",
  },
  heroText: {
    fontFamily: "Dancing Script, cursive",
    fontWeight: "bold",
  },
  hireMe: {
    // background: "rgb(255,102,179)",
    background:
      "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    color: "#FFF",
    padding: "8px",
    paddingRight: "30px",
    paddingLeft: "30px",
    borderRadius: "5px",
    border: "1px solid #FF66B3",
    margin: "10px",
    "&:hover": {
      background: "#FFFFFF",
      color: "#FF66B3",
    },
  },
  getCv: {
    backgroundColor: "#FFFFFF",
    color: "#FF66B3",
    padding: "8px",
    paddingRight: "30px",
    paddingLeft: "30px",
    borderRadius: "5px",
    border: "1px solid #FF66B3",
    margin: "10px",
    "&:hover": {
      // background: "rgb(255,102,179)",
      background:
        "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
      color: "#FFFFFF",
    },
  },
  socialIcons: {
    fontSize: "23px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
    padding: "8px",
    margin: "10px",
    color: "white",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));
export default useStyles;
