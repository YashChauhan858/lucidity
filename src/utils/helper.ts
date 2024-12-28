export function formatNumberWithCommas(number: number | string): string {
  if (typeof number === "undefined" || isNaN(+number)) return "-";

  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(+number);
}

export function removeDollarSign(input: string): string {
  const newValue = input.replace(/\$/g, "");
  if (newValue === "" || newValue === "0") return "0";
  return newValue;
}
