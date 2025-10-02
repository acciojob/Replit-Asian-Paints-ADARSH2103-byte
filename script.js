//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");
    const gridItems = document.querySelectorAll(".grid-item");

    // Change color logic
    changeBtn.addEventListener("click", () => {
      const blockId = blockInput.value.trim();
      const color = colorInput.value.trim();

      // Reset all blocks to transparent first
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });

      // If blockId valid, set color
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock && color) {
        selectedBlock.style.backgroundColor = color;
      } else {
        alert("Please enter a valid Block ID (1-9) and a color!");
      }
    });

    // Reset logic
    resetBtn.addEventListener("click", () => {
      gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
      });
    });
  
