import "./styles/App.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { mainTemplate } from "./template/template";
import Section from "./components/Section";
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
  const [currentData, setFormData] = useState([]);
  const [currentTemplate, setTemplate] = useState(mainTemplate);
  const [elVisible, setElVisibility] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save input data
    const newFormData = Array.from(event.currentTarget.elements)
      .filter((element) => element.id)
      .map((element) => ({ value: element.value, id: element.id }));

    setFormData(newFormData);
    setElVisibility(true);
  };

  const addNewFields = (section, setCopy) => {
    const newTemplate = [...currentTemplate];
    section.fieldSets.push({ id: uuid(), set: setCopy });
    setTemplate(newTemplate);

    const newData = currentData.concat(
      setCopy.map((field) => ({ value: "", id: field.id }))
    );
    setFormData(newData);
  };

  const handleAdd = (sectionIndex) => {
    const section = currentTemplate[sectionIndex];
    const setCopy = JSON.parse(JSON.stringify(section.fieldSets[0].set));
    setCopy.forEach((object) => (object.id = uuid()));
    addNewFields(section, setCopy);
  };

  const handleEdit = () => {
    setElVisibility(false);
  };

  return (
    <>
      <h1
        style={{
          display: elVisible ? "none" : "flex",
          justifyContent: "center",
          margin: 0,
        }}>
        <a href="/">CV-App</a>
      </h1>
      <form onSubmit={handleSubmit} hidden={elVisible}>
        {currentTemplate.map((section, index) => (
          <Section
            key={index}
            id={index}
            name={section.name}
            template={section}
            onAdd={() => handleAdd(index)}
          />
        ))}
        <Button string="Submit" type="submit" />
      </form>
      {elVisible && (
        <Display
          data={currentData}
          template={currentTemplate}
          hidden={!elVisible}
          onEdit={handleEdit}
        />
      )}
    </>
  );
};

export default App;
