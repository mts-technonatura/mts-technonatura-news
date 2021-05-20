import React, { useState } from "react";
import { Icon, Button } from "design-react-kit";

export default function CTASearch() {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <section id="novita">
      <div
        className="section section-background-header"
        style={{ backgroundImage: "url('https://picsum.photos/1200/400')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
              <form>
                <div className="form-group mb-1">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <button className="border-0 px-0" type="submit">
                          <Icon
                            color=""
                            icon="it-search"
                            padding={false}
                            size="icon-sm"
                          />
                        </button>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      id="exampleInputText"
                      type="text"
                      value={keyword}
                      onChange={e => {
                        setKeyword(e.target.value);
                      }}
                    />
                    {!keyword && (
                      <label
                        htmlFor="exampleInputText"
                        style={{
                          width: "auto",
                        }}
                      >
                        What are you looking for?
                      </label>
                    )}
                  </div>
                </div>
              </form>
              <Button
                className="mt-3 mr-1"
                color="primary"
                href="#"
                icon={false}
                size="sm"
                tag="button"
              >
                Developers News
              </Button>
              <Button
                className="mt-3 mr-1"
                color="primary"
                href="#"
                icon={false}
                size="sm"
                tag="button"
              >
                Events News
              </Button>
              <Button
                className="mt-3 mr-1"
                color="primary"
                href="#"
                icon={false}
                size="sm"
                tag="button"
              >
                General News
              </Button>
              <Button
                className="mt-3 mr-1"
                color="primary"
                href="#"
                icon={false}
                size="sm"
                tag="button"
              >
                Recent Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
