import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SearchCTA from "../components/cta-search";

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="px-4 py-5 my-5 text-center">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    <SearchCTA />
  </>
);

export default NotFoundPage;
