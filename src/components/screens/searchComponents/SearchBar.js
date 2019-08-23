import React from "react";
import { connect } from "react-redux";

import { Form } from "../../common";
import { searchFields } from "../../constants";
import { updateParamState, getFilteredProfiles, resetSearch } from "../../../actions";
import { SKILLS, SKILL_OPTIONS } from "../../../constants";

const SearchBar = props => {
  const { searchParams, token } = props;
  const populatedFields = searchFields.map(field => {
    if (field.key === SKILLS)
      return {
        ...field,
        options: searchParams[SKILL_OPTIONS]
      };
    return {...field, required: false};
  });

  return (
    <div className="container-fluid">
        <Form
          buttonName="FIND"
          submit={() => props.getFilteredProfiles(token, searchParams)}
          fields={populatedFields}
          store={searchParams}
          updateState={props.updateParamState}
          columnDisplay={"true"}
          resetSearch={props.resetSearch}
        />
      </div>
  );
};

function mapStatetoProps(state) {
  return {
    searchParams: state.profilePool.searchParams,
    token: state.user.token
  };
}

export default connect(
  mapStatetoProps,
  { updateParamState, getFilteredProfiles, resetSearch }
)(SearchBar);
