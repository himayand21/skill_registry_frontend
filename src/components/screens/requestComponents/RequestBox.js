import React from "react";

import { requestKeys } from "../../constants";
import { Row } from "../../common";
import RequestButtons from "./RequestButtons";

const RequestBox = props => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="request-box">
        {requestKeys.map(row => (
          <Row key={"row" + row} label={row} description={props[row]} />
        ))}
        <RequestButtons id={props._id} />
      </div>
    </div>
  );
};

export default RequestBox;
