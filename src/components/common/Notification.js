import React from "react";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

const createNotification = ({ category, message }) => {
  switch (category) {
    case "success":
      NotificationManager.success(message, '', 1000);
      break;
    case "error":
      NotificationManager.error(message, '', 1500);
      break;
    case "warning":
      NotificationManager.warning(message, '', 1500);
      break;
    default:
  }
};

const Notification = props => {
  const { notification } = props;
  createNotification(notification);
  return <NotificationContainer />;
};

function mapStatetoProps(state) {
  return {
    notification: state.notification
  };
}

export default connect(mapStatetoProps)(Notification);
