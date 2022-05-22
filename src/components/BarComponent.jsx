import PropTypes from "prop-types";
import { AppBar, Stack, Typography, Button  } from "@mui/material";
import { Container } from "@mui/system";

const BarComponent = ({ title, btnName }) => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ p: 1 }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            { title }
          </Typography>
          <Button color="inherit" type="submit">
            { btnName }
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
};

BarComponent.propTypes = {
  title: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default BarComponent;
