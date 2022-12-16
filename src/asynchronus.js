
export default async function form(dataObject, validate, message) {
  try {
    const data = new FormData();
    for (let key in dataObject) {
      console.log(key)
      console.log(dataObject[key])
      data.append(key, dataObject[key]);
    }
    console.log(data)
    const response = await fetch("http://127.0.0.1/shrimp/index.php", {
      method: "POST",
     // headers: { "Content-Type": "multipart/form-data", },
     // mode: "no-cors",
      body: data,
    
    });
  
    if (response.ok) {
      const ok = await response.text();
     console.log(ok);
      alert('mail został wysłany')
    } else {
      throw new Error("Wystąpił błąd. status: "+response.status);
    }
  } catch (error) {
    console.log(error)
    validate(true);
    message(error);
  }
}
