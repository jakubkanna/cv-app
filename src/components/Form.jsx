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

export default function Form() {
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submit}>
        <h2>Create CV</h2>
        <hr />
        {formTemplate.map((section, index) => {
          return <Section key={index} name={section.name} template={section} />;
        })}
        <hr />
        <SubmitButton />
      </form>
      <CV />
    </>
  );
}
