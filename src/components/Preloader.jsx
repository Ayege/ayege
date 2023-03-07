import React from "react";
import { ColorRing } from "react-loader-spinner";

function Preloader() {
  return (
    <div className="bg-eerie-black flex justify-center content-center items-center h-screen ">
      <ColorRing
        className="flex h-32 w-32"
        visible={true}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#F44336", "#03A9F4", "#8BC34A", "#FFC107", "#F44336"]}
      />
    </div>
  );
}

export default Preloader;
