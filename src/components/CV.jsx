/* eslint-disable react/prop-types */
import "../styles/CV.css";
import { formTemplate } from "../template/template";

// Function to format string, e.g., "companyName2" to "Company Name"
const formatFieldName = (fieldName) => {
  // Remove numbers from the field name
  const nameWithoutNumbers = fieldName.replace(/\d+/g, "");
  // Capitalize the first letter of each word
  const formattedName = nameWithoutNumbers
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
};

export default function CV({ data }) {
  return (
    <div className="CurriculumVitae">
      {data.length > 0 &&
        formTemplate.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex}>
              <h1>{section.name}</h1>
              <ul>
                {section.fieldSets.map((object, objectIndex) => {
                  return (
                    <li key={objectIndex}>
                      <ul>
                        {object.set.map((field, fieldIndex) => {
                          const matchingData = data.find(
                            (formData) => formData.id === field.id
                          );

                          return (
                            <li key={fieldIndex}>
                              {matchingData.value &&
                                formatFieldName(field.id) + ": "}
                              {matchingData.value}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
}