export const formatDateToArabic = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};