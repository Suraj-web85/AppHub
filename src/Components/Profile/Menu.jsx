import React, { useState } from "react";

import Icons from "../../Common/Icons";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [openWindow, isWindowOpen] = useState(false);
  const handleWindow = () => {
    isWindowOpen(!openWindow);
  };
  const MenuData = [
    {
      id: 1,
      title: "MAIN",
      child: [
        {
          id: 1,
          icon: Icons.person,
          name: "Profile",
          url: ".",
          accessiblilty: "user",
        },
      ],
    },
    {
      id: 2,
      title: "VIEW",
      child: [
        {
          id: 2,
          icon: Icons.persons,
          name: "Users",
          accessiblilty: "admin",
        },
        {
          id: 3,
          icon: Icons.superuser,
          name: "Super-Users",
          accessiblilty: "admin",
        },
        {
          id: 4,
          icon: Icons.apprequest,
          name: "App Requests",
          accessiblilty: "admin",
        },
        {
          id: 5,
          icon: Icons.personplus,
          name: "Promotion",
          accessiblilty: "admin",
        },
        {
          id: 6,
          icon: Icons.personplus,
          name: "Uploaded Apks",
          accessiblilty: "suser",
        },
      ],
    },
    {
      id: 3,
      title: "GENERAL",
      child: [
        {
          id: 7,
          icon: Icons.upload,
          name: "Elements",
          accessiblilty: "suser",
        },
        {
          id: 8,
          icon: Icons.paperpencil,
          name: "Upload App",
          url: "upload",
          accessiblilty: "suser",
        },
      ],
    },
  ];
  const userRole = "suser";

  const filteredMenuData = MenuData.map((menu) => {
    if (userRole === "suser") {
      const filteredChild = menu.child.filter(
        (it) => it.accessiblilty !== "admin"
      );
      // console.log(filteredChild);
      return { ...menu, child: filteredChild };
    } else if (userRole === "user") {
      return {
        ...menu,
        child: menu.child.filter((i) => i.accessiblilty === "user"),
      };
    } else {
      return menu;
    }
  });

  // console.log(filteredMenuData, "filter");
  const renderedMenu = filteredMenuData.map((item) => (
    <div className="menu-sec" key={item.id}>
      <p className="mpara">{item.title}</p>
      {item.child.map((citem) => (
        <Link to={citem.url} className="menu-item aflex" key={citem.id}>
          <div className="mpara icon-container aflex">{citem.icon}</div>
          <p className="para">{citem.name}</p>
        </Link>
      ))}
    </div>
  ));

  return (
    <>
      <div className={`menu-container ${openWindow ? "" : "menu-gone"}`}>
        <div className="menu">
          {renderedMenu}
          <div className="menu-clsbtn mh" onClick={handleWindow}>
            {Icons.close}
          </div>
        </div>
      </div>
      <div className="menu-openbtn aflex mh" onClick={handleWindow}>
        {Icons.threedots}
      </div>
    </>
  );
};
