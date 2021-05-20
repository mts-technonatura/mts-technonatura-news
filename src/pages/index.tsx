// --jsx
import React from "react";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardCategory,
  CardReadMore,
  Icon,
  LinkListItem,
  LinkList,
} from "design-react-kit";

import SearchCTA from "../components/cta-search";
import Section2 from "../components/home/section2";

import SEO from "../components/seo";

const IndexPage = ({ location }: { location: string }) => (
  <>
    <SEO title="Homepage" />
    <section id="head-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2 offset-lg-1">
            <img
              src="https://picsum.photos/800/600"
              title="img title"
              alt="imagealt"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="card-wrapper">
              <div className="card">
                <div className="pb-5 card-body">
                  <div className="categoryicon-top">
                    <span className="text">Notizie</span>
                  </div>
                  <h4 className="card-title">
                    Parte l'estate con oltre 300 eventi in centro e nei
                    quartieri, tutti gli eventi previsti
                  </h4>
                  <p className="card-text">
                    Inaugurazione lunedì 2 luglio con il concerto gratuito in
                    piazza XX Settembre degli Sweet Soul Revue. Sul palco 20
                    musicisti da tutto il mondo.
                  </p>
                  <div className="chip chip-simple chip-primary">
                    <a className="chip-label" href="/#">
                      Estate in città
                    </a>
                  </div>
                  <a className="pb-3 read-more" href="#">
                    <span className="text">Tutte le novità</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Section2 />
    <SearchCTA />
  </>
);

export default IndexPage;
