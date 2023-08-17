import React, { Children } from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    //to open panels in new tab if ctrl+click on any tab
    if (event.metaKey || event.ctrlKey) return;

    //to prevent multiple services running each time when user navigates to another panel
    event.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <li class="nav-item">
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        onClick={onClick}
        href={href}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {children}
      </a>
    </li>
  );
};

export default Link;
