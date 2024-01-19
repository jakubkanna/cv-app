/* eslint-disable react/prop-types */
import Button from "./Button";
import InputField from "./InputField";

export default function Section({ name, id, template, data, onAdd }) {
  const handleEditButton = (e) => {
    const fields = Array.from(e.currentTarget.parentElement.elements);
    fields.forEach((field) => {
      data.forEach((element) => {
        if (element.id === field.id) field.value = element.value;
      });
    });
  };

  const renderFieldSets = template.fieldSets.map((fieldSet) => (
    <fieldset key={fieldSet.id}>
      {fieldSet.set.map((field) => (
        <InputField key={field.id} field={field} />
      ))}
      <Button string="Edit" handler={handleEditButton} />
    </fieldset>
  ));

  return (
    <section id={id}>
      <h3>{name}</h3>
      {renderFieldSets}
      {name !== "General" && <Button string="Add" handler={onAdd} />}
      <hr style={{ marginTop: "24px" }} />
    </section>
  );
}
