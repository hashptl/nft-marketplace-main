import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Spinner animation="border" style={{ display: "flex" }} />
      <p className="mx-3 my-0">Awaiting Metamask Connection...</p>
    </div>
  );
}

export default Loading;
