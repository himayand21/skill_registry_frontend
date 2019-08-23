import React from "react";
import { connect } from "react-redux";

import { Title, BlankMessage } from "../common";
import { ProfileBox, SearchBar } from "./searchComponents";
import { populateSearchBar } from "../../actions";

class Search extends React.Component {
   componentDidMount() {
      const { token, back } = this.props;
      this.props.populateSearchBar({ token, back });
   }
   render() {
      const { pool } = this.props;
      return (
         <div>
            <Title title="Finder" />
            <SearchBar />
            <div className="container-fluid search-feed">
               <div class="row display-flex">
                  {pool.length > 0 ? pool.map((profile, index) => (
                     <ProfileBox key={"profile" + index} {...profile} />
                  )) : <BlankMessage message="No Search Results."/> }
               </div>
            </div>
         </div>
      );
   }
}

function mapStatetoProps(state) {
   return {
      token: state.user.token,
      pool: state.profilePool.pool,
      searchParams: state.profilePool.searchParams
   };
}

export default connect(
   mapStatetoProps,
   { populateSearchBar }
)(Search);
