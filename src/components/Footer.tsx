import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="footer items-center bg-base-content p-4 text-neutral-content dark:bg-slate-300">
      <div className="grid-flow-col items-center">
        <p className="text-base font-normal dark:text-zinc-800">
          Designed and developed by{" "}
          <span className="capitalize">alvin quach</span>&copy;
        </p>
      </div>
      <div className="grid-flow-col gap-4 dark:text-zinc-800 md:place-self-center md:justify-self-end">
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
    </footer>
  );
}

export default Footer;
