import * as React from "react";
import Maps from './Maps';
import { Provider} from 'react-redux';
import store from '../redux/store';
import NotesList from './NotesList';
import {Button, Grid, Row, Notes, Map, Section, Modal, Title, Description} from './styled'



function App  (props:any)  {
        return(
          <Provider store={store}>
            
            <Grid>
              <Row>
                <Section>
                  <h1>Map Notes</h1>
                </Section>
              </Row>
              <Row>
                <Notes>
                  <NotesList />
                </Notes>
                <Map><Maps /></Map>
              </Row>
            </Grid>
            
            <div>
            
            {/*<MapConatiner />*/ }
            </div>
          </Provider>
        )
      
      
    }

export default App