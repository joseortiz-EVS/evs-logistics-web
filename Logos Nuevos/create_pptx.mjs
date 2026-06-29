import pptxgen from "pptxgenjs";
import fs from "fs";
import path from "path";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "EVS Logistics";
pres.title = "EVS Logistics - Soluciones Logísticas Integrales";

// Colors
const NAVY = "0f1c2e";
const BLUE_MED = "1a365d";
const BLUE_LIGHT = "4a90d9";
const WHITE = "FFFFFF";
const GRAY_LIGHT = "E2E8F0";
const GRAY_TEXT = "94A3B8";

// Load logos as base64
const logoDir = path.resolve("../src/assets");
const logoDarkPath = path.join(logoDir, "logo-dark.png");
const logoWhitePath = path.join(logoDir, "logo-white.png");
const symbolPath = path.resolve("../../LOGOS FINALES /EVS_Simbolo.png");

const heroPortPath = path.resolve("../public/fotos/hero-port.jpg");

const logoDark = "image/png;base64," + fs.readFileSync(logoDarkPath).toString("base64");
const logoWhite = "image/png;base64," + fs.readFileSync(logoWhitePath).toString("base64");
const symbol = "image/png;base64," + fs.readFileSync(symbolPath).toString("base64");
const heroPort = "image/jpeg;base64," + fs.readFileSync(heroPortPath).toString("base64");

// Helper: add port background with dark overlay
function addPortBg(slide) {
  slide.addImage({ data: heroPort, x: 0, y: 0, w: 10, h: 5.625, sizing: { type: "cover", w: 10, h: 5.625 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: NAVY, transparency: 25 } });
}

// Helper: add port background with white overlay
function addPortBgLight(slide) {
  slide.addImage({ data: heroPort, x: 0, y: 0, w: 10, h: 5.625, sizing: { type: "cover", w: 10, h: 5.625 } });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: WHITE, transparency: 15 } });
}

// Helper for fresh shadow objects
const cardShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ============================================================
// SLIDE 1: COVER
// ============================================================
let slide1 = pres.addSlide();
slide1.background = { color: NAVY };
addPortBg(slide1);

// Decorative accent bar at top
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT }
});

// Logo (white, centered)
slide1.addImage({ data: logoWhite, x: 3, y: 1.0, w: 4, h: 1.2, sizing: { type: "contain", w: 4, h: 1.2 } });

// Main title
slide1.addText("SOLUCIONES LOGÍSTICAS INTEGRALES", {
  x: 1, y: 2.5, w: 8, h: 0.6, fontSize: 14, fontFace: "Arial",
  color: BLUE_LIGHT, align: "center", charSpacing: 6, bold: true
});

// Tagline
slide1.addText("Intelligent Solutions", {
  x: 1, y: 3.2, w: 8, h: 0.5, fontSize: 16, fontFace: "Georgia",
  color: GRAY_TEXT, align: "center", italic: true
});

// Bottom bar with stats
slide1.addShape(pres.shapes.RECTANGLE, {
  x: 1.5, y: 4.2, w: 7, h: 0.9, fill: { color: BLUE_MED },
  shadow: cardShadow()
});

const stats1 = [
  { val: "5", label: "Países" },
  { val: "12+", label: "Puertos" },
  { val: "8+", label: "Aeropuertos" },
  { val: "< 2hrs", label: "Respuesta" },
];
stats1.forEach((s, i) => {
  const xPos = 1.8 + i * 1.7;
  slide1.addText(s.val, { x: xPos, y: 4.2, w: 1.4, h: 0.5, fontSize: 18, fontFace: "Arial", color: WHITE, bold: true, align: "center", valign: "middle" });
  slide1.addText(s.label, { x: xPos, y: 4.65, w: 1.4, h: 0.35, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, align: "center", valign: "top", charSpacing: 2 });
});

// ============================================================
// SLIDE 2: ABOUT US
// ============================================================
let slide2 = pres.addSlide();
slide2.background = { color: WHITE };
addPortBgLight(slide2);

// Top accent
slide2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

