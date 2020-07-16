import * as React from "react";

const withStaticProps = (WrappedComponent: any) => {
  const NewComp = (props: any) => {
    return (
      <WrappedComponent
        {...props}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAvIy_-SQ-mIdX-olPiudYvSC2b6z7lpuY&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      ></WrappedComponent>
    );
  };
  return NewComp;
};

export default withStaticProps;
