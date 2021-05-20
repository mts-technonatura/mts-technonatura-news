import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  Button,
  Collapse,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  HeaderLinkZone,
  Icon,
  LinkList,
  LinkListItem,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown,
} from "design-react-kit";

function capitalize(str) {
  console.log(str);
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

function getSectionFullName(section) {
  if (section === "documenti") {
    return "Documenti e Dati";
  }
  if (section === "novita") {
    return "Novità";
  }
  return section;
}

function getSectionFromLocation({ pathname } = {}) {
  if (pathname === "/") {
    return "";
  }
  if (/amministrazione/.test(pathname)) {
    return "amministrazione";
  }
  if (/novita/.test(pathname)) {
    return "novita";
  }
  if (/servizi/.test(pathname)) {
    return "servizi";
  }
  if (/documenti/.test(pathname)) {
    return "documenti";
  }
}

const SlimHeaderFullResponsive = ({ theme }) => {
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive href="https://mts-tn.vercel.app">
          Main Website
        </HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              EN-UK
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>EN-UK</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>BAHASA</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button color="primary" size="full" className="btn-icon" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const SlimHeader = ({ theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <Link to="https://mts-tn.vercel.app" className="d-none d-lg-block">
          <HeaderBrand>Main Website</HeaderBrand>
        </Link>
        <HeaderLinkZone>
          <HeaderToggler onClick={() => toggleDropdown(!isOpen)}>
            <span>Other Websites</span>
            <Icon icon="it-expand" />
          </HeaderToggler>
          <Collapse isOpen={isOpen} header>
            <LinkList tag="div">
              {/* <LinkListItem href="#" tag="a">
                Main Website
              </LinkListItem> */}
              <LinkListItem
                href="https://forum.mts-technonatura.vercel.app/"
                tag="a"
              >
                Forum
              </LinkListItem>
              <LinkListItem href="https://mts-tn.vercel.app/app" tag="a">
                Dashboard
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              EN-UK
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>EN-UK</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>BAHASA</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* <div className="it-access-top-wrapper">
            <Button color="primary" size="sm">
              Login
            </Button>
          </div> */}
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const CenterHeader = ({ theme, townName, townTagLine }) => {
  return (
    <Header type="center" theme={theme}>
      <HeaderContent>
        <Link to="/" className="text-decoration-none">
          <HeaderBrand>
            <h2>{townName}</h2>
            <h3>{townTagLine}</h3>
          </HeaderBrand>
        </Link>
        <HeaderRightZone>
          <div
            href="#"
            className="it-search-wrapper text-white text-decoration-none"
            style={{ cursor: "pointer" }}
          >
            <div className="it-search-wrapper">
              <span class="d-none d-md-block text-white">Search Engine</span>
              <a class="search-link rounded-icon" ariaLabel="Search Engine">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon m-0"
                >
                  <path d="M21.9 21.1L16 15.3a8.3 8.3 0 002-5.3 8 8 0 10-8 8 8.3 8.3 0 005.3-2l5.8 5.9zM10 17a7 7 0 117-7 7 7 0 01-7 7z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </a>
            </div>
          </div>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const NavHeader = ({ active, theme }) => {
  const [isOpen, toggleDropdown] = useState(false);
  return (
    <Header type="navbar" theme={theme}>
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          onClick={() => toggleDropdown(!isOpen)}
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse
          isOpen={isOpen}
          navbar
          header
          onOverlayClick={() => toggleDropdown(!isOpen)}
        >
          <div className="menu-wrapper">
            <Nav navbar>
              {[
                {
                  link: "/",
                  "en-uk": "Home",
                  bahasa: "Utama",
                },
                {
                  link: "/events",
                  "en-uk": "events",
                  bahasa: "acara",
                },
                {
                  link: "/developers",
                  "en-uk": "developers",
                  bahasa: "pengembang",
                },
                {
                  link: "/categories",
                  "en-uk": "categories",
                  bahasa: "Kategori",
                },
                {
                  link: "/news",
                  "en-uk": "News",
                  bahasa: "Berita",
                },
              ].map(label => {
                const isActive = label.link === active;
                console.log(label.link, active);
                return (
                  <NavItem active={isActive} key={label}>
                    <NavLink to={`${label.link}`} active={isActive} tag={Link}>
                      <span>
                        {capitalize(getSectionFullName(label["en-uk"]))}
                      </span>
                      {isActive && <span className="sr-only">current</span>}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
            {/* <Nav navbar className="navbar-secondary">
              {[
                { label: "Argomento 1" },
                { label: "Argomento 2" },
                { label: "Tutti gli argomenti...", bold: true },
              ].map(({ label, bold }) => {
                return (
                  <NavItem key={label}>
                    <NavLink to={`/${label}`} tag={Link}>
                      <span className={`${bold ? "font-weight-bold" : ""}`}>
                        {label}
                      </span>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav> */}
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

const CompleteHeader = ({ location, sticky, theme, type, town }) => {
  console.log(location);
  const SlimTag = type === "default" ? SlimHeader : SlimHeaderFullResponsive;

  const page = getSectionFromLocation(location);
  const { name, tagLine } = town;
  return (
    <Headers sticky={!!sticky}>
      <SlimTag theme={theme} />
      <div className="it-nav-wrapper">
        <CenterHeader theme={theme} townName={name} townTagLine={tagLine} />
        <NavHeader theme={theme} active={location.pathname} />
      </div>
    </Headers>
  );
};

CompleteHeader.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string,
  town: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagLine: PropTypes.string,
  }),
};

CompleteHeader.defaultProps = {
  type: "default",
};

export default CompleteHeader;
