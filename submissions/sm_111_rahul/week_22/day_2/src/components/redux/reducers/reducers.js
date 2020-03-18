/** @format */

import { ADD_TEACHER_SUBJECT, ADD_CLASS_SECTION } from "../action/actionTypes";

const initialState = {
  classes: [
    {
      "Class 1": ["A", "B"]
    },
    {
      "Class 2": ["A"]
    },
    {
      "Class 3": ["A", "B"]
    }
  ],
  teachers: [
    {
      id: 1,
      teacher: "Nrupul",
      subject: "Science",
      sections: "A",
      class2: "Class 1"
    }
  ]
};

const teachersReducers = (state = initialState, action) => {
  let id = 1;

  switch (action.type) {
    case ADD_TEACHER_SUBJECT:
      id++;
      console.log({ ...action.payload, id });
      return {
        ...state,
        teachers: [...state.teachers, { ...action.payload }]
      };
    case ADD_CLASS_SECTION:
      
      return {
        ...state,
        classes: [...state.classes]
      };
    default: {
      return state;
    }
  }
};

export default teachersReducers;
