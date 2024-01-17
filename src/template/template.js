import { v4 as uuid } from "uuid";

const formTemplate = [
  {
    name: "General",
    fieldSets: [
      {
        id: uuid(),
        set: [
          { placeholder: "Enter your first name" },
          { placeholder: "Enter your last name" },
          {
            type: "email",
            placeholder: "Enter your email",
          },
          {
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
            placeholder: "Enter your school name",
          },
          {
            placeholder: "Enter your study title",
          },
          {
            type: "number",
            placeholder: "Enter start year",
          },
          {
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
            placeholder: "Enter your company name",
          },
          {
            placeholder: "Enter your position title",
          },
          {
            placeholder: "Enter main responsibilities",
          },
          { type: "date", placeholder: "Select start date" },
          { type: "date", placeholder: "Select end date" },
        ],
      },
      {
        id: uuid(),
        set: [
          {
            placeholder: "Enter your company name",
          },
          {
            placeholder: "Enter your position title",
          },
          {
            placeholder: "Enter main responsibilities",
          },
          { type: "date", placeholder: "Select start date" },
          { type: "date", placeholder: "Select end date" },
        ],
      },
    ],
  },
];

export { formTemplate };
