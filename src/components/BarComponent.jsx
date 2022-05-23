import PropTypes from "prop-types";
import { AppBar, Stack, Typography, Button  } from "@mui/material";
import { Container } from "@mui/system";

const BarComponent = (
  {
    title,
    btnName,
    dataTestIdTitle,
    dataTestIdButton,
  }) => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ p: 1 }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2}>
          <Typography
            component="div"
            name={ title }
            data-testid={ dataTestIdTitle }
            sx={{ flexGrow: 1 }}
            variant="h6"
          >
            { title }
          </Typography>
          <Button
            name={ btnName }
            color="inherit"
            data-testid={ dataTestIdButton }
            type="submit"
          >
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
  dataTestIdTitle: PropTypes.string.isRequired,
  dataTestIdButton: PropTypes.string.isRequired,
};

export default BarComponent;
