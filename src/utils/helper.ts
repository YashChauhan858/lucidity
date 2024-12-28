export function formatNumberWithCommas(number: number | string): string {
  if (typeof number === "undefined" || isNaN(+number)) return "-";

  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(+number);
}
