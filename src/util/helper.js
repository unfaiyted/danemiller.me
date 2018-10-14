// Helper functions


export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// This isnt working perfectly
//  TODO: rewrite this, so its not trash
export function isOnScreen(element)
{
  const pagePos = window.pageYOffset;

  const pagePosEnd = pagePos + window.innerHeight;

  const elePos = element.offsetTop;
  const elePosEnd = elePos + element.scrollHeight;

  // console.group(element.id);
  // console.log("elePos:", elePos);
  // console.log("elePosEnd:", elePosEnd);
  // console.log(":::::::::::::::::::::::");
  // console.log("pagePos:", pagePos);
  // console.log("pagePosEnd:", pagePosEnd);
  // console.groupEnd();

  // Page position AFTER START and BEFORE END
  return (elePos >= pagePos && elePosEnd >= pagePosEnd);
}
