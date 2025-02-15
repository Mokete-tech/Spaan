type SupportedCurrency = "ZAR" | "USD" | "EUR" | "GBP"

const currencySymbols: Record<SupportedCurrency, string> = {
  ZAR: "R",
  USD: "$",
  EUR: "€",
  GBP: "£",
}

export function formatCurrency(amount: number, currency: SupportedCurrency = "ZAR"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(currencySymbols[currency], currencySymbols[currency] + " ")
}

