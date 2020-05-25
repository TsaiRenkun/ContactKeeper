import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        phone: "11111111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara",
        email: "Sara@gmail.com",
        phone: "22222222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry",
        email: "Harry@gmail.com",
        phone: "33333333",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Conctact

  //Set current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
