export async function day_2_part_1() {
  const file = Bun.file(`${import.meta.dir}/input.txt`);
  const content = await file.text();
  return content
    .split(/\r?\n|\r|\n/g)
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((line) => {
      const [key, value] = line.split(":");
      const game = parseInt(key.split(" ")[1]);
      const sets = value.split(";").map((x) => x.trim());
      let possible = true;

      for (const s of sets) {
        const rgb = [0, 0, 0];
        const colors = s.split(",").map((x) => x.trim());
        for (const c of colors) {
          const [colorNum, colorText] = c.split(" ");
          if (colorText === "red") {
            rgb[0] = rgb[0] + parseInt(colorNum);
          }
          if (colorText === "green") {
            rgb[1] = rgb[1] + parseInt(colorNum);
          }
          if (colorText === "blue") {
            rgb[2] = rgb[2] + parseInt(colorNum);
          }
        }
        const [r, g, b] = rgb;
        if (r > 12 || g > 13 || b > 14) {
          possible = false;
        }
      }

      return possible ? game : 0;
    })
    .reduce((x, y) => x + y, 0);
}

export async function day_2_part_2() {
  const file = Bun.file(`${import.meta.dir}/input.txt`);
  const content = await file.text();
  return content
    .split(/\r?\n|\r|\n/g)
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((line) => {
      const [_, value] = line.split(":");
      const sets = value.split(";").map((x) => x.trim());
      const rgb = [0, 0, 0];

      for (const s of sets) {
        const colors = s.split(",").map((x) => x.trim());
        for (const c of colors) {
          const [colorNum, colorText] = c.split(" ");
          if (colorText === "red" && rgb[0] < parseInt(colorNum)) {
            rgb[0] = parseInt(colorNum);
          }
          if (colorText === "green" && rgb[1] < parseInt(colorNum)) {
            rgb[1] = parseInt(colorNum);
          }
          if (colorText === "blue" && rgb[2] < parseInt(colorNum)) {
            rgb[2] = parseInt(colorNum);
          }
        }
      }
      return rgb.reduce((x, y) => x * y);
    })
    .reduce((x, y) => x + y, 0);
}
