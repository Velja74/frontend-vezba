import "./styles/main.scss";

import "./images/image.png";
import "./images/logo.png";


if (module.hot) {
    module.hot.accept(
      console.log("Module pdate accepted!") // Intentionally leaved as confirmation that hot module replacement works.
    );
  };