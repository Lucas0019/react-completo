import React, { useState } from "react";
import { Select } from "./Select";

export const CustomSelect = ({ options }) => {
  const [produto, setProduto] = useState("");

  return (
    <Select
      options={["smartphone", "tablet", "ps4", "ps5"]}
      value={produto}
      setValue={setProduto}
    />
  );
};
