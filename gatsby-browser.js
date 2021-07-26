import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/loader";

export const wrapRootElement = ({ element }) => {
  return (
    <PlasmicRootProvider>
      {element}
    </PlasmicRootProvider>
  );
}