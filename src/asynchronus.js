
export default async function form(dataObject, validate, message) {
  try {
    const data = new FormData();
    for (let key in dataObject) {
      console.log(String(dataObject[key]))
       console.log(typeof String(dataObject[key]))
      data.append(key, String(dataObject[key]));
    }
    
    const response = await fetch("../server/index.php", {
      method: "POST",
      credentials: 'include',
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
