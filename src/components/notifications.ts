export const noteAdded = {
    title: "Success",
    message: "Note has been added",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: false,
    },
  };

  export const validationFailed = {
    title: "Error",
    message: "All fields must be supplied",
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: false,
    },
  };