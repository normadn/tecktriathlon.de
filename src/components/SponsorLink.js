import React from "react";

const SponsorLink = (props) => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
    data-cy="sponsor-link"
    onClick={() => {
      // Track outbound link clicks in Google Analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "click", {
          event_category: "outbound",
          event_label: props.url,
          transport_type: "beacon"
        });
      }
    }}
  >
    {props.children}
  </a>
);

SponsorLink.displayName = 'SponsorLink';

export default SponsorLink;
