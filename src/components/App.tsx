import * as React from "react";
import Maps from "./Maps";
import NotesList from "./NotesList";

import { Grid, Row, Nav, Notes, Map } from "./styled";

const App = (props: {}) => (
  <Grid>
    <Nav></Nav>
    <Row>
      <Notes>
        <NotesList />
      </Notes>
      <Map>
        <Maps />
      </Map>
    </Row>
  </Grid>
);

export default App;
