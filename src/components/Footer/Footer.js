import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
      <footer class="main__Footer">
        <a href="mail:dannywmarks@gmail.com" class="footer__link">
          dannywmarks@gmail.com
        </a>
        <ul class="social-list">
          <li class="social-list__item">
            <a href="www.twitter.com/dannydamageajj" class="social_list__link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li class="social-list__item">
            <a href="http://www.youtube.com/" class="social_list__link">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li class="social-list__item">
            <a
              href="https://www.linkedin.com/n/dannywmarks"
              class="social_list__link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li class="social-list__item">
            <a
              href="https://www.github.com/dannywmarks"
              class="social_list__link"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
