import pptxgen from "pptxgenjs";
import fs from "fs";
import path from "path";

const pres = new pptxgen();
// Business card size: 3.5" x 2" (standard)
pres.defineLayout({ name: "CARD", width: 7, height: 4 });
pres.layout = "CARD";
pres.author = "EVS Logistics";
pres.title = "EVS Logistics - Tarjeta de Presentación";

const NAVY = "0f1c2e";
const BLUE_MED = "1a365d";
const BLUE_LIGHT = "4a90d9";
const WHITE = "FFFFFF";
const GRAY_LIGHT = "CBD5E1";

const logoDir = path.resolve("../src/assets");
const heroPortPath = path.resolve("../public/fotos/hero-port.jpg");

const logoWhite = "image/png;base64," + fs.readFileSync(path.join(logoDir, "logo-white.png")).toString("base64");
const logoDark = "image/png;base64," + fs.readFileSync(path.join(logoDir, "logo-dark.png")).toString("base64");
const symbol = "image/png;base64," + fs.readFileSync(path.resolve("../../LOGOS FINALES /EVS_Simbolo.png")).toString("base64");
const heroPort = "image/jpeg;base64," + fs.readFileSync(heroPortPath).toString("base64");

const cardShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.1 });

// ============================================================
// FRONT - Dark version
// ============================================================
let front = pres.addSlide();
front.background = { color: NAVY };
// Port background with dark overlay
front.addImage({ data: heroPort, x: 0, y: 0, w: 7, h: 4, sizing: { type: "cover", w: 7, h: 4 } });
front.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 7, h: 4, fill: { color: NAVY, transparency: 20 } });

// Accent line top
front.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 7, h: 0.05, fill: { color: BLUE_LIGHT } });

// Logo
front.addImage({ data: logoWhite, x: 0.4, y: 0.4, w: 2.5, h: 0.7, sizing: { type: "contain", w: 2.5, h: 0.7 } });

// Name placeholder
front.addText("[NOMBRE COMPLETO]", {
  x: 0.4, y: 1.4, w: 4, h: 0.45, fontSize: 16, fontFace: "Arial",
  color: WHITE, bold: true
});

// Position placeholder
front.addText("[CARGO / PUESTO]", {
  x: 0.4, y: 1.85, w: 4, h: 0.35, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 2
});

// Divider
front.addShape(pres.shapes.LINE, {
  x: 0.4, y: 2.4, w: 2, h: 0,
  line: { color: BLUE_LIGHT, width: 1 }
});

// Contact info
const frontContacts = [
  { icon: "✉", value: "[correo@evslogist.com]" },
  { icon: "📱", value: "[+52 (55) XXXX-XXXX]" },
  { icon: "🌐", value: "www.evslogist.com" },
];

frontContacts.forEach((c, i) => {
  const yPos = 2.6 + i * 0.35;
  front.addText(c.icon, { x: 0.4, y: yPos, w: 0.35, h: 0.3, fontSize: 10, valign: "middle" });
  front.addText(c.value, { x: 0.8, y: yPos, w: 3, h: 0.3, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle" });
});

// Symbol watermark (bottom right)
front.addImage({ data: symbol, x: 4.8, y: 1.5, w: 2.0, h: 1.6, transparency: 85, sizing: { type: "contain", w: 2.0, h: 1.6 } });

// ============================================================
// BACK - Light version
// ============================================================
let back = pres.addSlide();
back.background = { color: WHITE };

// Accent line top
back.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 7, h: 0.05, fill: { color: BLUE_LIGHT } });

// Navy bottom bar
back.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.0, w: 7, h: 1.0, fill: { color: NAVY } });

// Logo dark (centered)
back.addImage({ data: logoDark, x: 1.5, y: 0.8, w: 4, h: 1.2, sizing: { type: "contain", w: 4, h: 1.2 } });

// Tagline
back.addText("Intelligent Solutions", {
  x: 1, y: 2.1, w: 5, h: 0.4, fontSize: 12, fontFace: "Georgia",
  color: "64748B", align: "center", italic: true
});

// Bottom bar content
back.addText("Soluciones logísticas integrales a nivel global", {
  x: 0.5, y: 3.1, w: 6, h: 0.35, fontSize: 9, fontFace: "Arial",
  color: GRAY_LIGHT, align: "center"
});

back.addText("México  •  China  •  Colombia  •  Rep. Dominicana  •  Ecuador", {
  x: 0.5, y: 3.5, w: 6, h: 0.3, fontSize: 8, fontFace: "Arial",
  color: BLUE_LIGHT, align: "center", charSpacing: 1
});

const outputPath = path.resolve("EVS_Tarjeta_Presentacion.pptx");
await pres.writeFile({ fileName: outputPath });
console.log("Business card created at:", outputPath);
