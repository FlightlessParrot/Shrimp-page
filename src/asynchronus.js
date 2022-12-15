
export default async function form(dataObject, validate, message) {
  try {
    const data = new FormData();
    for (let key in dataObject) {
      data.append(key, dataObject[key]);
    }

    const response = await fetch("http://localhost:8000/index.php", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    });
    if (response.ok) {
      const ok = await response.formData();
      console.log(ok);
    } else {
        console.log(data)
      throw new Error("Wystąpił błąd. status: "+response.status);
    }
  } catch (error) {
    validate(true);
    message(error);
  }
}
