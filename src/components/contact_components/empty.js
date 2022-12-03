

export default function emptiness(object)
{
    if (object.value.trim() !== "") {
        object.classList.remove("unvalidated");
        object.classList.add("validated");
        return true;
      } else {
        object.classList.remove("validated");
        object.classList.add("unvalidated");
        return false;
      }
}
