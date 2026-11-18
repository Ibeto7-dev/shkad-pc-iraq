"use strict";

const categories = {
  cpu: "المعالج", gpu: "كرت الشاشة", board: "اللوحة الأم", ram: "الرام",
  ssd: "التخزين", psu: "مزود الطاقة", case: "الكيس", cooler: "المبرّد"
};
const stores = {
  khalifa: ["الخليفة", "https://alkhalifa.shop/ar"],
  board: ["Spider Net", "https://spniq.com/category/Motherboard"],
  ram: ["SinaaStore / 2.Store", "https://sinaastore.com/en/products/thakrh-ram-kingston-valueram-16gb-ddr4-3200mhz-cl22-mktby-memory"],
  ssd: ["Spider Net", "https://spniq.com/category/storage"],
  psu: ["Spider Net", "https://spniq.com/category/psu"],
  case: ["PriceTeq / United Electronics", "https://priceteq.com/iq/pc-parts?type=case"],
  am5: ["PriceTeq / Joker Center", "https://priceteq.com/iq/pc-parts?type=motherboard"],
  ddr5: ["PriceTeq / Zaytoona", "https://priceteq.com/iq/pc-parts?type=ram"],
  spiderRam: ["Spider Net", "https://spniq.com/ar/category/ram"],
  gpuCompare: ["PriceTeq / Joker Center", "https://priceteq.com/iq/pc-parts?type=gpu"],
  gpuIgo: ["PriceTeq / igoiraq", "https://priceteq.com/iq/pc-parts?type=gpu"],
  gpuZaytoona: ["PriceTeq / Zaytoona", "https://priceteq.com/iq/pc-parts?type=gpu"],
  caseUnited: ["PriceTeq / United Electronics", "https://priceteq.com/iq/pc-parts?type=case"],
  caseZaytoona: ["PriceTeq / Zaytoona", "https://priceteq.com/iq/pc-parts?type=case"],
  cooler: ["دار الناشر", "https://alnashir.net/collections/cpu-coolers"]
};
const parts = [
  {id:"5600", type:"cpu", name:"AMD Ryzen 5 5600", price:165000, source:"khalifa", specs:"6 أنوية / 12 خيطًا · AM4 · 65W · يحتاج كرت شاشة منفصل", socket:"AM4"},
  {id:"13400f", type:"cpu", name:"Intel Core i5-13400F", price:255000, source:"khalifa", specs:"10 أنوية / 16 خيطًا · LGA1700 · يحتاج كرت شاشة منفصل", socket:"LGA1700"},
  {id:"7600", type:"cpu", name:"AMD Ryzen 5 7600", price:295000, source:"khalifa", specs:"6 أنوية / 12 خيطًا · AM5 · 65W · رسوميات مدمجة", socket:"AM5", integrated:true},
  {id:"6600", type:"gpu", name:"ASRock Challenger D Radeon RX 6600", price:270000, source:"khalifa", specs:"8GB GDDR6 · PCIe 4.0 · طاقة موصى بها 500W", watts:500},
  {id:"4060", type:"gpu", name:"MSI Ventus 2X GeForce RTX 4060", price:430000, source:"khalifa", specs:"8GB GDDR6 · PCIe 4.0 · طاقة موصى بها 550W", watts:550},
  {id:"7800xt", type:"gpu", name:"Sapphire Pulse Radeon RX 7800 XT", price:720000, source:"khalifa", specs:"16GB GDDR6 · PCIe 4.0 · طاقة موصى بها 700W", watts:700},
  {id:"b550", type:"board", name:"Gigabyte B550M K", price:170000, source:"board", specs:"AM4 · DDR4 · Micro-ATX · M.2 NVMe", socket:"AM4", memory:"DDR4", form:"Micro-ATX"},
  {id:"h610", type:"board", name:"ASUS PRIME H610M-K D4", price:110000, source:"board", specs:"LGA1700 · DDR4 · Micro-ATX · M.2 NVMe · تحقّق من إصدار BIOS", socket:"LGA1700", memory:"DDR4", form:"Micro-ATX"},
  {id:"b650", type:"board", name:"Gigabyte B650M Gaming WiFi", price:209250, source:"am5", specs:"AM5 · DDR5 · Micro-ATX · Wi-Fi", socket:"AM5", memory:"DDR5", form:"Micro-ATX"},
  {id:"32gb", type:"ram", name:"ANACOMDA DDR5 32GB", price:800000, source:"ddr5", specs:"32GB · DDR5-6000 · ذاكرة مكتبية", memory:"DDR5"},
  {id:"16gb", type:"ram", name:"Kingston ValueRAM 16GB", price:150000, source:"ram", specs:"شريحة واحدة 1×16GB · DDR4-3200 · CL22 · ذاكرة مكتبية", memory:"DDR4"},
  {id:"512", type:"ssd", name:"ADATA LEGEND 710 512GB", price:135000, source:"ssd", specs:"512GB · M.2 2280 · NVMe PCIe 3.0"},
  {id:"1tb", type:"ssd", name:"Lexar NQ780 1TB", price:260000, source:"ssd", specs:"1TB · M.2 2280 · NVMe PCIe 4.0"},
  {id:"650", type:"psu", name:"MSI MAG A650GL", price:115000, source:"psu", specs:"650W · 80 PLUS Gold · كابلات قابلة للفصل", watts:650},
  {id:"750", type:"psu", name:"ASUS Prime 750W Gold White", price:165000, source:"psu", specs:"750W · 80 PLUS Gold · ATX", watts:750},
  {id:"dy470", type:"case", name:"DarkFlash DY470 White", price:160000, source:"case", specs:"صندوق زجاجي أبيض · يدعم ATX وMicro-ATX وMini-ITX", forms:["ATX","Micro-ATX","Mini-ITX"]},
  {id:"ax120", type:"cooler", name:"Thermalright Assassin X 120 Refined SE White ARGB", price:42000, source:"cooler", specs:"تبريد هوائي · مروحة 120mm · يدعم AM4 وAM5 وLGA1700", sockets:["AM4","AM5","LGA1700"]},
  {id:"7800x3d", type:"cpu", name:"AMD Ryzen 7 7800X3D", price:585000, source:"khalifa", specs:"8 أنوية / 16 خيطًا · AM5 · ذاكرة 3D V-Cache · رسوميات مدمجة", socket:"AM5", integrated:true},
  {id:"7950x", type:"cpu", name:"AMD Ryzen 9 7950X", price:780000, source:"khalifa", specs:"16 نواة / 32 خيطًا · AM5 · 170W · رسوميات مدمجة", socket:"AM5", integrated:true},
  {id:"14700k", type:"cpu", name:"Intel Core i7-14700K", price:595000, source:"khalifa", specs:"20 نواة / 28 خيطًا · LGA1700 · رسوميات UHD 770", socket:"LGA1700", integrated:true},
  {id:"3050", type:"gpu", name:"MSI RTX 3050 Ventus 2X 8G OC", price:390000, source:"gpuCompare", specs:"8GB GDDR6 · PCIe 4.0 · طاقة موصى بها 550W", watts:550},
  {id:"5060", type:"gpu", name:"MSI RTX 5060 Ventus 2X 8GB", price:789993, source:"gpuCompare", specs:"8GB GDDR7 · PCIe 5.0 · طاقة موصى بها 550W", watts:550},
  {id:"5070", type:"gpu", name:"MSI RTX 5070 Shadow 3X OC 12GB", price:1300000, source:"gpuIgo", specs:"12GB GDDR7 · PCIe 5.0 · طاقة موصى بها 650W", watts:650},
  {id:"9060xt", type:"gpu", name:"Sapphire Pulse Radeon RX 9060 XT", price:962000, source:"gpuZaytoona", specs:"16GB GDDR6 · PCIe 5.0 · طاقة موصى بها 450W", watts:450},
  {id:"b450a", type:"board", name:"ASUS Prime B450M-A II", price:145000, source:"board", specs:"AM4 · DDR4 · Micro-ATX · M.2 NVMe", socket:"AM4", memory:"DDR4", form:"Micro-ATX"},
  {id:"b760e", type:"board", name:"Gigabyte B760M E DDR5", price:150000, source:"board", specs:"LGA1700 · DDR5 · Micro-ATX · M.2 NVMe", socket:"LGA1700", memory:"DDR5", form:"Micro-ATX"},
  {id:"z790p", type:"board", name:"ASUS Prime Z790-P WiFi DDR5", price:335000, source:"board", specs:"LGA1700 · DDR5 · ATX · Wi-Fi · M.2 NVMe", socket:"LGA1700", memory:"DDR5", form:"ATX"},
  {id:"b850mk", type:"board", name:"ASUS Prime B850M-K", price:210000, source:"board", specs:"AM5 · DDR5 · Micro-ATX · M.2 NVMe", socket:"AM5", memory:"DDR5", form:"Micro-ATX"},
  {id:"king16", type:"ram", name:"Kingbank RGB White 16GB", price:200000, source:"spiderRam", specs:"2×8GB · DDR4-3200 · CL16", memory:"DDR4"},
  {id:"king32", type:"ram", name:"Kingbank RGB White 32GB", price:875000, source:"spiderRam", specs:"2×16GB · DDR5-6000 · CL36", memory:"DDR5"},
  {id:"aorus16", type:"ram", name:"Gigabyte AORUS RGB 16GB", price:285000, source:"spiderRam", specs:"2×8GB · DDR4-3200", memory:"DDR4"},
  {id:"sn5100", type:"ssd", name:"WD Blue SN5100 1TB", price:275000, source:"ssd", specs:"1TB · M.2 2280 · NVMe PCIe 4.0"},
  {id:"990pro", type:"ssd", name:"Samsung 990 PRO 1TB with Heatsink", price:425000, source:"ssd", specs:"1TB · M.2 2280 · NVMe PCIe 4.0 · مشتت حراري"},
  {id:"mp600", type:"ssd", name:"Corsair MP600 2TB", price:500000, source:"ssd", specs:"2TB · M.2 · NVMe PCIe 4.0"},
  {id:"tuf650", type:"psu", name:"ASUS TUF Gaming 650W Bronze", price:100000, source:"psu", specs:"650W · 80 PLUS Bronze · ATX", watts:650},
  {id:"mwe750", type:"psu", name:"Cooler Master MWE Gold 750W V2 ATX 3.0", price:150000, source:"psu", specs:"750W · 80 PLUS Gold · ATX 3.0", watts:750},
  {id:"ud1000", type:"psu", name:"Gigabyte UD1000GM", price:250000, source:"psu", specs:"1000W · 80 PLUS Gold · كابلات قابلة للفصل", watts:1000},
  {id:"dy450l", type:"case", name:"DarkFlash DY450L Pro", price:187000, source:"caseZaytoona", specs:"صندوق Mid Tower · يدعم ATX وMicro-ATX وMini-ITX", forms:["ATX","Micro-ATX","Mini-ITX"]},
  {id:"as01", type:"case", name:"Jungle Leopard AS-01 White", price:88000, source:"caseZaytoona", specs:"Mid Tower · يدعم ATX وMicro-ATX · يُباع بدون مراوح", forms:["ATX","Micro-ATX"]},
  {id:"m100r", type:"case", name:"MSI MAG Forge M100R White", price:90500, source:"caseUnited", specs:"يدعم Micro-ATX وMini-ITX · 4 مراوح 120mm بحسب العرض", forms:["Micro-ATX","Mini-ITX"]},
  {id:"aqua240", type:"cooler", name:"Thermalright Aqua Elite 240 V3 White", price:92000, source:"cooler", specs:"تبريد سائل AIO · رادياتير 240mm · AM4 وAM5 وLGA1700", sockets:["AM4","AM5","LGA1700"]}
];
const presets = {
  value:{ cpu:"5600", gpu:"6600", board:"b550", ram:"16gb", ssd:"512", psu:"650", case:"dy470", cooler:"ax120" },
  upgrade:{ cpu:"5600", gpu:"4060", board:"b550", ram:"16gb", ssd:"1tb", psu:"650", case:"dy470", cooler:"ax120" },
  am5:{cpu:"7600", gpu:"7800xt", board:"b650", ram:"32gb", ssd:"1tb", psu:"mwe750", case:"dy470", cooler:"ax120"},
  empty:{}
};
const $ = id => document.getElementById(id);
const get = id => parts.find(part => part.id === id);
const money = value => new Intl.NumberFormat("en-IQ").format(value) + " د.ع";
const priceText = value => '<bdi>' + money(value) + '</bdi>';
const key = "shkad-pc-build-v1";
const defaultState = () => ({selected:{...presets.value}, budget:1500000, extras:0});
let state = defaultState();
const amount = value => Math.min(999999999, Math.max(0, Math.round(Number(value) || 0)));
try {
  const saved = JSON.parse(localStorage.getItem(key));
  if (saved && saved.selected) {
    state = {
      selected:Object.fromEntries(Object.entries(saved.selected).filter(([type,id]) => get(id)?.type === type)),
      budget:amount(saved.budget), extras:amount(saved.extras)
    };
  }
} catch {}

