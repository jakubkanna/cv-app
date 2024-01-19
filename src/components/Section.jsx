/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { v4 as uuid } from "uuid";

export default function Section({ name, template, data }) {
  const [currentTemplate, setTemplate] = useState(template);

  const handleEditButton = (e) => {
    const fields = Array.from(e.currentTarget.parentElement.elements);
    fields.forEach((field) => {
      data.forEach((element) => {
        if (element.id === field.id) field.value = element.value;
      });
    });
  };

  const handleAddButton = () => {
    const set = currentTemplate.fieldSets[0].set;
    const newTemplate = {
      ...currentTemplate,
      fieldSets: [...currentTemplate.fieldSets, { id: uuid(), set: [...set] }],
    };
    setTemplate(newTemplate);
  };

  const renderFieldSets = currentTemplate.fieldSets.map((fieldSet) => (
    <fieldset key={fieldSet.id}>
      {fieldSet.set.map((field) => (
        <InputField key={field.id} field={field} />
      ))}
      <Button string="Edit" handler={handleEditButton} />
    </fieldset>
  ));

  return (
    <section id={name}>
      <h3>{name}</h3>
      {renderFieldSets}
      {name !== "General" && <Button string="Add" handler={handleAddButton} />}
      <hr style={{ marginTop: "24px" }} />
    </section>
  );
}
