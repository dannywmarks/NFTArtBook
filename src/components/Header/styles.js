import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../images/stigma.jpg";

export const useStyles = makeStyles({
  root: {
    height: 500,
    width: "100%",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  marquee: {
    color: "#FFFFFF",
  },
});
