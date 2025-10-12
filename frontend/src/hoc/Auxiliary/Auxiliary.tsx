import React from "react";

interface AuxiliaryProps {
  children: React.ReactNode;
}

const Auxiliary: React.FC<AuxiliaryProps> = ({ children }) => children;

export default Auxiliary;