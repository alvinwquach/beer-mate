import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "grid",
        width: "100%",
        gridAutoFlow: "row",
        placeItems: "start",
        rowGap: "2.5 rem",
        columnGap: "1rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          gridAutoFlow: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="p"
          sx={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: "400",
          }}
        >
          Designed and developed by{" "}
          <span
            style={{
              textTransform: "capitalize",
            }}
          >
            alvin quach
          </span>
          &copy;
        </Box>
      </div>
      <div
        style={{
          gridAutoFlow: "column",
          gap: "1rem",
        }}
        className="grid-flow-col gap-4 dark:text-zinc-800 md:place-self-center md:justify-self-end"
      >
        <a
          href="http://github.com/alvinwquach"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="open link to alvins github profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="fa-2x hover:text-neutral"
          />
        </a>
        <a
          href="https://linkedin.com/in/alvin-quach-02a7314b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="open link to alvins linkedin profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa-2x hover:text-neutral"
          />
        </a>
        <a
          href="https://twitter.com/MisterSJC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="open link to alvins twitter profile"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa-2x hover:text-neutral"
          />
        </a>
      </div>
    </Box>
  );
}

export default Footer;
