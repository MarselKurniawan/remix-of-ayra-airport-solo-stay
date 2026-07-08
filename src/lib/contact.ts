export const SALES = {
  name: "Sales Ayra",
  phone: "085385771227",
  intl: "6285385771227",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${SALES.intl}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
