import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        back to settings!
      </Button>
    </Box>
  );
};

export default FinalScreen;
