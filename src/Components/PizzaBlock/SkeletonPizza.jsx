import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonPizza = (props) => (
  <div className="pizza-block__wrapper">
    <ContentLoader className="pizza-block" speed={2} width={280} height={478} viewBox="0 0 280 478" backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
      <rect x="0" y="272" rx="20" ry="20" width="280" height="29" />
      <circle cx="137" cy="127" r="127" />
      <rect x="0" y="322" rx="16" ry="16" width="280" height="72" />
      <rect x="10" y="420" rx="0" ry="0" width="100" height="38" />
      <rect x="127" y="415" rx="20" ry="20" width="141" height="45" />
    </ContentLoader>
  </div>
);

export default SkeletonPizza;
