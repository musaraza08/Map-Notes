import styled from 'styled-components';

export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

export const Grid = styled.div`

`;

export const Row = styled.div`
display: flex;
`;

export const Notes = styled.div`
flex: 1;
`;

export const Map = styled.div`
flex: 5;
`;

export const Section = styled.section`
  color: black;

  /* Pass variables as inputs */
  padding: 1rem;

  /* Adjust the background from the properties */
  background: "cornflowerblue";
`

export const Modal = styled.div`
display: block; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalBox = styled.div`
background-color: #fefefe;
margin: 15% auto; /* 15% from the top and centered */
padding: 20px;
border: 1px solid #888;
width: 30%; /* Could be more or less, depending on screen size */
`

export const Title = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Description = styled.input.attrs((props) =>({
  type: 'text'
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const AddButton = styled.button.attrs((props) =>({
  id: 'add'
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const CancelButton = styled.button.attrs((props) =>({
  id: 'cancel'
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;