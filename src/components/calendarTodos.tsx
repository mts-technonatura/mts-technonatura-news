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

export default function Calendar() {
  const [onHover, setOnHover] = React.useState<boolean>();

  return (
    <React.Fragment>
      <div className="row-title pt-5 pb-3 row">
        <h2>Upcoming Events</h2>
      </div>
      <div className="row-calendar row">
        <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols it-calendar-wrapper">
          <div className="it-header-block">
            <div className="it-header-block-title">
              <h4 className="mb-0 text-center">2021 Year</h4>
            </div>
          </div>
          <div className="it-carousel-all owl-carousel it-card-bg owl-loaded owl-drag">
            <div
              className="owl-stage-outer"
              onMouseEnter={() => {
                setOnHover(true);
              }}
              onMouseLeave={() => {
                setOnHover(false);
              }}
              onTouchStart={() => {
                setOnHover(true);
              }}
              onTouchEnd={() => {
                setOnHover(false);
              }}
              style={{ overflowX: onHover ? "auto" : "hidden" }}
            >
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  display: "inline-flex",
                }}
              >
                <div
                  className="owl-item active"
                  style={{
                    width: "296px",
                  }}
                >
                  <div className="it-single-slide-wrapper">
                    <Card className="card-bg" noWrapper={false}>
                      <div className="card-body">
                        <h5>
                          24
                          <span className="ml-2">May</span>
                        </h5>
                        <p>
                          <a href="#">Masuk Libur Sekolah</a>
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav ">
              <button className="owl-prev" />
              <button className="owl-next" />
            </div>
            <div className="owl-dots">
              <button
                aria-labelledby="owl-dot-0"
                className="owl-dot active"
                role="button"
              >
                <span />
              </button>
              <button
                aria-labelledby="owl-dot-1"
                className="owl-dot"
                role="button"
              >
                <span />
              </button>
              <button
                aria-labelledby="owl-dot-2"
                className="owl-dot"
                role="button"
              >
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
