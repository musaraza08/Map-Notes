import * as React from "react";
//import Maps from './Maps';
import { Provider} from 'react-redux';
import store from '../redux/store';

import MapConatiner from './mapcontainer'


function App  (props:any)  {
        return(
          <Provider store={store}>
            <div>
            <MapConatiner />
            </div>
          </Provider>
        )
      
      
    }

export default App