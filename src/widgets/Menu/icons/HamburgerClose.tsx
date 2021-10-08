import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M5.00821 4.06817C4.78804 3.85521 4.49316 3.73737 4.18708 3.74003C3.881 3.7427 3.58821 3.86565 3.37177 4.08241C3.15533 4.29917 3.03256 4.59239 3.0299 4.89892C3.02724 5.20545 3.1449 5.50077 3.35755 5.72126L10.0991 12.4728L3.35638 19.2243C3.24489 19.3321 3.15595 19.4611 3.09477 19.6037C3.03359 19.7464 3.00139 19.8998 3.00004 20.055C2.9987 20.2102 3.02823 20.3642 3.08693 20.5079C3.14563 20.6515 3.23231 20.7821 3.34191 20.8918C3.45152 21.0016 3.58186 21.0884 3.72532 21.1472C3.86879 21.206 4.02251 21.2356 4.17751 21.2342C4.33251 21.2329 4.48569 21.2006 4.62812 21.1394C4.77054 21.0781 4.89935 20.989 5.00704 20.8774L11.7497 14.1259L18.4913 20.8774C18.7115 21.0903 19.0063 21.2082 19.3124 21.2055C19.6185 21.2028 19.9113 21.0799 20.1277 20.8631C20.3442 20.6464 20.4669 20.3531 20.4696 20.0466C20.4723 19.7401 20.3546 19.4448 20.1419 19.2243L13.4004 12.4728L20.1419 5.72126C20.3546 5.50077 20.4723 5.20545 20.4696 4.89892C20.4669 4.59239 20.3442 4.29917 20.1277 4.08241C19.9113 3.86565 19.6185 3.7427 19.3124 3.74003C19.0063 3.73737 18.7115 3.85521 18.4913 4.06817L11.7497 10.8197L5.00821 4.067V4.06817Z" />
    </Svg>
  );
};

export default Icon;