// Section label
slide2.addText("NOSOTROS", {
  x: 0.7, y: 0.4, w: 3, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

// Title
slide2.addText("Empresa mexicana con\nalcance internacional", {
  x: 0.7, y: 0.9, w: 5, h: 1.2, fontSize: 28, fontFace: "Arial",
  color: NAVY, bold: true, lineSpacingMultiple: 1.1
});

// Description
slide2.addText("Desde 2016, conectamos Latinoamérica con Asia a través de soluciones logísticas integrales. Forwarding marítimo, aéreo, terrestre, gestión aduanal y más.", {
  x: 0.7, y: 2.2, w: 5, h: 0.9, fontSize: 12, fontFace: "Arial",
  color: "64748B", lineSpacingMultiple: 1.4
});

// Stats cards on right
const statsData = [
  { val: "10+", label: "AÑOS" },
  { val: "5", label: "PAÍSES" },
  { val: "1000+", label: "ENVÍOS" },
  { val: "50+", label: "CLIENTES" },
];
statsData.forEach((s, i) => {
  const row = Math.floor(i / 2);
  const col = i % 2;
  const xPos = 6.2 + col * 1.8;
  const yPos = 0.8 + row * 1.8;

  slide2.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 1.6, h: 1.5, fill: { color: NAVY },
    shadow: cardShadow()
  });
  slide2.addText(s.val, { x: xPos, y: yPos + 0.2, w: 1.6, h: 0.7, fontSize: 28, fontFace: "Arial", color: BLUE_LIGHT, bold: true, align: "center", valign: "middle" });
  slide2.addText(s.label, { x: xPos, y: yPos + 0.9, w: 1.6, h: 0.4, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, align: "center", charSpacing: 3 });
});

// Logo bottom right
slide2.addImage({ data: logoDark, x: 7.8, y: 4.9, w: 1.8, h: 0.5, sizing: { type: "contain", w: 1.8, h: 0.5 } });

// ============================================================
// SLIDE 3: GLOBAL PRESENCE
// ============================================================
let slide3 = pres.addSlide();
slide3.background = { color: NAVY };
addPortBg(slide3);

slide3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

slide3.addText("PRESENCIA GLOBAL", {
  x: 0.7, y: 0.4, w: 4, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

slide3.addText("Operamos en 5 países\nestratégicos", {
  x: 0.7, y: 0.9, w: 8, h: 1.0, fontSize: 28, fontFace: "Arial",
  color: WHITE, bold: true, lineSpacingMultiple: 1.1
});

// Country cards
const countries = [
  { flag: "🇲🇽", name: "México", year: "2016", loc: "CDMX", role: "Sede Principal" },
  { flag: "🇨🇳", name: "China", year: "2016", loc: "8 Bodegas", role: "Hub Asia" },
  { flag: "🇨🇴", name: "Colombia", year: "2020", loc: "Buenaventura", role: "Oficina" },
  { flag: "🇩🇴", name: "Rep. Dominicana", year: "2021", loc: "Haina", role: "Oficina" },
  { flag: "🇪🇨", name: "Ecuador", year: "2022", loc: "Guayaquil", role: "Oficina" },
];

countries.forEach((c, i) => {
  const xPos = 0.5 + i * 1.85;
  const yPos = 2.4;

  slide3.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 1.7, h: 2.6, fill: { color: BLUE_MED },
    shadow: cardShadow()
  });

  // Year badge
  slide3.addShape(pres.shapes.RECTANGLE, { x: xPos, y: yPos, w: 1.7, h: 0.4, fill: { color: BLUE_LIGHT } });
  slide3.addText(c.year, { x: xPos, y: yPos, w: 1.7, h: 0.4, fontSize: 12, fontFace: "Arial", color: WHITE, bold: true, align: "center", valign: "middle" });

  // Flag
  slide3.addText(c.flag, { x: xPos, y: yPos + 0.5, w: 1.7, h: 0.5, fontSize: 28, align: "center", valign: "middle" });

  // Name
  slide3.addText(c.name, { x: xPos + 0.1, y: yPos + 1.1, w: 1.5, h: 0.4, fontSize: 11, fontFace: "Arial", color: WHITE, bold: true, align: "center", valign: "middle" });

  // Location
  slide3.addText(c.loc, { x: xPos + 0.1, y: yPos + 1.5, w: 1.5, h: 0.35, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, align: "center" });

  // Role
  slide3.addText(c.role, { x: xPos + 0.1, y: yPos + 1.9, w: 1.5, h: 0.35, fontSize: 8, fontFace: "Arial", color: BLUE_LIGHT, align: "center", charSpacing: 2 });
});

