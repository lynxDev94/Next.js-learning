import React from "react";

function NewsDetailLayout({ children, modal }) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}

export default NewsDetailLayout;
