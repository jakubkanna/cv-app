import { v4 as uuid } from "uuid";

const formTemplate = [
  {
    name: "General",
    fieldSets: [
      {
        id: uuid(),
        set: [
          {
            name: "firstName",
            id: "firstName",
            placeholder: "Enter your first name",
          },
          {
            name: "lastName",
            id: "lastName",
            placeholder: "Enter your last name",
          },
          {
            name: "email",
            id: "email",
            type: "email",
            placeholder: "Enter your email",
          },
          {
            name: "phoneNb",
            id: "phoneNb",
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
            name: "schoolName",
            id: "schoolName",
            placeholder: "Enter your school name",
          },
          {
            name: "studyTitle",
            id: "studyTitle",
            placeholder: "Enter your study title",
          },
          {
            name: "startYear",
            id: "startYear",
            type: "number",
            placeholder: "Enter start year",
          },
          {
            name: "endYear",
            id: "endYear",
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
            name: "companyName",
            id: "companyName",
            placeholder: "Enter your company name",
          },
          {
            name: "positionTitle",
            id: "positionTitle",
            placeholder: "Enter your position title",
          },
          {
            name: "responsibilities",
            id: "responsibilities",
            placeholder: "Enter main responsibilities",
          },
          {
            name: "startDate",
            id: "startDate",
            type: "date",
            placeholder: "Select start date",
          },
          {
            name: "endDate",
            id: "endDate",
            type: "date",
            placeholder: "Select end date",
          },
        ],
      },
      {
        id: uuid(),
        set: [
          {
            name: "companyName2",
            id: "companyName2",
            placeholder: "Enter your company name",
          },
          {
            name: "positionTitle2",
            id: "positionTitle2",
            placeholder: "Enter your position title",
          },
          {
            name: "responsibilities2",
            id: "responsibilities2",
            placeholder: "Enter main responsibilities",
          },
          {
            name: "startDate2",
            id: "startDate2",
            type: "date",
            placeholder: "Select start date",
          },
          {
            name: "endDate2",
            id: "endDate2",
            type: "date",
            placeholder: "Select end date",
          },
        ],
      },
    ],
  },
];

export { formTemplate };
