import React from "react";
import { Link } from "gatsby";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Icon,
  LinkList,
  LinkListItem,
} from "design-react-kit";

const Footer = ({ town }) => (
  <footer className="it-footer">
    <div className="it-footer-main">
      <Container>
        <section>
          <Row className="clearfix">
            <Col sm={12}>
              <div className="it-brand-wrapper">
                <Link to="#" className="">
                  {/* <Icon icon="it-pa" /> */}
                  <div className="it-brand-text">
                    <h2 className="no_toc">{town.name}</h2>
                    <h3 className="no_toc d-none d-md-block">{town.tagLine}</h3>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Amministrazione">
                  MTs TechnoNatura Networks
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {[
                  { title: "Main Website", link: "https://mt-tn.vercel.app" },
                  {
                    title: "Forum",
                    link: "https://forum.mts-technonatura.vercel.app",
                  },
                  {
                    title: "Dashboard",
                    link:
                      "https://dashboard.mts-technonatura.vercel.app/dashboard",
                  },
                ].map(network => (
                  <LinkListItem
                    key={network.title}
                    href={network.link}
                    title={`MTs TechnoNatura Netwrok: ${network.title}`}
                  >
                    {network.title}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="/categories" title="Vai alla pagina: Servizi">
                  News Categories
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {["Developers", "General", "Quick News"].map(label => (
                  <LinkListItem
                    key={label}
                    href={`/category/${label}`}
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6} className="pb-2">
              <h4>
                <Link to="#" title="Vai alla pagina: Novità">
                  Novità
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {["Notizie", "Eventi", "Comunicati Stampa"].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h4>
                <Link to="#" title="Vai alla pagina: Documenti">
                  Follow us!
                </Link>
              </h4>
              <LinkList className="footer-list clearfix">
                {[
                  "Github",
                  "Delibere, determine e ordinanze",
                  "Bandi",
                  "Concorsi",
                  "Albo pretorio",
                ].map(label => (
                  <LinkListItem
                    key={label}
                    href="#"
                    title={`Vai alla pagina: ${label}`}
                  >
                    {label}
                  </LinkListItem>
                ))}
              </LinkList>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
    <div className="it-footer-small-prints clearfix">
      <Container>
        <h3 className="sr-only">Sezione Link Utili</h3>
        <ul className="it-footer-small-prints-list list-inline mb-0 d-flex flex-column flex-md-row">
          <li className="list-inline-item">
            <Link to="#" title="Privacy-Cookies">
              Privacy policy
            </Link>
          </li>
        </ul>
        <p className="pb-5 pl-3 pr-3 mb-0 text-secondary">
          (c) 2021 Aldhanekaa, this website built with gatsbyjs, reactjs, and
          use{" "}
          <a
            href="https://italia.github.io/design-react-kit"
            style={{ color: "#5a768a" }}
          >
            Italia React Design Kit UI Components
          </a>
        </p>
      </Container>
    </div>
  </footer>
);

export default Footer;