// ============================================================
// SLIDE 4: FORWARDING SERVICES
// ============================================================
let slide4 = pres.addSlide();
slide4.background = { color: WHITE };
addPortBgLight(slide4);

slide4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

slide4.addText("SERVICIOS", {
  x: 0.7, y: 0.4, w: 3, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

slide4.addText("Movemos tu carga por\nmar, aire y tierra", {
  x: 0.7, y: 0.9, w: 8, h: 1.0, fontSize: 28, fontFace: "Arial",
  color: NAVY, bold: true, lineSpacingMultiple: 1.1
});

// Three transport mode cards
const modes = [
  { icon: "⚓", title: "MARÍTIMO", desc: "FCL / LCL desde Asia, conectando los principales puertos del Pacífico y Atlántico." },
  { icon: "✈", title: "AÉREO", desc: "Envíos urgentes y carga de alto valor con cobertura en 8+ aeropuertos internacionales." },
  { icon: "🚛", title: "TERRESTRE", desc: "Distribución puerta a puerta en México y Latinoamérica con rastreo en tiempo real." },
];

modes.forEach((m, i) => {
  const xPos = 0.7 + i * 3.1;

  slide4.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: 2.2, w: 2.8, h: 2.8, fill: { color: "F8FAFC" },
    shadow: cardShadow()
  });

  // Accent top
  slide4.addShape(pres.shapes.RECTANGLE, { x: xPos, y: 2.2, w: 2.8, h: 0.06, fill: { color: BLUE_LIGHT } });

  // Icon
  slide4.addText(m.icon, { x: xPos, y: 2.4, w: 2.8, h: 0.6, fontSize: 28, align: "center", valign: "middle" });

  // Title
  slide4.addText(m.title, { x: xPos + 0.2, y: 3.0, w: 2.4, h: 0.4, fontSize: 13, fontFace: "Arial", color: NAVY, bold: true, align: "center", charSpacing: 3 });

  // Description
  slide4.addText(m.desc, { x: xPos + 0.2, y: 3.5, w: 2.4, h: 1.2, fontSize: 10, fontFace: "Arial", color: "64748B", align: "center", lineSpacingMultiple: 1.3 });
});

// Logo
slide4.addImage({ data: logoDark, x: 7.8, y: 0.3, w: 1.8, h: 0.5, sizing: { type: "contain", w: 1.8, h: 0.5 } });

// ============================================================
// SLIDE 5: COMPLEMENTARY SERVICES
// ============================================================
let slide5 = pres.addSlide();
slide5.background = { color: NAVY };
addPortBg(slide5);

slide5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

