import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16.5707C22 16.5707 16.7721 12.1516 16.5855 12.0317L19.3966 4H10.0296V5.3834H4.41107C3.10672 5.3834 2.00182 6.2413 2 7.54893H3.18577C3.18577 7.0087 3.6253 6.56917 4.16553 6.56917H4.41107V9.01976H3.08763V17.8153H4.86589C5.44557 19.5689 7.93016 19.5678 8.50917 17.8153H11.6012C13.0855 19.5675 15.9271 19.5668 17.4107 17.8153H22V16.5707ZM11.2153 7.83399H16.7984L16.3834 9.01976H11.2153V7.83399ZM17.7253 5.18577L17.2134 6.64822H11.2153V5.18577H17.7253ZM5.59684 6.56917H10.0296V9.01976H5.59684V6.56917ZM6.68755 17.9526C6.2849 17.9526 5.95735 17.625 5.95735 17.2224C5.99747 16.2537 7.37779 16.254 7.41775 17.2224C7.41775 17.625 7.09016 17.9526 6.68755 17.9526ZM14.506 17.9515C13.0327 17.9515 11.8341 16.7529 11.8341 15.2796C11.8234 13.0568 14.4491 11.8028 16.1638 13.1866L16.1626 13.1879L16.3262 13.3262C18.0857 14.9581 16.9321 17.9457 14.506 17.9515Z"
      />
      <path d="M13.9131 14.6868H15.0989V15.8725H13.9131V14.6868Z" />
    </Svg>
  );
};

export default Icon;