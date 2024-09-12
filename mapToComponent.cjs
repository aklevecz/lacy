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
  const svgContent = data.replace(/<\?xml.*?\?>/, "").replace('<svg ', '<svg {style} ').replace(/ isolation="isolate"/g, '').replace(/text-orientation="sideways-right" /g,'').trim();

  // Wrap the SVG content in a Svelte component template
  const svelteComponentContent = `
  <script>
  import { browser } from "$app/environment";
  import data from "$lib/data";
  import { onMount } from "svelte";
  import Modal from "./modal.svelte";
  import { goto } from "$app/navigation";

  /** @type {{style:string}} props */
  let { style } = $props();

  let showDoNotEnter = $state(false);
  onMount(() => {
    if (browser) {
      const allRecs = document.querySelectorAll("rect");
      const unitRecs = Array.from(allRecs).filter((rec) => rec.id.includes("unit"));

      for (const unitRec of unitRecs) {
        const unitNumber = unitRec.id.replace("unit_x5F_", "");
        const artist = data.find((artist) => artist.unit === unitNumber);

        if (artist) {
          unitRec.style.fill = "green";
          unitRec.style.opacity = "0.25";
        } else {
          unitRec.style.fill = "black";
          unitRec.style.opacity = "0.75";
        }

        unitRec.addEventListener("click", () => {
          if (artist) {
            const link = "/"+artist.name;
            goto(link);
          } else {
            showDoNotEnter = true;
          }
        });
      }
    }
  });
</script>
<Modal bind:showModal={showDoNotEnter} title="DO NOT ENTER">
  <p>Sorry, this is a private studio. Please do not enter.</p>
</Modal>

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