slide5.addText("SERVICIOS COMPLEMENTARIOS", {
  x: 0.7, y: 0.4, w: 5, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

slide5.addText("Más allá del transporte", {
  x: 0.7, y: 0.9, w: 8, h: 0.7, fontSize: 28, fontFace: "Arial",
  color: WHITE, bold: true
});

const services = [
  { icon: "📋", title: "Gestión Aduanal", tag: "Despacho Aduanero", desc: "Clasificación arancelaria, permisos, documentación y cumplimiento normativo." },
  { icon: "🔍", title: "Agente de Compras", tag: "Sourcing & Trading", desc: "Sourcing internacional, negociación comercial y gestión de marca propia." },
  { icon: "📊", title: "Consultoría Logística", tag: "Optimización", desc: "Análisis de cadenas de suministro y diseño de rutas eficientes." },
  { icon: "🛡", title: "Seguros de Carga", tag: "Protección", desc: "Protección integral para tu mercancía en cualquier modo de transporte." },
];

services.forEach((s, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const xPos = 0.7 + col * 4.5;
  const yPos = 1.9 + row * 1.7;

  slide5.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 4.1, h: 1.4, fill: { color: BLUE_MED },
    shadow: cardShadow()
  });

  // Left accent
  slide5.addShape(pres.shapes.RECTANGLE, { x: xPos, y: yPos, w: 0.06, h: 1.4, fill: { color: BLUE_LIGHT } });

  // Icon
  slide5.addText(s.icon, { x: xPos + 0.2, y: yPos + 0.1, w: 0.6, h: 0.5, fontSize: 22, align: "center", valign: "middle" });

  // Title
  slide5.addText(s.title, { x: xPos + 0.8, y: yPos + 0.1, w: 3, h: 0.35, fontSize: 13, fontFace: "Arial", color: WHITE, bold: true });

  // Tag
  slide5.addText(s.tag, { x: xPos + 0.8, y: yPos + 0.45, w: 3, h: 0.3, fontSize: 8, fontFace: "Arial", color: BLUE_LIGHT, charSpacing: 2 });

  // Description
  slide5.addText(s.desc, { x: xPos + 0.8, y: yPos + 0.8, w: 3, h: 0.5, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, lineSpacingMultiple: 1.3 });
});

// ============================================================
// SLIDE 6: KEY CLIENTS
// ============================================================
let slide6 = pres.addSlide();
slide6.background = { color: WHITE };
addPortBgLight(slide6);

slide6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

slide6.addText("CLIENTES", {
  x: 0.7, y: 0.4, w: 3, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

slide6.addText("Confían en nosotros", {
  x: 0.7, y: 0.9, w: 8, h: 0.7, fontSize: 28, fontFace: "Arial",
  color: NAVY, bold: true
});

// Client logos grid
const clientLogos = [
  "holcim.png", "comap.png", "bubblegummers.png", "andrea.png",
  "priceshoes.png", "icp.png", "colombina.png", "quala.png",
  "haceb.png", "alkosto.png", "alpina.png", "orvehogar.png",
];

const publicLogos = path.resolve("../public/logos");
clientLogos.forEach((cl, i) => {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const xPos = 0.9 + col * 2.25;
  const yPos = 1.9 + row * 1.15;

  // Card background
  slide6.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 2.0, h: 1.0, fill: { color: "F8FAFC" },
    shadow: cardShadow()
  });

  // Client logo
  const clPath = path.join(publicLogos, cl);
  if (fs.existsSync(clPath)) {
    const clData = "image/png;base64," + fs.readFileSync(clPath).toString("base64");
    slide6.addImage({ data: clData, x: xPos + 0.2, y: yPos + 0.1, w: 1.6, h: 0.8, sizing: { type: "contain", w: 1.6, h: 0.8 } });
  }
});

slide6.addImage({ data: logoDark, x: 7.8, y: 0.3, w: 1.8, h: 0.5, sizing: { type: "contain", w: 1.8, h: 0.5 } });

// ============================================================
// SLIDE 7: WHY EVS
// ============================================================
let slide7 = pres.addSlide();
slide7.background = { color: NAVY };
addPortBg(slide7);

slide7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

slide7.addText("¿POR QUÉ EVS?", {
  x: 0.7, y: 0.4, w: 4, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: BLUE_LIGHT, charSpacing: 4, bold: true
});

slide7.addText("Lo que nos diferencia", {
  x: 0.7, y: 0.9, w: 8, h: 0.7, fontSize: 28, fontFace: "Arial",
  color: WHITE, bold: true
});

const diffs = [
  { icon: "⚡", title: "Respuesta < 2 horas", desc: "Cotizaciones y seguimiento con respuesta garantizada en menos de 2 horas hábiles." },
  { icon: "🌎", title: "Presencia en 5 países", desc: "Oficinas y bodegas propias en México, China, Colombia, Rep. Dominicana y Ecuador." },
  { icon: "🔒", title: "Carga asegurada", desc: "Protección integral puerta a puerta en todos los modos de transporte." },
  { icon: "🔗", title: "Solución integral", desc: "Forwarding, aduanas, sourcing, consultoría y seguros en un solo proveedor." },
];

