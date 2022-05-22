import { Stack } from "@mui/material";
import Container from "@mui/system/Container";
import logo from "../images/logo-100x17.ico";

const HeaderComponent = () => {
  return (
  <Stack
    direction="column"
    spacing={1}
    padding={1}
    boxShadow={2}
    sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="lg" align="center">
        <img
          src={ logo }
          alt="Agrotis logo"
          width={ 90 }
        />
      </Container>
    </Stack>
  );
};

export default HeaderComponent;
