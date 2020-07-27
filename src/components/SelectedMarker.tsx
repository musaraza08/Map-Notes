import * as React from "react";

import { InfoWindow } from "react-google-maps";

class SelectedMarker extends React.Component<any> {

  render() {
    const { setSelectedMarker, selectedMarker } = this.props;

    return (
      <InfoWindow
        onCloseClick={() => {
          setSelectedMarker(null);
        }}
        position={{
          lat: selectedMarker.lat,
          lng: selectedMarker.lng,
        }}
      >
        <div>
          <h3>Title</h3>
          {selectedMarker.title}
          <h3>Description</h3>
          {selectedMarker.description}
        </div>
      </InfoWindow>
    );
  }
}

export default SelectedMarker;
