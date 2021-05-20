import React from "react";
import { Link } from "gatsby";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Container,
  Icon,
  Input,
  Row,
  Col,
  LinkListItem,
  LinkList,
} from "design-react-kit";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { MdForum } from "react-icons/md";
import { FaGithub, FaDiscord } from "react-icons/fa";
const Documenti = ({ location }) => (
  <Layout location={location}>
    <SEO title="Documenti e Dati" />
    <main>
      <Container tag="section" id="briciole" className="px-4 my-4">
        <Row>
          <Col className="px-lg-4">
            <nav aria-label="breadcrumb" className="breadcrumb-container">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/homepage">Home</Link>
                  <span className="separator">/</span>
                </BreadcrumbItem>
                <BreadcrumbItem aria-current="page" active>
                  Developers
                </BreadcrumbItem>
              </Breadcrumb>
            </nav>
          </Col>
        </Row>
      </Container>
      <Container tag="section" id="intro" className="px-4 my-4">
        <Row>
          <Col lg={7} className="px-lg-4 py-lg-2">
            <h1>Developers News</h1>
            <p>
              Donec in consequat nunc. Duis semper fermentum lacus, ac
              condimentum justo auctor a. Nam erat erat, porta vel pharetra in,
              ullamcorper vel turpis.
            </p>
            <div className="form-group mt-5">
              <form>
                <Input
                  id="ricerca-servizi"
                  type="search"
                  label="What are you looking for?"
                />
                <span aria-hidden="true" className="autocomplete-icon">
                  <Icon icon="it-search" size="sm" />
                </span>
              </form>
            </div>
            <div id="filtri-ricerca-amministrazione">
              <h6 className="small">Filtri</h6>
              <div className="chip chip-lg">
                <span className="chip-label">Tutto</span>
                <button>
                  <Icon icon="it-close" />
                  <span className="sr-only">Elimina label</span>
                </button>
              </div>
              <div className="ml-2 d-inline">
                <button className="btn btn-icon btn-outline-primary btn-sm align-top">
                  <Icon icon="it-plus" color="primary" />
                  <span>Aggiungi filtro</span>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={{ size: 4, offset: 1 }} className="pt-5 pt-lg-2">
            <LinkList>
              {[
                "Tutti i documenti",
                "Documenti albo pretorio",
                "Modulistica",
                "Documenti funzionamento interno",
                "Normative",
                "Documenti attività politica",
                "Rapporti (tecnici)",
                "Dataset",
              ].map((label, i) => {
                if (i === 0) {
                  return (
                    <LinkListItem key={label} tag="h3" header>
                      {label}
                    </LinkListItem>
                  );
                }
                return (
                  <LinkListItem key={label} tag={Link} to="#">
                    <span>{label}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </Container>
      <section id="in-evidenza">
        <div className="bg-100 py-5">
          <Container className="px-4">
            <Row>
              <Col>
                <h3 className="mb-4 text-primary">In evidenza</h3>
              </Col>
            </Row>
            <Row>
              {[
                { title: "Atti", icon: "it-files", flagIcon: true },
                { title: "Atti", icon: "it-files" },
                { title: "Atti", icon: "it-files" },
                { title: "Comunicazione", icon: "it-files" },
                { title: "Dati", icon: "it-presentation" },
                { title: "Atti", icon: "it-files" },
              ].map(({ title, icon, flagIcon }, i) => (
                <Col size="12" sm={6} lg={4} key={`${title}-${i}`}>
                  <article className="card-wrapper card-space">
                    <Card noWrapper className="card-bg card-big rounded shadow">
                      <div
                        className={`flag-icon ${flagIcon ? "" : "invisible"}`}
                      ></div>
                      <div className="etichetta">
                        <Icon icon={icon} />
                        <span>{title}</span>
                      </div>
                      <CardBody>
                        <CardTitle tag="h5">
                          {i % 2
                            ? "Lorem ipsum dolor sit amet "
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…`}
                        </CardTitle>
                        <CardText>
                          {i % 2
                            ? `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.`
                            : `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed.`}
                        </CardText>
                        <CardReadMore
                          icon="it-arrow-right"
                          text="Leggi di più"
                          to="#"
                          tag={Link}
                        />
                      </CardBody>
                    </Card>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className="py-5">
          <Container className="px-4">
            <div class="text-white d-flex align-items-baseline titlewrapper mb-3 mb-md-5">
              <h3 className="mb-4 text-dark">Open Source Projects</h3>

              <a
                href="https://developers.mts-technonatura.vercel.app"
                target="_blank"
                class="ml-auto more"
              >
                See more &rarr;
              </a>
            </div>
            <Row>
              {[
                { title: "MTs TechnoNatura Website" },
                { title: "MTs TechnoNatura Server" },
              ].map(({ title }) => {
                return (
                  <Col size="12" sm={6} lg={4} key={title}>
                    <Card>
                      <CardBody>
                        <CardTitle tag="h5" className="text-dark big-heading">
                          {title}
                        </CardTitle>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </CardText>
                        <CardReadMore
                          icon="it-arrow-right"
                          text="Learn more"
                          to="#"
                          tag={Link}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <section
          class="home-discuss"
          style={{
            backgroundColor: "#2079d4",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            padding: "2rem 0",
          }}
        >
          <div class="container">
            <div class="text-white d-flex align-items-baseline titlewrapper mb-3 mb-md-5 border-bottom">
              <h2>Participate</h2>
            </div>
            <div class="row row-eq-height">
              <div class="col-sm-6 col-md-6 col-lg-3 my-3 mb-md-4 my-md-0 px-3">
                <a
                  target="_blank"
                  href="https://forum.italia.it"
                  class="decoration-none text-decoration-none"
                  title="Forum"
                >
                  <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center mb-0">
                      <h4
                        className="mb-3 flex-shrink-0"
                        style={{ marginRight: "10px" }}
                      >
                        <MdForum />
                      </h4>
                      <h4>Forum</h4>
                    </figure>
                    <div class="decoration-none flex-grow-1 ms-5">
                      <p>
                        Visit <strong>forum.mts-technonatura.vercel.app</strong>{" "}
                        to discuss the mts-technonatura website public digital
                        services: API, software, security and more. Join the
                        discussion!
                      </p>
                    </div>
                  </article>
                </a>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3 my-3 mb-md-4 my-md-0 px-3">
                <a
                  target="_blank"
                  href="https://forum.italia.it"
                  class="decoration-none text-decoration-none"
                  title="Forum"
                >
                  <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center mb-0">
                      <h4
                        className="mb-3 flex-shrink-0"
                        style={{ marginRight: "10px" }}
                      >
                        <FaDiscord />
                      </h4>
                      <h4>Discord</h4>
                    </figure>
                    <div class="decoration-none flex-grow-1 ms-5">
                      <p>
                        Chat with other mts-technonatura developers community
                        and make mts-technonatura websites better!
                      </p>
                    </div>
                  </article>
                </a>
              </div>

              <div class="col-sm-6 col-md-6 col-lg-3 my-3 mb-md-4 my-md-0 px-3">
                <a
                  target="_blank"
                  href="https://forum.italia.it"
                  class="decoration-none text-decoration-none"
                  title="Forum"
                >
                  <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center mb-0">
                      <h4
                        className="mb-3 flex-shrink-0"
                        style={{ marginRight: "10px" }}
                      >
                        <FaGithub />
                      </h4>
                      <h4>Our Github</h4>
                    </figure>
                    <div class="decoration-none flex-grow-1 ms-5">
                      <p>
                        We make various open source projects from various
                        programming languages.
                      </p>
                    </div>
                  </article>
                </a>
              </div>

              <div class="col-sm-6 col-md-6 col-lg-3 my-3 mb-md-4 my-md-0 px-3">
                <a
                  target="_blank"
                  href="https://docs.italia.it/"
                  class="decoration-none"
                  title="Docs"
                >
                  <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center">
                      <img
                        src="/assets/images/tools/Docs_Logo.svg"
                        alt=""
                        height="32"
                      />
                    </figure>
                    <div class="decoration-none">
                      <p>
                        <strong>Docs Italia</strong> is the platform for
                        publishing technical and legal documents, based on git
                        and ReadTheDocs.
                      </p>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  </Layout>
);

export default Documenti;
