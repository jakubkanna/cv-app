import "../styles/Display.css";
import Button from "./Button";

// Function to format string, e.g., "companyName2" to "Company Name"
const formatFieldName = (fieldName) =>
  fieldName
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const Display = ({ data, template, onEdit }) => (
  <>
    <Button string="Edit" handler={onEdit} />

    <div className="CurriculumVitae">
      {data.length > 0 &&
        template.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h1>{section.name}</h1>
            <ul>
              {section.fieldSets.map((object, objectIndex) => (
                <li key={objectIndex}>
                  <ul>
                    {object.set.map((field, fieldIndex) => {
                      const matchingData = data.find(
                        (element) => element.id === field.id
                      );
                      return (
                        <li key={fieldIndex}>
                          {matchingData.value &&
                            `${formatFieldName(field.name)}: `}
                          {matchingData.value}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </>
);

export default Display;
