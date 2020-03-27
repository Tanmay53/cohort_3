/** @format */

import { ADD_TEACHER_SUBJECT, ADD_CLASS_SECTION } from "./actionTypes";

export const addTeachers = payload => ({
  type: ADD_TEACHER_SUBJECT,
  payload
});

export const addClasses = payload => ({
  type: ADD_CLASS_SECTION,
  payload
});
