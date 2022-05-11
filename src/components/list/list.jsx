import React, { useState } from "react";
import listStyles from "list.module.css";

export const ListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const content = loading ? (
    "loading"
  ) : data && data.length ? (
    <ChatsList chats={data} />
  ) : null;

  return (
    <div className={listStyles.container}>
      <div className={listStyles.list}>{content}</div>
    </div>
  );
};
