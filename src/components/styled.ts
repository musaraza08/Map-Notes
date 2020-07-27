import styled from "styled-components";

export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

export const Grid = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0px;
  padding: 0px;
`;

export const TopNav = styled.div`
  padding-left: 2rem;
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  background-color: #e9e9e9;
  overflow: hidden;
  height: 50rem;
`;

export const Nav = styled.div`
  display: flex;
  background-color: #3b6978;
  overflow: hidden;
  height: 5rem;
`;

export const Notes = styled.div`
  flex: 1;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #e4e3e3; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  font-family: "verdana";
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
`;

export const Modal = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

export const ModalBox = styled.div`
text-align: center
background-color: #fefefe;
margin: auto; /* 15% from the top and centered */
padding: 20px;
width: 15rem; /* Could be more or less, depending on screen size */
`;

export const NoteButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  background-color: #84a9ac;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.input`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Description = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const AddButton = styled.button.attrs((props) => ({
  id: "add",
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const CancelButton = styled.button.attrs((props) => ({
  id: "cancel",
}))`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
