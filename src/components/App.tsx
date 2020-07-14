import * as React from "react";
import Maps from './Maps';
import { Provider} from 'react-redux';
import store from '../redux/store';
import NotesList from './NotesList';
import {Button, Grid, Row,Nav, Notes, Map, Section, Modal, Title, Description, TopNav} from './styled'

function App  (props:any)  {
        return(
          
            <>
            <Grid>
              <Nav>                
              </Nav>
              <Row>
                <Notes>
                  <NotesList />
                </Notes>
                <Map><Maps /></Map>
              </Row>
            </Grid>
            </>
        )
      
      
    }

export default App