import {
  AppBar,
  Toolbar,
  Container,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';
import './Nav.css';

const Nav = ({ quarter, selectChangeHandler }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar className="Toolbar">
          <div className="brand">
            <h3>oxygen4mawlamyine</h3>
          </div>
          <div>
            <FormControl className="Nav__FormControl">
              <InputLabel>Search Quarter</InputLabel>
              <Select
                value={quarter}
                color={'secondary'}
                onChange={(e) => selectChangeHandler(e)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="mty" name="mty">
                  Myine Thar Yar
                </MenuItem>
                <MenuItem value="snt" name="snt">
                  Shwe Nat Taung
                </MenuItem>
                <MenuItem value="myg" name="myg">
                  Ma Yan Gone
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
