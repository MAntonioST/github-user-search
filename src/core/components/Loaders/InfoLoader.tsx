import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={870}
    height={250}
    viewBox="0 0 870 250"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="870" height="250" />
  </ContentLoader>
)

export default InfoLoader;