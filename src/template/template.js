import { v4 as uuid } from "uuid";

let indexCounter = 1;

function getIndex() {
  return indexCounter++;
}

const mainTemplate = [
  {
    name: "General",
    fieldSets: [
      {
        id: uuid(),
        set: [
          {
            name: `firstName${getIndex()}`,
            id: `firstName${getIndex()}`,
            placeholder: "Enter your first name",
          },
          {
            name: `lastName${getIndex()}`,
            id: `lastName${getIndex()}`,
            placeholder: "Enter your last name",
          },
          {
            name: `email${getIndex()}`,
            id: `email${getIndex()}`,
            type: "email",
            placeholder: "Enter your email",
          },
          {
            name: `phoneNb${getIndex()}`,
            id: `phoneNb${getIndex()}`,
            type: "phone",
            placeholder: "Enter your phone number",
          },
        ],
      },
    ],
  },

  {
    name: "Education",
    fieldSets: [
      {
        id: uuid(),
        set: [
          {
            name: `schoolName${getIndex()}`,
            id: `schoolName${getIndex()}`,
            placeholder: "Enter your school name",
          },
          {
            name: `studyTitle${getIndex()}`,
            id: `studyTitle${getIndex()}`,
            placeholder: "Enter your study title",
          },
          {
            name: `startYear${getIndex()}`,
            id: `startYear${getIndex()}`,
            type: "number",
            placeholder: "Enter start year",
          },
          {
            name: `endYear${getIndex()}`,
            id: `endYear${getIndex()}`,
            type: "number",
            placeholder: "Enter end year",
          },
        ],
      },
    ],
  },

  {
    name: "Experience",
    fieldSets: [
      {
        id: uuid(),
        set: [
          {
            name: `companyName${getIndex()}`,
            id: `companyName${getIndex()}`,
            placeholder: "Enter your company name",
          },
          {
            name: `positionTitle${getIndex()}`,
            id: `positionTitle${getIndex()}`,
            placeholder: "Enter your position title",
          },
          {
            name: `responsibilities${getIndex()}`,
            id: `responsibilities${getIndex()}`,
            placeholder: "Enter main responsibilities",
          },
          {
            name: `startDate${getIndex()}`,
            id: `startDate${getIndex()}`,
            type: "date",
            placeholder: "Select start date",
          },
          {
            name: `endDate${getIndex()}`,
            id: `endDate${getIndex()}`,
            type: "date",
            placeholder: "Select end date",
          },
        ],
      },
    ],
  },
];

export { mainTemplate };
