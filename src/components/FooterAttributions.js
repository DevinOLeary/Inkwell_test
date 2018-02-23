import React from 'react';

const Attributions = (props) => {
  const contentfulWatermark = {
    maxWidth: '100px',
    width: '100%'
  }
  return (
    <div className="container column center" style={props.style}>
      <a href="https://www.contentful.com/" rel="nofollow" target='_blank'><img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style={contentfulWatermark} alt="Powered by Contentful" /></a>
      <h5>designed and built by <a href="http://www.devoleary.com/" rel="nofollow" target='_blank'>Devin OLeary</a></h5>
    </div>
  )
}

export default Attributions;
