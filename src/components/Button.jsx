/* eslint-disable react/prop-types */
export default function Button({ string = "click", handler, type = "button" }) {
  return (
    <button type={type} onClick={handler}>
      {string}
    </button>
  );
}
