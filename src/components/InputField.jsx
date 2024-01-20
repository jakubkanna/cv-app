export default function InputField({ field }) {
  return (
    <input
      type={field.type ? field.type : "text"}
      name={field.name}
      id={field.id}
      placeholder={
        field.placeholder ? field.placeholder : field.type ? field.type : "text"
      }
      // onChange={(e) => {
      //   console.log(e.target.value);
      // }}
    />
  );
}
