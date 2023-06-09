import { useEffect, useLayoutEffect } from "react";

export const useIsoMoorphicEffect =
  typeof window === undefined ? useEffect : useLayoutEffect;
