import React from "react";

import Header from "../src/components/Header";
import ContentWrapper from "../src/components/ContentWrapper";
import ActionButton from "../src/components/ActionButton";
import notFoundImg from "../src/assets/img/icons/404.svg";

export default function NotFound() {
  return (
    <div
      css={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        bottomMargin: "20px"
      }}
    >
      <Header standaloneVersion={true} />
      <section
        css={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center"
        }}
      >
        <ContentWrapper>
          <div
            css={{
              paddingTop: "200px"
            }}
          >
            <img
              src={notFoundImg}
              css={{
                width: "650px",
                "@media(max-width: 980px)": {
                  width: "500px"
                },
                "@media(max-width: 680px)": {
                  width: "400px"
                },
                "@media(max-width: 460px)": {
                  width: "250px"
                }
              }}
              data-cy="test-sponsor-image"
              alt="Tucows Logo"
            />
            <h1
              css={{
                fontSize: "44px",
                marginBottom: "20px",
                fontWeight: "700",
                "@media(max-width: 980px)": {
                  fontSize: "38px"
                }
              }}
            >
              Oops!
            </h1>
            <p
              css={{
                fontSize: "24px",
                color: "#00205b",
                fontWeight: "600",
                marginBottom: "30px",
                "@media(max-width: 980px)": {
                  fontSize: "20px"
                }
              }}
            >
              Hier lief etwas schief!
            </p>
            <ActionButton
              dataCy="404-button"
              backgroundColor="#f8f8f8"
              foregroundColor="#00205b"
              link="/"
              type="rounded"
              target="_self"
            >
              Zurück
            </ActionButton>
          </div>
        </ContentWrapper>
      </section>
    </div>
  );
}

