
//const { injectAxe, checkA11y, configureAxe, getViolations, reportViolations } = require ('axe-playwright')

function parseViolations(violations){
    var results='';
    var violationsSize = violations.length;
    var separator = ' | ';
    var endline = '\n';
  
    if (violationsSize > 0){
      results = results + endline + 'Found ' + violationsSize + ' accessibility violations.' + endline;
      var index = 0;
      violations.forEach(element => {
        results = results + index + ' - ' + element.id + separator + element.impact + separator + element.description + endline;
        index++;
      });
    }
    return results;
}

export {parseViolations};