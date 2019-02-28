import React from "react";

type Props = {
  className?: string;
};

const ContributingImage = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 24 24" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        fill="none"
        stroke="#AB9879"
        strokeWidth="2"
        d="M5,1 L19,1 L19,1 C21.209139,1 23,2.790861 23,5 L23,13 L23,13 C23,15.209139 21.209139,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.790861 2.790861,1 5,1 Z M5,7 L18,7 M5,11 L14,11"
        transform="matrix(-1 0 0 1 24 0)"
      />
    </g>
  </svg>
);

export default ContributingImage;