const totals = (build = state) => Object.values(build.selected).reduce((sum,id) => sum + get(id).price, build.extras);
const compareKey = "shkad-pc-compare-v1";
let reference = null;
try {
  const saved = JSON.parse(localStorage.getItem(compareKey));
  if (saved?.selected) reference = {
    selected: Object.fromEntries(Object.entries(saved.selected).filter(([type,id]) => get(id)?.type === type)),
    extras: amount(saved.extras)
  };
} catch {}

function renderComparison() {
  $("clear-reference").hidden = !reference;
  if (!reference) {
    $("comparison").innerHTML = "<p>ثبّت تجميعتك الحالية، وبعدها بدّل القطع أو اختار تجميعة جاهزة حتى تقارن.</p>";
    return;
  }
  const rows = Object.entries(categories).filter(([type]) => reference.selected[type] || state.selected[type]).map(([type,label]) => {
    const names = [reference,state].map(build => get(build.selected[type])?.name || "—");
    const different = reference.selected[type] !== state.selected[type];
    return '<tr' + (different ? ' class="changed"' : '') + '><th scope="row">' + label
      + '</th>' + names.map(name => '<td><bdi>' + name + '</bdi></td>').join("") + '</tr>';
  });
  const diff = totals() - totals(reference);
  const change = diff === 0 ? "الإجمالي متساوي" : "التجميعة الحالية " + (diff > 0 ? "أغلى بـ " : "أرخص بـ ") + priceText(Math.abs(diff));
  $("comparison").innerHTML = '<p class="compare-result">' + change + '</p><div class="table-scroll"><table>'
    + '<thead><tr><th scope="col">المكوّن</th><th scope="col">المحفوظة</th><th scope="col">الحالية</th></tr></thead>'
    + '<tbody>' + rows.join("") + '<tr><th scope="row">الإضافات</th><td>' + priceText(reference.extras)
    + '</td><td>' + priceText(state.extras) + '</td></tr></tbody><tfoot><tr><th scope="row">الإجمالي</th><td>'
    + priceText(totals(reference)) + '</td><td>' + priceText(totals()) + '</td></tr></tfoot></table></div>';
}
function saveReference(build) {
  reference = build;
  try {
    if (build) localStorage.setItem(compareKey, JSON.stringify(build));
    else localStorage.removeItem(compareKey);
  } catch {}
  renderComparison();
}
$("set-reference").addEventListener("click", () => saveReference({selected:{...state.selected}, extras:state.extras}));
$("clear-reference").addEventListener("click", () => {
  saveReference(null);
  $("set-reference").focus();
});
function checkCompatibility(selected) {
  const {cpu, gpu, board, ram, psu, cooler, case:box} = Object.fromEntries(
    Object.entries(selected).map(([type,id]) => [type,get(id)])
  );
  const missing = Object.keys(categories).filter(type => !selected[type] && (type !== "gpu" || !cpu?.integrated));
  const issues = [];
  if (cpu && board && cpu.socket !== board.socket) issues.push("مقبس المعالج يختلف عن مقبس اللوحة الأم.");
  if (board && ram && board.memory !== ram.memory) issues.push("نوع الرام يختلف عن النوع الذي تدعمه اللوحة.");
  if (gpu && psu && gpu.watts > psu.watts) issues.push("قدرة مزود الطاقة أقل من توصية كرت الشاشة.");
  if (board && box && !box.forms.includes(board.form)) issues.push("الكيس ما يدعم حجم اللوحة الأم.");
  if (cpu && cooler && !cooler.sockets.includes(cpu.socket)) issues.push("المبرّد ما يدعم مقبس المعالج.");
  if ((board?.id === "h610" && ["13400f","14700k"].includes(cpu?.id)) ||
      (board?.id === "b450a" && cpu?.id === "5600") ||
      (["b760e","z790p"].includes(board?.id) && cpu?.id === "14700k")) {
    issues.push("تحقّق من إصدار BIOS الذي يدعم هذا المعالج قبل الشراء.");
  }
  return {missing,issues};
}
function renderSummary() {
  const total = totals();
  const remaining = state.budget - total;
  $("total").innerHTML = priceText(total);
  $("balance").innerHTML = remaining < 0
    ? '<span class="warning">فوق الميزانية بـ ' + priceText(-remaining) + '</span>'
    : "يبقى من الميزانية " + priceText(remaining);
  $("meter").value = state.budget ? Math.min(1,total / state.budget) : Number(total > 0);
  const {missing,issues} = checkCompatibility(state.selected);
  $("checks").innerHTML = [
    ...issues.map(issue => '<p class="warning">⚠ ' + issue + '</p>'),
    missing.length ? "<p>القطع الناقصة: " + missing.map(type => categories[type]).join("، ") + "</p>" : "",
    !missing.length && !issues.length ? "<p>✓ اجتازت القطع فحوص التوافق الأساسية.</p>" : "",
    "<p>راجع قياسات كرت الشاشة والمبرّد، توصيلات الطاقة وإصدار BIOS قبل الشراء.</p>"
  ].join("");
  for (const button of document.querySelectorAll("[data-preset]")) {
    const preset = presets[button.dataset.preset];
    button.setAttribute("aria-pressed", Object.keys(categories).every(type => preset[type] === state.selected[type]));
  }
  renderComparison();
  try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
}
function syncBuilder() {
  for (const type of Object.keys(categories)) $("select-" + type).value = state.selected[type] || "";
  $("budget").value = state.budget;
  $("extras").value = state.extras;
  renderSummary();
}
$("slots").innerHTML = Object.entries(categories).map(([type,label]) =>
  '<div class="slot"><label for="select-' + type + '">' + label + '</label><select id="select-' + type
  + '" data-type="' + type + '"><option value="">اختار قطعة</option>'
  + parts.filter(part => part.type === type).map(part =>
    '<option value="' + part.id + '">' + part.name + ' — ' + money(part.price) + '</option>'
  ).join("") + '</select></div>'
).join("");
$("slots").addEventListener("change", event => {
  const {type} = event.target.dataset;
  if (!type) return;
  if (event.target.value) state.selected[type] = event.target.value;
  else delete state.selected[type];
  renderSummary();
});
for (const field of ["budget","extras"]) {
  $(field).addEventListener("input", event => {
    state[field] = amount(event.target.value);
    renderSummary();
  });
  $(field).addEventListener("change", () => { $(field).value = state[field]; });
}
for (const button of document.querySelectorAll("[data-preset]")) {
  button.addEventListener("click", () => {
    state.selected = {...presets[button.dataset.preset]};
    syncBuilder();
  });
}
$("reset").addEventListener("click", () => { state = defaultState(); syncBuilder(); });

