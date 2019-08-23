import React from "react";
import { noCapitalize } from "../constants";

const Row = props => {
  const { label, description } = props;
  const value =
    !noCapitalize.includes(label) && description
      ? description.charAt(0).toUpperCase() + description.slice(1)
      : description;
  const title = label.replace(/([a-z])([A-Z])/g, "$1 $2");
  const tooLong = title.length > 10;
  return (
    <div className="row request-row">
      <div className={tooLong ? "col-xs-8" : "col-xs-4"}>
        {title.toUpperCase()}
      </div>
      {value instanceof Array ? (
        <div
          className={
            tooLong ? "request-desc col-xs-4" : "request-desc col-xs-8"
          }
        >
          <pre className="pretag-custom">{value.join("\r\n") || "N/A"}</pre>
        </div>
      ) : (
        <div
          className={
            tooLong ? "request-desc col-xs-4" : "request-desc col-xs-8"
          }
        >
          {value || "N/A"}
        </div>
      )}
    </div>
  );
};

export default Row;
