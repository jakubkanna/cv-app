import { v4 as uuid } from "uuid";

const mainTemplate = [
  {
    name: "General",
    fieldSets: [
      {
        id: uuid(),
        set: [
          {
            name: `firstName`,
            id: uuid(),
            placeholder: "Enter your first name",
          },
          {
            name: `lastName`,
            id: uuid(),
            placeholder: "Enter your last name",
          },
          {
            name: `email`,
            id: uuid(),
            type: "email",
            placeholder: "Enter your email",
          },
          {
            name: `phoneNb`,
            id: uuid(),
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
            name: `schoolName`,
            id: uuid(),
            placeholder: "Enter your school name",
          },
          {
            name: `studyTitle`,
            id: uuid(),
            placeholder: "Enter your study title",
          },
          {
            name: `startYear`,
            id: uuid(),
            type: "number",
            placeholder: "Enter start year",
          },
          {
            name: `endYear`,
            id: uuid(),
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
            name: `companyName`,
            id: uuid(),
            placeholder: "Enter your company name",
          },
          {
            name: `positionTitle`,
            id: uuid(),
            placeholder: "Enter your position title",
          },
          {
            name: `responsibilities`,
            id: uuid(),
            placeholder: "Enter main responsibilities",
          },
          {
            name: `startDate`,
            id: uuid(),
            type: "date",
            placeholder: "Select start date",
          },
          {
            name: `endDate`,
            id: uuid(),
            type: "date",
            placeholder: "Select end date",
          },
        ],
      },
    ],
  },
];

export { mainTemplate };