diffs.forEach((d, i) => {
  const col = i % 2;
  const row = Math.floor(i / 2);
  const xPos = 0.7 + col * 4.5;
  const yPos = 1.9 + row * 1.7;

  slide7.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: yPos, w: 4.1, h: 1.4, fill: { color: BLUE_MED },
    shadow: cardShadow()
  });

  // Icon circle
  slide7.addShape(pres.shapes.OVAL, { x: xPos + 0.2, y: yPos + 0.3, w: 0.6, h: 0.6, fill: { color: BLUE_LIGHT } });
  slide7.addText(d.icon, { x: xPos + 0.2, y: yPos + 0.3, w: 0.6, h: 0.6, fontSize: 18, align: "center", valign: "middle" });

  // Title
  slide7.addText(d.title, { x: xPos + 1.0, y: yPos + 0.15, w: 2.9, h: 0.4, fontSize: 13, fontFace: "Arial", color: WHITE, bold: true });

  // Description
  slide7.addText(d.desc, { x: xPos + 1.0, y: yPos + 0.6, w: 2.9, h: 0.65, fontSize: 9, fontFace: "Arial", color: GRAY_LIGHT, lineSpacingMultiple: 1.3 });
});

// Symbol watermark
slide7.addImage({ data: symbol, x: 8.0, y: 4.2, w: 1.5, h: 1.2, transparency: 80, sizing: { type: "contain", w: 1.5, h: 1.2 } });

// ============================================================
// SLIDE 8: CONTACT
// ============================================================
let slide8 = pres.addSlide();
slide8.background = { color: NAVY };
addPortBg(slide8);

slide8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: BLUE_LIGHT } });

// Logo centered
slide8.addImage({ data: logoWhite, x: 3, y: 0.6, w: 4, h: 1.0, sizing: { type: "contain", w: 4, h: 1.0 } });

// Main CTA
slide8.addText("Hablemos de tu próximo envío", {
  x: 1, y: 1.8, w: 8, h: 0.7, fontSize: 28, fontFace: "Arial",
  color: WHITE, bold: true, align: "center"
});

slide8.addText("Solicita una cotización o contáctanos para resolver cualquier duda.", {
  x: 1.5, y: 2.5, w: 7, h: 0.5, fontSize: 12, fontFace: "Arial",
  color: GRAY_TEXT, align: "center"
});

// Contact info cards
const contacts = [
  { icon: "✉", label: "Email", value: "contacto@evslogist.com" },
  { icon: "🌐", label: "Web", value: "www.evslogist.com" },
  { icon: "📱", label: "WhatsApp", value: "Mensaje directo" },
];

contacts.forEach((c, i) => {
  const xPos = 1.2 + i * 2.8;

  slide8.addShape(pres.shapes.RECTANGLE, {
    x: xPos, y: 3.3, w: 2.5, h: 1.2, fill: { color: BLUE_MED },
    shadow: cardShadow()
  });

  slide8.addText(c.icon, { x: xPos, y: 3.35, w: 2.5, h: 0.5, fontSize: 20, align: "center", valign: "middle" });
  slide8.addText(c.label, { x: xPos, y: 3.8, w: 2.5, h: 0.3, fontSize: 9, fontFace: "Arial", color: BLUE_LIGHT, align: "center", charSpacing: 2 });
  slide8.addText(c.value, { x: xPos + 0.1, y: 4.1, w: 2.3, h: 0.3, fontSize: 10, fontFace: "Arial", color: WHITE, align: "center" });
});

// Social media
slide8.addText("Facebook  •  Instagram  •  LinkedIn  •  WhatsApp", {
  x: 1, y: 4.8, w: 8, h: 0.4, fontSize: 10, fontFace: "Arial",
  color: GRAY_TEXT, align: "center"
});

// Footer
slide8.addText("© 2026 EVS Logistics. Todos los derechos reservados.", {
  x: 1, y: 5.2, w: 8, h: 0.3, fontSize: 8, fontFace: "Arial",
  color: "475569", align: "center"
});

// Write file
const outputPath = path.resolve("EVS_Logistics_Presentacion.pptx");
await pres.writeFile({ fileName: outputPath });
console.log("Presentation created at:", outputPath);