$("category").innerHTML = '<option value="">كل الفئات</option>' + Object.entries(categories)
  .map(([type,label]) => '<option value="' + type + '">' + label + '</option>').join("");
function renderCatalog() {
  const query = $("search").value.trim().toLowerCase();
  const type = $("category").value;
  const matching = parts.filter(part =>
    (!type || part.type === type) && [part.name,part.specs,categories[part.type],stores[part.source][0]]
      .join(" ").toLowerCase().includes(query)
  );
  const sort = $("sort").value;
  if (sort === "ascending") matching.sort((a,b) => a.price - b.price);
  if (sort === "descending") matching.sort((a,b) => b.price - a.price);
  $("results-count").textContent = matching.length + " من " + parts.length + " قطعة";
  $("cards").innerHTML = matching.map(part => {
    const [store,source] = stores[part.source];
    return '<article class="panel card"><p class="eyebrow">' + categories[part.type] + '</p><h3 dir="ltr">'
      + part.name + '</h3><p>' + part.specs + '</p><div class="price">' + priceText(part.price)
      + '</div><div class="actions"><a target="_blank" rel="noopener noreferrer" href="' + source + '">'
      + store + ' ↗</a><button class="subtle" data-part="' + part.id + '">اختيار القطعة</button></div></article>';
  }).join("") || '<p role="status">ما لقينا قطع تطابق البحث.</p>';
}
$("search").addEventListener("input", renderCatalog);
$("category").addEventListener("change", renderCatalog);
$("sort").addEventListener("change", renderCatalog);
$("cards").addEventListener("click", event => {
  const button = event.target.closest("[data-part]");
  if (!button) return;
  const part = get(button.dataset.part);
  state.selected[part.type] = part.id;
  syncBuilder();
  $("select-" + part.type).focus();
});
$("copy").addEventListener("click", async () => {
  const lines = Object.entries(categories).flatMap(([type,label]) => {
    const part = get(state.selected[type]);
    return part ? [label + " — " + part.name + " — " + money(part.price)] : [];
  });
  const summary = ["تجميعتي من شكد تكلّف؟", ...lines, "الإضافات " + money(state.extras),
    "الإجمالي " + money(totals()), "الميزانية " + money(state.budget), "مراجعة الأسعار 18 تشرين الثاني 2026"].join("\n");
  try {
    await navigator.clipboard.writeText(summary);
    $("feedback").textContent = "تم نسخ الملخص.";
  } catch {
    $("feedback").textContent = "النسخ غير متاح. تگدر تحدد الملخص وتنسخه يدويًا.";
    let field = $("copy-fallback");
    if (!field) {
      field = document.createElement("textarea");
      field.id = "copy-fallback";
      field.setAttribute("aria-label","ملخص التجميعة");
      field.rows = 8;
      field.readOnly = true;
      $("feedback").after(field);
    }
    field.value = summary;
    field.select();
  }
});
syncBuilder();
renderCatalog();
