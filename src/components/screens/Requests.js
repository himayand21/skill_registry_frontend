import React from 'react';
import { connect } from "react-redux";

import {
   fetchRequests,
   toggleRequest,
} from "../../actions";

import { Title, Toggle, BlankMessage } from '../common';
import { RequestBox } from './requestComponents';
import { REQUEST_FLAG, PENDING, APPROVED } from '../../constants';

class Requests extends React.Component {
   componentDidMount() {
      const { userData, token } = this.props.store;
      const { userId } = userData;
      this.props.fetchRequests({ userId, token });
   }
   render() {
      const {
         pending,
         approved,
         token,
         userData,
         requestFlag
      } = this.props.store;
      const { userId } = userData
      const requests = requestFlag ? approved : pending;
      const formField = {
         key: REQUEST_FLAG,
         label: requestFlag ? APPROVED : PENDING
      }
      return (
         <React.Fragment>
            <Title title="Requests" />
            <div className="request-toggle">
               <Toggle
                  formField={formField}
                  onChange={requestToggle => this.props.toggleRequest({ userId, token }, requestToggle)}
                  value={requestFlag}
               />
            </div>
            <div className="container-fluid request-feed">
               {requests.length > 0 ? requests.map((request, index) =>
                  <RequestBox
                     key={"request" + index}
                     {...request}
                  />) : <BlankMessage message="No requests yet!" />}
            </div>
         </React.Fragment>
      );
   }
}

function mapStatetoProps(state) {
   return {
      store: state.user
   };
}

export default connect(
   mapStatetoProps,
   {
      fetchRequests,
      toggleRequest,
   }
)(Requests)
