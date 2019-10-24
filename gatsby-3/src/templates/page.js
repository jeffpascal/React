import React from 'react';
const PageTemplate = props => {
  const { title = null, paragraphs = null } = props.pageContext;
  return (
    <React.Fragment>
      {title && <h1>{title}</h1>}
      {paragraphs &&
        paragraphs.map(para => (
          <div>
            <h2>{para.heading}</h2>
            <p>{para.content}</p>
          </div>
        ))}
    </React.Fragment>
  );
};
export default PageTemplate;