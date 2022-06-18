import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

export function CustomCheckbox() {
  const [termos, setTermos] = useState([]);

  return (
    <div>
      <Checkbox
        options={["Termos de uso", "Política de privacidade"]}
        value={termos}
        setValue={setTermos}
      />
    </div>
  );
}
