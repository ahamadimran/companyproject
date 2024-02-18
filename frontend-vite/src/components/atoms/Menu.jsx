import React from "react";

export default function Menu(props) {
  return (
    <div>
      <div className="navbar-start">
        {props.menu.map((m, id) => {
          if (m.link === "") {
            return (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">{m.title}</a>

                <div className="navbar-dropdown">
                  {m.submenu.map((sub, id) => (
                    <a key={id} className="navbar-item" href={sub.link}>
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <a key={id} className="navbar-item" href={m.link}>
                {m.title}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
