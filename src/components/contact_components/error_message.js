

export default function ErrorMessage(props) {
  let rama = props.control ? "error" : "hidden";
  let obekt = props.control ? "" : "hidden";
  let blur = props.control ? "blur" : "hidden";

  function ClickHandler(e) {
    e.preventDefault();
    props.validate(false);
  }
  return (
    <>
      <div className={blur}></div>
      <div id="mailError[]" className={rama}>
        <p className={obekt}>{props.children}</p>
        <button onClick={ClickHandler} className={obekt}>
          OK
        </button>
      </div>
    </>
  );
}
