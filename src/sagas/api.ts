export const fetchData = async () => {
  try {
    const response = await fetch("http://192.168.1.100:4000/notes");
    console.log("resonse from server: " ,response)
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("error from server",e);
  }
};

export const postData = async (data: any) => {
  const { title, description, lat, lng, id } = data;
  try {
    const response = await fetch("http://192.168.1.100:4000/notes", {
      method: "post",
      body: JSON.stringify({
        title: title,
        description: description,
        lat: lat,
        lng: lng,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    else{
      return "err"
    }
    
  } catch (e) {
    console.log("in err")
    console.log(e);
  }
};
