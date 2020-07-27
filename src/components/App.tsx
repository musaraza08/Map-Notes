import * as React from "react";
import Maps from "./Maps";
import NotesList from "./NotesList";


import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { Grid, Row, Nav, Notes, Map } from "./styled";

const App = (props: {}) => (
  <Grid>
    <ReactNotification />
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
