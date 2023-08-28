const textarea = document.getElementById("user-text");

textarea.placeholder =
`Usage:
1. Enter the text you want to transform into the textarea.
2. Click on one of the transformation buttons:
  - Lower Case: Transforms the text to all lower case.
  - UPPER CASE: Transforms the text to all upper case.
  - Title Case: Transforms the text to Title Case, where the first letter of each word is capitalized.
3. The transformed text will be displayed in the textarea.`;

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
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    //['K'+'nee','S'+'on', 'T'+'ext', 'T'+'ools']
    .join(" ");
    //'Knee'+' '+'Son'+''+'Text'+''+'Tools'
});
