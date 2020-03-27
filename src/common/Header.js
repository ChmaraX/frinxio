import TweenOne from "rc-tween-one";
import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";
import { Button, Dropdown, Icon, Menu } from "semantic-ui-react";
import { AuthContext } from "../auth/AuthProvider";
import logo from "../images/logo.png";

const navItems = [
  {
    title: "Home",
    type: "scroll",
    path: "/"
  },
  {
    title: "Products",
    type: "scroll",
    el: "frinxMachine-wrapper",
    path: "/"
  },
  {
    title: "Docs",
    type: "dropdown",
    path: "/",
    children: [
      {
        title: "FRINX Docs",
        redirect: true,
        link: "https://docs.frinx.io/"
      },
      {
        title: "FRINX on GitHub",
        redirect: true,
        link: "https://github.com/FRINXio"
      },
      {
        title: "FRINX Labs & Training",
        redirect: true,
        link: "https://frinxio.github.io/Learning-Labs/"
      }
    ]
  },
  {
    title: "Support",
    redirect: true,
    link: "https://frinxhelpdesk.atlassian.net/servicedesk/customer/portal/7",
    path: "/"
  },
  {
    title: "About",
    type: "dropdown",
    el: "about-title",
    path: "/",
    children: [
      {
        title: "Company",
        path: "/company"
      },
      {
        title: "Contact Us",
        path: "/contact"
      },
      {
        title: "Privacy Policy",
        path: "/privacy-policy"
      }
    ]
  },
  {
    title: "Blog",
    type: "scroll",
    el: "blog",
    path: "/"
  },
  {
    title: "Careers",
    type: "link",
    path: "/careers"
  }
];

function Header(props) {
  const { currentUser } = useContext(AuthContext);

  return (
    <TweenOne animation={{ opacity: 0, type: "from" }} className="header">
      <div className="home-page">
        <Menu fluid className="header-menu">
          <Menu.Item
            className="header-logo"
            onClick={() => props.history.push("/")}
          >
            <TweenOne animation={{ x: -30, type: "from", ease: "easeOutQuad" }}>
              <img width="100%" src={logo} alt="img" />
            </TweenOne>
          </Menu.Item>
          <Menu.Menu position="right">
            {navItems.map(item => {
              if (item.type === "dropdown") {
                return (
                  <Dropdown item text={item.title}>
                    <Dropdown.Menu>
                      {item.children.map(i => {
                        return (
                          <Dropdown.Item
                            onClick={
                              i.redirect
                                ? () => window.open(i.link, "_blank")
                                : () => props.history.push(i.path)
                            }
                          >
                            {i.title}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              } else {
                return (
                  <Link
                    to={item.el}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="link"
                    onClick={
                      item.redirect
                        ? () => window.open(item.link, "_blank")
                        : () => props.history.push(item.path)
                    }
                  >
                    <Menu.Item>{item.title}</Menu.Item>
                  </Link>
                );
              }
            })}
            <Menu.Item>
              <Button
                circular
                onClick={() =>
                  props.history.push(currentUser ? "/profile" : "/login")
                }
              >
                {currentUser ? "Profile" : "Sign in"}
              </Button>
            </Menu.Item>
            <span>
              <Icon
                onClick={() =>
                  window.open("https://github.com/FRINXio", "_blank")
                }
                size="large"
                name="github"
              />
              <Icon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/frinx/",
                    "_blank"
                  )
                }
                size="large"
                name="linkedin"
              />
              <Icon
                onClick={() =>
                  window.open("https://www.instagram.com/frinx_io/", "_blank")
                }
                size="large"
                name="instagram"
              />
            </span>
          </Menu.Menu>
        </Menu>
      </div>
    </TweenOne>
  );
}

export default withRouter(Header);
