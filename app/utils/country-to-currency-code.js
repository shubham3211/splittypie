const COUNTRY_CURRENCY_MAP = {
    US: "USD",
    GB: "GBP",
    PL: "PLN",
    CH: "CHF",
    CS: "CZK",
    HR: "HRK",
    RO: "RON",
    BG: "BGN",
    RU: "RUB",
    AX: "EUR",
    BE: "EUR",
    DE: "EUR",
    AD: "EUR",
    AT: "EUR",
    CY: "EUR",
    EE: "EUR",
    FI: "EUR",
    FR: "EUR",
    GF: "EUR",
    TF: "EUR",
    GR: "EUR",
    VA: "EUR",
    IE: "EUR",
    IT: "EUR",
    LU: "EUR",
    MT: "EUR",
    MQ: "EUR",
    YT: "EUR",
    MC: "EUR",
    ME: "EUR",
    NL: "EUR",
    PT: "EUR",
    RE: "EUR",
    BL: "EUR",
    MF: "EUR",
    SM: "EUR",
    SK: "EUR",
    SI: "EUR",
    ES: "EUR",
};

export default function countryToCurrencyCode(countryCode) {
    return COUNTRY_CURRENCY_MAP[countryCode];
}
