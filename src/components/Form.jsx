/**
 * Be sure to include an edit and submit button for each section or for the whole CV.
 * The submit button should submit your form and display the value of your input fields in HTML elements.
 * The edit button should add back (display) the input fields, with the previously displayed information as values.
 * In those input fields, you should be able to edit and resubmit the content.
 * You’re going to make heavy use of state and props, so make sure you understood those concepts.
 */

import "../styles/Form.css";
import { mainTemplate } from "../template/template";
import { useState } from "react";
import Section from "./Section";
import Display from "./Display";
import Button from "./Button";
import { v4 as uuid } from "uuid";

export default function Form() {
  const [currentData, setFormData] = useState([]);
  const [currentTemplate, setTemplate] = useState(mainTemplate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = [];

    for (const element of event.currentTarget.elements) {
      element.id && newFormData.push({ value: element.value, id: element.id });
    }

    setFormData(newFormData);
  };

  const handleAdd = (sectionIndex) => {
    // Copy the current template
    const newTemplate = [...currentTemplate];

    // Get the section
    const section = newTemplate[sectionIndex];

    // Add a new fieldSet to the section
    const setCopy = JSON.parse(JSON.stringify(section.fieldSets[0].set));

    setCopy.forEach((object) => (object.id = uuid()));

    section.fieldSets.push({
      id: uuid(),
      set: setCopy,
    });

    // Update the template
    setTemplate(newTemplate);

    // Update the data state to include the new fields
    const newData = [...currentData];
    setCopy.forEach((field) => {
      newData.push({ value: "", id: field.id });
    });
    setFormData(newData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create CV</h2>
        <hr />
        {currentTemplate.map((section, index) => {
          return (
            <Section
              key={index}
              id={index}
              name={section.name}
              template={section}
              onAdd={() => handleAdd(index)}
              data={currentData}
            />
          );
        })}
        <hr />
        <Button string="Submit" type="submit" />
      </form>
      <Display data={currentData} template={currentTemplate} />
    </>
  );
}
