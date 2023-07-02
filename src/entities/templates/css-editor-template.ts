const cssEditorTemplate = 
`
<div class="editor-header">
  <span>CSS Editor</span>
  <span>style.css</span>
</div>
<div class="editor-body">
  <div class="editor-line-numbers">
    1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
  </div>
  <div class="editor-code">
    <div class="input-container">
     <input id="input" class="input-strobe" type="text" placeholder="Type in a CSS selector">
     <button class="enter-button">enter</button>
    </div>
    {<br>
    &nbsp;&nbsp;/* Styles would go here. */<br>
    }<br><br>
    <div class="codehint">
      /*<br>
      Type a number to skip to a level.<br>
      Ex → "5" for level 5<br>
      */
    </div>
  </div>
</div>
`;

export default cssEditorTemplate;