import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  expEduTimelineSection: {
    padding: "5px",
    margin: "50px 0",
  },
  expEduTimelineHeading: {
    padding: "5px",
    margin: "5px auto",
    borderBottom: "2px solid #D268CC",
  },
  expEduTimelineContent: {
    margin: "20px 0",
  },
  paper: {
    padding: "6px 16px",
    borderTop: "2px solid red",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timelineDate: {
    marginTop: "8px",
  },
  MobileViewTimeline: {
    display: "flex",
    flexDirection: "row",
  },
  desktopView: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  mobileView: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default useStyles;
