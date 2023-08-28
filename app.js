const textarea = document.getElementById("user-text");

document.getElementById("lc").addEventListener("click", () => {
  const text = textarea.value;
  textarea.value = text.toLowerCase();
});

document.getElementById("uc").addEventListener("click", () => {
  const text = textarea.value;
  textarea.value = text.toUpperCase();
});

document.getElementById("tc").addEventListener("click", () => {
  const text = textarea.value;

  //knee son text tools
  //['knee','son', 'text', 'tools']
  //['K'+'nee','S'+'on', 'T'+'ext', 'T'+'ools']
  //'Knee'+' '+'Son'+''+'Text'+''+'Tools'
  
  textarea.value = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowercase())
    .join(" ");
});
