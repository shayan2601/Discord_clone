import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message(props) {
  return (
    <div className="Message">
      <Avatar src={props.user.photo} />
      <div className="message_info">
        <h4>
          {props.user.displayName}
          <span className="message_timestamp">
            {new Date(props.timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Message;
