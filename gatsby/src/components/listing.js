import React from 'react';


const PageTemplate = props => {
  const { title = null, paragraphs = null } = props.pageContext;
  return (
    <React.Fragment>
      {title && <h1>{name}</h1>}
      {paragraphs &&
        paragraphs.map(para => (
          <div>
            <h2>{detaliipret.pret}</h2>
            <p>{detaliipret.periodata}</p>
          </div>
        ))}
    </React.Fragment>
  );
};
export default PageTemplate;