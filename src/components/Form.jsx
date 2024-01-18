/**
 * Be sure to include an edit and submit button for each section or for the whole CV.
 * The submit button should submit your form and display the value of your input fields in HTML elements.
 * The edit button should add back (display) the input fields, with the previously displayed information as values.
 * In those input fields, you should be able to edit and resubmit the content.
 * You’re going to make heavy use of state and props, so make sure you understood those concepts.
 */

import Section from "./Section";
import SubmitButton from "./buttons/SubmitButton";
import { formTemplate } from "../template/template";
import "../styles/Form.css";
import CV from "./CV";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = [];

    for (const element of event.currentTarget.elements) {
      element.id && newFormData.push({ value: element.value, id: element.id });
    }
    setFormData(newFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Create CV</h2>
        <hr />
        {formTemplate.map((section, index) => {
          return <Section key={index} name={section.name} template={section} />;
        })}
        <hr />
        <SubmitButton />
      </form>
      <CV data={formData} />
    </>
  );
}
