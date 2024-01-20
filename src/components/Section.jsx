import Button from "./Button";
import InputField from "./InputField";

export default function Section({ name, id, template, onAdd }) {
  const fieldSetRender = template.fieldSets.map((fieldSet) => (
    <fieldset key={fieldSet.id}>
      {fieldSet.set.map((field) => (
        <InputField key={field.id} field={field} />
      ))}
    </fieldset>
  ));

  return (
    <section id={id}>
      <h2>{name}</h2>
      {fieldSetRender}
      {name !== "General" && <Button string="Add" handler={onAdd} />}
      <hr style={{ marginTop: "24px" }} />
    </section>
  );
}
