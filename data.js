const ITEM_BANK = [
  // INCLUDED (IN): final domestic production; investment; inventories; gov purchases; exports; services
  {
    id: "in1", bucket: "IN", tag: "FINAL GOOD", value: 18,
    title: "New car produced in U.S.",
    desc: "A U.S. factory produces $18m worth of new cars this year.",
    explain: "New final goods produced domestically this year are included in GDP."
  },
  {
    id: "in2", bucket: "IN", tag: "SERVICE", value: 9,
    title: "Haircuts in U.S.",
    desc: "Barbers provide $9m of haircut services in the U.S. this year.",
    explain: "Market services produced domestically are included in GDP."
  },
  {
    id: "in3", bucket: "IN", tag: "INVESTMENT", value: 22,
    title: "New factory built in U.S.",
    desc: "A firm builds a new factory in the U.S. worth $22m this year.",
    explain: "New capital goods (investment) produced domestically are included."
  },
  {
    id: "in4", bucket: "IN", tag: "HOUSING", value: 16,
    title: "New home construction",
    desc: "Builders construct new homes worth $16m in the U.S. this year.",
    explain: "New residential construction is investment and is included."
  },
  {
    id: "in5", bucket: "IN", tag: "GOV'T", value: 14,
    title: "Government buys road services",
    desc: "The government pays $14m to build/repair roads (a purchase of services).",
    explain: "Government purchases of goods/services are included (not transfers)."
  },
  {
    id: "in6", bucket: "IN", tag: "EXPORT", value: 12,
    title: "Exports produced in U.S.",
    desc: "A U.S. firm produces $12m of goods in the U.S. that are sold abroad (exports).",
    explain: "Exports are domestically produced and included in GDP."
  },
  {
    id: "in7", bucket: "IN", tag: "INVENTORIES", value: 10,
    title: "Inventories rise",
    desc: "A firm produces $10m of goods this year that remain unsold and add to inventories.",
    explain: "Inventory investment counts as part of investment and is included."
  },
  {
    id: "in8", bucket: "IN", tag: "SERVICE", value: 7,
    title: "Banking service fees",
    desc: "Banks charge $7m in service fees for account services in the U.S.",
    explain: "Fees for financial services are production and included (not asset trades)."
  },
  {
    id: "in9", bucket: "IN", tag: "SERVICE", value: 6,
    title: "Real estate agent commission on home sale",
    desc: "A realtor earns $6m in commissions helping sell homes this year.",
    explain: "The commission is a current service and is included even if the home is used."
  },
  {
    id: "in10", bucket: "IN", tag: "GOV'T", value: 11,
    title: "Public school services",
    desc: "Public schools provide $11m worth of educational services (measured by costs).",
    explain: "Government-provided services are included (valued by cost)."
  },
  {
    id: "in11", bucket: "IN", tag: "SERVICE", value: 8,
    title: "Restaurant meals",
    desc: "Restaurants produce $8m of meal services in the U.S. this year.",
    explain: "Market services produced domestically are included."
  },
  {
    id: "in12", bucket: "IN", tag: "INVESTMENT", value: 13,
    title: "New software purchased by firms",
    desc: "Firms purchase $13m of newly produced software as an investment good.",
    explain: "Newly produced investment goods are included."
  },

  // INTERMEDIATE (INT): intermediate inputs to avoid double counting
  {
    id: "int1", bucket: "INT", tag: "INTERMEDIATE", value: 9,
    title: "Steel sold to car maker",
    desc: "A steel producer sells $9m of steel to a car maker to build cars.",
    explain: "Intermediate goods are excluded to avoid double counting in the final car value."
  },
  {
    id: "int2", bucket: "INT", tag: "INTERMEDIATE", value: 6,
    title: "Flour sold to bakery",
    desc: "A mill sells $6m of flour to a bakery to bake bread.",
    explain: "Intermediate input—its value is counted in the final bread."
  },
  {
    id: "int3", bucket: "INT", tag: "INTERMEDIATE", value: 5,
    title: "Computer chips sold to electronics firm",
    desc: "A chip maker sells $5m of chips to an electronics company for final devices.",
    explain: "Intermediate input excluded; final device value includes it."
  },
  {
    id: "int4", bucket: "INT", tag: "INTERMEDIATE", value: 7,
    title: "Wholesale purchase for resale",
    desc: "A retailer buys $7m of goods from a wholesaler to resell to consumers.",
    explain: "The wholesale good is intermediate relative to final retail sale; GDP counts value added, not double count."
  },
  {
    id: "int5", bucket: "INT", tag: "INTERMEDIATE", value: 4,
    title: "Packaging sold to beverage company",
    desc: "A packaging firm sells $4m of bottles to a beverage company.",
    explain: "Intermediate input excluded to avoid double counting."
  },

  // TRANSFERS / FINANCIAL (TF): not payment for current production
  {
    id: "tf1", bucket: "TF", tag: "TRANSFER", value: 10,
    title: "Unemployment benefits",
    desc: "The government pays $10m in unemployment benefits.",
    explain: "Transfers are not payments for current production, so excluded."
  },
  {
    id: "tf2", bucket: "TF", tag: "TRANSFER", value: 8,
    title: "Social Security payments",
    desc: "The government pays $8m in Social Security benefits.",
    explain: "Transfer payment—not tied to current production."
  },
  {
    id: "tf3", bucket: "TF", tag: "FINANCIAL", value: 15,
    title: "Stock purchase",
    desc: "Households buy $15m of existing shares on the stock market.",
    explain: "Buying existing financial assets is not production—excluded."
  },
  {
    id: "tf4", bucket: "TF", tag: "FINANCIAL", value: 12,
    title: "Bond purchase",
    desc: "Households buy $12m of government bonds.",
    explain: "Financial transactions are not production of goods/services—excluded."
  },
  {
    id: "tf5", bucket: "TF", tag: "FINANCIAL", value: 9,
    title: "Capital gains",
    desc: "Investors realize $9m in capital gains from rising stock prices.",
    explain: "Capital gains reflect asset price changes, not current production."
  },

  // USED / NON-MARKET (USED): used goods and non-market household production
  {
    id: "u1", bucket: "USED", tag: "USED GOOD", value: 20,
    title: "Sale of an existing home",
    desc: "An existing home is sold for $20m this year.",
    explain: "Used assets are not current production; the home sale itself is excluded."
  },
  {
    id: "u2", bucket: "USED", tag: "USED GOOD", value: 7,
    title: "Used car sale",
    desc: "A used car is sold for $7m this year.",
    explain: "Used goods sales are excluded (no new production)."
  },
  {
    id: "u3", bucket: "USED", tag: "NON-MARKET", value: 5,
    title: "Home-cooked meals at home",
    desc: "Households cook meals at home valued at $5m (imputed).",
    explain: "Non-market household production is generally excluded from GDP."
  },
  {
    id: "u4", bucket: "USED", tag: "NON-MARKET", value: 6,
    title: "Do-it-yourself home repairs",
    desc: "Homeowners perform their own repairs valued at $6m (imputed).",
    explain: "Non-market household production is excluded."
  },

  // Imports (still useful!): production abroad -> not included in U.S. GDP
  // We place imports under USED bucket here as “not domestic production”; you can move them if you prefer.
  {
    id: "u5", bucket: "USED", tag: "IMPORT", value: 12,
    title: "Imported cars purchased in U.S.",
    desc: "U.S. households buy $12m of cars produced in Japan.",
    explain: "Production occurred abroad, so it is not included in U.S. GDP (though it affects net exports)."
  },
  {
    id: "u6", bucket: "USED", tag: "IMPORT", value: 8,
    title: "Imported phones purchased in U.S.",
    desc: "U.S. households buy $8m of phones produced abroad.",
    explain: "Not domestic production → excluded from U.S. GDP."
  }
];
