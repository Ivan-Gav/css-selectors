const sidePanelTemplate =
`
<div class="side-headline">
<h2 class="side-header">
  <span class="side-header_text"> { sideHeader } </span>
  <span class="side-header_check"><i class="fa-solid fa-check"></i></span>
</h2>
<div class="level-nav">
  <span id="nav-left"><i class="fa-solid fa-chevron-left"></i></span>
  <span id="nav-right"><i class="fa-solid fa-chevron-right"></i></span>
</div>
<div class="burger">
  <i class="fa-solid fa-bars"></i>
</div>
</div>
<div class="progress">
<div class="progress-bar"></div>
</div>
<h3 class="help-title"> { helpTitle } </h3>
<p class="help-sub-title"> { helpSubTitle } </p>
<p class="syntax"> { syntax } </p>
<p class="description"> { description } </p>
`;

export default sidePanelTemplate