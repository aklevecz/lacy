const fs = require("fs");
const path = require("path");

// Define file paths
const svgFilePath = path.join(__dirname, "static", "lacy-map.svg");
const svelteFilePath = path.join(__dirname, "src", "lib", "components", "lacy-map.svelte");

// Read the SVG file
fs.readFile(svgFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading SVG file:", err);
    return;
  }

  // Remove the <?xml tag
  const svgContent = data.replace(/<\?xml.*?\?>/, "").replace('<svg ', '<svg {style} ').replace(/ isolation="isolate"/g, '').trim();

  // Wrap the SVG content in a Svelte component template
  const svelteComponentContent = `<script>
  /** @type {{style:string}} props */
  let { style } = $props();
</script>

<style>
    /* Add any necessary styles here */
</style>

${svgContent}`;

  // Write the Svelte component file
  fs.writeFile(svelteFilePath, svelteComponentContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing Svelte component file:", err);
      return;
    }
    console.log("Svelte component created successfully:", svelteFilePath);
  });
});
