import React, { createContext, useState } from "react";

const FormContext = createContext([{}, () => {}]);

let initialState = {};

const FormProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <FormContext.Provider value={[state, setState]}>
      {props.children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
