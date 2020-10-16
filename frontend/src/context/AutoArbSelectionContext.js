import React from "react";

const SelectionContext = React.createContext(true)

export const SelectionProvider = SelectionContext.Provider 
export const SelectionConsumer = SelectionContext.Consumer 

export default SelectionContext