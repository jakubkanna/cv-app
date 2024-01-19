export default function Button({ string = "click", handler, type = "button" }) {
  return (
    <button type={type} onClick={handler}>
      {string}
    </button>
  );
}
