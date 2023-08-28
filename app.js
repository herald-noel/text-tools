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
  textarea.value = text
    //knee son text tools
    .split(" ")
    //['knee','son', 'text', 'tools']
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    //['K'+'nee','S'+'on', 'T'+'ext', 'T'+'ools']
    .join(" ");
    //'Knee'+' '+'Son'+''+'Text'+''+'Tools'
});
