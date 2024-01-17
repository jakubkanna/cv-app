/* eslint-disable react/prop-types */

export default function InputField({ field }) {
  return (
    <input
      type={field.type ? field.type : "text"}
      id={field.id}
      defaultValue={field.value}
      placeholder={
        field.placeholder ? field.placeholder : field.type ? field.type : "text"
      }
      onChange={(e) => {
        console.log(e.target.value);
      }}
    />
  );
}
