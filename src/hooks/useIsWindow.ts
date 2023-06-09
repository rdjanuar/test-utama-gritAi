import { useEffect, useState } from "react";
import { useIsoMoorphicEffect } from "./useIsoMorphicEffect";

export const useIsWindow = () => {
  const [isWindow, setIsWindow] = useState(false);

  useIsoMoorphicEffect(() => {});

  return isWindow;
};
