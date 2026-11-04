/* ===== Picture people (appearance words). p.av = { ...options } → SVG ===== */
const AV_HAIR = { blond: "#EFC75E", red: "#C9532F", brown: "#7A4A26", fair: "#E3D3A0", dark: "#2B2220", grey: "#A7A7A7", white: "#E8E8E8" };
function avatarSVG(o) {
  o = Object.assign({ build: "normal", hair: "short", hc: "brown", face: "oval", age: "adult", height: 1, shirt: "#E07A5F" }, o || {});
  const skin = o.tan ? "#A86B3C" : "#F2C9A0", ink = "#33302E";
  const hc = AV_HAIR[o.hc] || o.hc;
  const B = { skinny: [11, 10, 10, 4], thin: [13, 12, 12, 5], slim: [15, 14, 14, 5], normal: [17, 16, 16, 6], wellbuilt: [21, 19, 17, 8], plump: [19, 27, 20, 7], fat: [23, 35, 25, 9], heavy: [26, 29, 25, 9], broad: [29, 19, 15, 7] }[o.build];
  const [sw, bw, ww, aw] = B;
  const F = { oval: [19, 22], round: [23, 22], thin: [15, 24] }[o.face];
  const [rx, ry] = F, cy = 46, top = cy - ry;
  let back = "", front = "", extra = "";
  const scale = o.age === "child" ? 0.62 : o.age === "teen" ? 0.82 : o.height;
  // ---- hair
  const cap = `<path d="M${60 - rx - 1},${cy} Q${60 - rx},${top - 6} 60,${top - 4} Q${60 + rx},${top - 6} ${60 + rx + 1},${cy} Q${60 + rx - 3},${top + 9} 60,${top + 8} Q${60 - rx + 3},${top + 9} ${60 - rx - 1},${cy}Z" fill="${hc}"/>`;
  const sides = y => `<path d="M${60 - rx - 4},${top + 6} Q60,${top - 10} ${60 + rx + 4},${top + 6} L${60 + rx + 4},${y} L${60 - rx - 4},${y}Z" fill="${hc}"/>`;
  if (o.hair === "short") front = cap;
  if (o.hair === "spiky") { let pts = `${60 - rx - 1},${cy - 4} `; for (let i = 0; i <= 6; i++) { const x = 60 - rx + (2 * rx) * i / 6; pts += `${x},${top + 6} ${x + rx / 6},${top - 9 - (i % 2) * 3} `; } pts += `${60 + rx + 1},${cy - 4} ${60 + rx - 2},${top + 9} ${60 - rx + 2},${top + 9}`; front = `<polygon points="${pts}" fill="${hc}"/>`; }
  if (o.hair === "straight") { back = sides(60); front = cap; }
  if (o.hair === "shoulder") { back = sides(76); front = cap; }
  if (o.hair === "long") { back = sides(104); front = cap; }
  if (o.hair === "wavy") { back = `<path d="M${60 - rx - 4},${top + 6} Q60,${top - 10} ${60 + rx + 4},${top + 6} Q${60 + rx + 10},${cy + 8} ${60 + rx + 3},${cy + 18} Q${60 + rx + 11},${cy + 28} ${60 + rx + 4},${cy + 38} L${60 - rx - 4},${cy + 38} Q${60 - rx - 11},${cy + 28} ${60 - rx - 3},${cy + 18} Q${60 - rx - 10},${cy + 8} ${60 - rx - 4},${top + 6}Z" fill="${hc}"/>`; front = cap; }
  if (o.hair === "curly") { let c = ""; for (let a = -200; a <= 20; a += 22) { const r = a * Math.PI / 180; c += `<circle cx="${60 + Math.cos(r) * (rx + 2)}" cy="${cy + Math.sin(r) * (ry + 1)}" r="7" fill="${hc}"/>`; } for (const s of [-1, 1]) c += `<circle cx="${60 + s * (rx + 4)}" cy="${cy + 10}" r="6.5" fill="${hc}"/><circle cx="${60 + s * (rx + 3)}" cy="${cy + 20}" r="6" fill="${hc}"/>`; back = c; front = `<circle cx="52" cy="${top + 3}" r="6" fill="${hc}"/><circle cx="60" cy="${top + 1}" r="6" fill="${hc}"/><circle cx="68" cy="${top + 3}" r="6" fill="${hc}"/>`; }
  if (o.hair === "pigtails") { back = `<circle cx="${60 - rx - 9}" cy="${cy}" r="8" fill="${hc}"/><circle cx="${60 + rx + 9}" cy="${cy}" r="8" fill="${hc}"/><path d="M${60 - rx - 11},${cy + 4} q-2,14 3,22" stroke="${hc}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M${60 + rx + 11},${cy + 4} q2,14 -3,22" stroke="${hc}" stroke-width="6" fill="none" stroke-linecap="round"/>`; front = cap + `<circle cx="${60 - rx - 2}" cy="${cy - 3}" r="2.6" fill="#E85D9A"/><circle cx="${60 + rx + 2}" cy="${cy - 3}" r="2.6" fill="#E85D9A"/>`; }
  if (o.hair === "bald") front = `<ellipse cx="${60 - 6}" cy="${top + 6}" rx="6" ry="3" fill="#fff" opacity=".55"/>` + (o.fringe ? `<path d="M${60 - rx},${cy - 2} q-2,8 2,12 M${60 + rx},${cy - 2} q2,8 -2,12" stroke="${hc}" stroke-width="5" fill="none"/>` : "");
  // ---- face
  let eyes, mouth = `<path d="M54,${cy + 10} Q60,${cy + 15} 66,${cy + 10}" stroke="${ink}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  eyes = `<circle cx="53" cy="${cy + 1}" r="2.2" fill="${ink}"/><circle cx="67" cy="${cy + 1}" r="2.2" fill="${ink}"/>`;
  if (o.look === "cute") { eyes = `<circle cx="52.5" cy="${cy + 1}" r="4" fill="${ink}"/><circle cx="67.5" cy="${cy + 1}" r="4" fill="${ink}"/><circle cx="54" cy="${cy - .5}" r="1.4" fill="#fff"/><circle cx="69" cy="${cy - .5}" r="1.4" fill="#fff"/>`; extra += `<circle cx="${60 - rx + 5}" cy="${cy + 8}" r="3.5" fill="#F29BA6" opacity=".7"/><circle cx="${60 + rx - 5}" cy="${cy + 8}" r="3.5" fill="#F29BA6" opacity=".7"/>`; mouth = `<path d="M56,${cy + 10} Q60,${cy + 14} 64,${cy + 10}" stroke="${ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`; }
  if (o.look === "pretty") { eyes += `<path d="M49,${cy - 2} l-2,-2 M51,${cy - 3} l-1,-3 M71,${cy - 2} l2,-2 M69,${cy - 3} l1,-3" stroke="${ink}" stroke-width="1.4"/>`; mouth = `<ellipse cx="60" cy="${cy + 12}" rx="4" ry="2.2" fill="#D9475B"/>`; }
  if (o.look === "ugly") { eyes = `<circle cx="53" cy="${cy}" r="3.4" fill="${ink}"/><circle cx="67" cy="${cy + 2}" r="1.6" fill="${ink}"/><path d="M48,${cy - 5} L58,${cy - 3} M62,${cy - 3} L72,${cy - 6}" stroke="${ink}" stroke-width="2.4"/>`; extra += `<ellipse cx="60" cy="${cy + 6}" rx="4.5" ry="5" fill="#E4A87F"/><circle cx="${60 + rx - 6}" cy="${cy + 9}" r="1.6" fill="#7A4A26"/>`; mouth = `<path d="M53,${cy + 13} l4,-2 l3,2 l3,-2 l4,2" stroke="${ink}" stroke-width="2" fill="none"/>`; }
  if (o.freckles) for (const [x, y] of [[-9, 6], [-12, 8], [-7, 9], [9, 6], [12, 8], [7, 9], [-10, 11], [10, 11]]) extra += `<circle cx="${60 + x}" cy="${cy + y}" r="1.1" fill="#B5652D"/>`;
  if (o.scar) extra += `<path d="M${64},${cy - 9} L${72},${cy + 6}" stroke="#B23A3A" stroke-width="2"/><path d="M65,${cy - 5} l4,-2 M67,${cy - 1} l4,-2 M69,${cy + 3} l4,-2" stroke="#B23A3A" stroke-width="1.3"/>`;
  if (o.beard) extra += `<path d="M${60 - rx + 1},${cy + 2} Q60,${cy + ry + 18} ${60 + rx - 1},${cy + 2} Q${60 + rx - 6},${cy + 17} 60,${cy + 15} Q${60 - rx + 6},${cy + 17} ${60 - rx + 1},${cy + 2}Z" fill="${hc}"/>`;
  if (o.moustache || o.beard) extra += `<path d="M51,${cy + 9} Q55,${cy + 4} 60,${cy + 7} Q65,${cy + 4} 69,${cy + 9} Q60,${cy + 11} 51,${cy + 9}Z" fill="${hc}"/>`;
  if (o.wrinkles) extra += `<path d="M52,${top + 10} q8,-2 16,0 M53,${top + 14} q7,-2 14,0" stroke="#B88A6A" stroke-width="1.2" fill="none"/><path d="M${60 - rx + 3},${cy + 4} l3,2 M${60 + rx - 3},${cy + 4} l-3,2" stroke="#B88A6A" stroke-width="1.2"/>`;
  if (o.glasses) extra += `<circle cx="53" cy="${cy + 1}" r="5" fill="none" stroke="${ink}" stroke-width="1.6"/><circle cx="67" cy="${cy + 1}" r="5" fill="none" stroke="${ink}" stroke-width="1.6"/><path d="M58,${cy + 1} h4" stroke="${ink}" stroke-width="1.6"/>`;
  // ---- body
  const torso = `<path d="M${60 - sw},72 Q${60 - bw},92 ${60 - ww},112 L${60 + ww},112 Q${60 + bw},92 ${60 + sw},72Z" fill="${o.shirt}"/>`;
  const arms = `<path d="M${60 - sw + 2},75 L${60 - sw - 5 - (bw > 25 ? 6 : 0)},108 M${60 + sw - 2},75 L${60 + sw + 5 + (bw > 25 ? 6 : 0)},108" stroke="${skin}" stroke-width="${aw}" stroke-linecap="round"/>` + (o.build === "wellbuilt" ? `<circle cx="${60 - sw - 1}" cy="84" r="5.5" fill="${skin}"/><circle cx="${60 + sw + 1}" cy="84" r="5.5" fill="${skin}"/>` : "");
  const lw = Math.max(5, ww - 3);
  const legs = `<rect x="${60 - lw - 2}" y="110" width="${lw}" height="42" rx="3" fill="#3E5A8A"/><rect x="62" y="110" width="${lw}" height="42" rx="3" fill="#3E5A8A"/><ellipse cx="${60 - lw / 2 - 3}" cy="153" rx="${lw / 2 + 3}" ry="3" fill="${ink}"/><ellipse cx="${62 + lw / 2 + 1}" cy="153" rx="${lw / 2 + 3}" ry="3" fill="${ink}"/>`;
  const neck = `<rect x="56" y="${cy + ry - 4}" width="8" height="${72 - (cy + ry - 4) + 2}" fill="${skin}"/>`;
  const head = `<ellipse cx="60" cy="${cy}" rx="${rx}" ry="${ry}" fill="${skin}"/><ellipse cx="${60 - rx}" cy="${cy + 2}" rx="3" ry="5" fill="${skin}"/><ellipse cx="${60 + rx}" cy="${cy + 2}" rx="3" ry="5" fill="${skin}"/>`;
  if (o.cane) extra += "";
  let fig;
  if (o.age === "baby") {
    fig = `<g transform="translate(0,52)"><ellipse cx="60" cy="88" rx="20" ry="16" fill="#9ED1E8"/><circle cx="44" cy="86" r="5" fill="${skin}"/><circle cx="76" cy="86" r="5" fill="${skin}"/><circle cx="50" cy="101" r="6" fill="${skin}"/><circle cx="70" cy="101" r="6" fill="${skin}"/><circle cx="60" cy="55" r="22" fill="${skin}"/><path d="M60,33 q-6,-6 0,-9 q4,3 -1,6" stroke="${AV_HAIR.brown}" stroke-width="2.4" fill="none"/><circle cx="53" cy="55" r="2.6" fill="${ink}"/><circle cx="67" cy="55" r="2.6" fill="${ink}"/><circle cx="60" cy="65" r="4" fill="#F3B23C"/><circle cx="60" cy="65" r="1.6" fill="#fff"/><circle cx="46" cy="61" r="3" fill="#F29BA6" opacity=".6"/><circle cx="74" cy="61" r="3" fill="#F29BA6" opacity=".6"/></g>`;
  } else {
    const cane = o.cane ? `<path d="M${60 + sw + 9},106 L${60 + sw + 12},154" stroke="#7A4A26" stroke-width="3" stroke-linecap="round"/><path d="M${60 + sw + 9},106 q-1,-6 -6,-4" stroke="#7A4A26" stroke-width="3" fill="none" stroke-linecap="round"/>` : "";
    fig = `<g transform="translate(60,155) scale(${scale}) translate(-60,-155)">${back}${legs}${torso}${arms}${cane}${neck}${head}${eyes}${mouth}${extra}${front}</g>`;
  }
  let ruler = "";
  if (o.ruler) { ruler = `<path d="M10,14 V155" stroke="#9AA7B4" stroke-width="1.5"/>`; for (let y = 155; y >= 14; y -= 14) ruler += `<path d="M10,${y} h6" stroke="#9AA7B4" stroke-width="1.5"/>`; }
  const bwid = o.badge ? 12 + o.badge.length * 7.2 : 0;
  const badge = o.badge ? `<rect x="${116 - bwid}" y="4" width="${bwid}" height="20" rx="10" fill="#2A55C9"/><text x="${116 - bwid / 2}" y="18" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">${o.badge}</text>` : "";
  return `<svg viewBox="${o.portrait ? "24 10 72 72" : "0 0 120 160"}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${o.portrait ? "" : '<path d="M8,155 H112" stroke="#C9D2C9" stroke-width="2"/>'}${ruler}${fig}${o.portrait ? "" : badge}</svg>`;
}
const picEl = (p, cls) => { const d = el("div", cls || "pic"); d.innerHTML = avatarSVG(p.av); return d; };
RENDER.pic = function (d) {
  const ol = el("ol", "items");
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(p => p.av);
  shuffle(pool).forEach(p => {
    const li = el("li");
    li.append(picEl(p, "pic q-pic"));
    const others = shuffle(pool.filter(x => x.id !== p.id)).map(x => x.phrase).slice(0, 3);
    const box = el("div", "mcq");
    box.append(options([p.phrase, ...others], [p.phrase], p.id, d, true));
    d.total++;
    li.append(box); ol.append(li);
  });
  d.body.append(ol);
};
/* auto drills built from P */
RENDER.ru2en = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, q: p.ru, o: [p.phrase, ...shuffle(pool.filter(x => x.id !== p.id)).slice(0, 3).map(x => x.phrase)] })) });
  RENDER.mcq(d);
};
RENDER.en2ru = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, q: p.phrase, o: [p.ru, ...shuffle(pool.filter(x => x.id !== p.id)).slice(0, 3).map(x => x.ru)] })) });
  RENDER.mcq(d);
};
RENDER.letters = function (d) {
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(p => !/\s/.test(p.spell || p.phrase));
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, q: p.ru, s: (p.spell || p.phrase).split("").join(" ") })) });
  RENDER.order(d);
};
RENDER.write = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, t: `${p.ru} — [[${p.ans || p.phrase}]]` })) });
  RENDER.gaps(d);
};
