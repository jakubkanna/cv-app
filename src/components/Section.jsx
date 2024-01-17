/* eslint-disable react/prop-types */

import EditButton from "./buttons/EditButton";
import InputField from "./InputField";

export default function Section({ name, template }) {
  const fieldSets = template.fieldSets.map((object) => {
    const fields = object.set.map((field, index) => {
      return <InputField key={index} field={field} />;
    });

    return (
      <fieldset key={object.id}>
        {fields}
        <EditButton />
      </fieldset>
    );
  });

  return (
    <section>
      <h3>{name}</h3>
      {fieldSets}
    </section>
  );
}
