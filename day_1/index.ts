const first_num = (str: string) => str.split("").find((c) => /\d/.test(c));
const last_num = (str: string) =>
  str
    .split("")
    .reverse()
    .find((c) => /\d/.test(c));
const combine_num = (x?: string, y?: string) =>
  !x || !y ? 0 : parseInt(x + y);

export async function day_1() {
  const file = Bun.file(`${import.meta.dir}/input.txt`);
  const content = await file.text();
  return content
    .split(/\r?\n|\r|\n/g)
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((x) => combine_num(first_num(x), last_num(x)))
    .reduce((x, y) => x + y, 0);
}
