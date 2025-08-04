export const formatDateToArabic = (isoDate: string) => {
   const date = new Date(isoDate);
  const formatter = new Intl.DateTimeFormat("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });


    const parts = formatter.formatToParts(date);
    const day = parts.find((p) => p.type === "day")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const year = parts.find((p) => p.type === "year")?.value;

    return `${month} ${day}, ${year}`;
};