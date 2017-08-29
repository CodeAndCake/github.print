javascript:(function()
{ 
  var css =    
  '
  
  /* general rules for the "body" */
  #readme .markdown-body,
  .file
  {
    border: none; 
  }
  
  /* images */
  img  
  {
    max-width: 100%;
    vertical-align: middle;
  }
  
  /* tables */
  th, td, .markdown-body table tr
  {
    padding: 1rem;
    vertical-align: top;
  }
  
  /* TYPOGRAPHY */
  #readme .markdown-body, .file
  {
    font-family:Roboto;
    -webkit-font-smoothing: antialiased;
  }

  /* headings */
  h1, h2, .markdown-body
  {
    border-bottom:none;
  }
  
  .markdown-body blockquote
  {
    padding: 1rem 1.25rem;
    color: inherit;
    position: relative;
    margin-top: 2rem;
    background: #eee;
  }
  
  /* hide unneccessary elements */
  .header, header, 
  .pagehead, 
  .repository-sidebar, 
  .commit-tease, 
  .file-wrap, 
  .boxed-group>h3, 
  .site-footer, .footer,
  .file-navigation, 
  .file-header,
  .overall-summary,
  .js-repo-meta-container  
  {
    display:none;
  }
  
  /* page breaks */
  h1, .new-page
  {
    page-break-before: always;
  } 
  h1:first-child
  {
    page-break-before: avoid;
  }
  
  pre, 
  blockquote,
  li
  {
    page-break-inside: avoid;
  }

  /* Your turn! */
  /*blockquote:before 
  {
    content: "Your turn";
    position: absolute;
    color: #FF8F04;
    top: -1.3rem;
    left: -.3rem;
    font-size: 83%;
    font-weight: bold;
  }*/
  
  .markdown-body pre,
  .markdown-body .highlight pre,
  .markdown-body code
  {
    word-break: break-word;
    background-color: #ddd;
    border: 1px solid #ccc;
    font-family: "Roboto Mono";
    font-weight: 700;
  }
  
  .markdown-body pre,
  .markdown-body .highlight pre
  {
    padding: 1rem;  
    overflow: hidden;
    overflow-wrap: break-word;
  }
  
  .markdown-body code
  {
    padding: .18em .05em;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5
  {
    font-family: "Roboto Mono";
    margin-top: 4rem; 
    border-bottom: none;
  }
  
  
  ';
  
  var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    
document.head.appendChild(style);
 
}())
