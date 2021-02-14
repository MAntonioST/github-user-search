import React from 'react';
import ContentLoader from 'react-content-loader';


const ImageLoader = () => (
  <ContentLoader 
    speed={3}
    width={284}
    height={280}
    viewBox="0 0 284 280"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="284" height="280" /> 
  </ContentLoader>
)

export default ImageLoader;