const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Carpeta raíz con tus imágenes
const IMAGES_DIR = path.join(__dirname, "public/images");
// Ruta a tu marca de agua (PNG transparente)
const WATERMARK_PATH = path.join(__dirname, "public/watermark.png");

// Extensiones de imagen que se procesarán
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function processImage(filePath) {
  const tempPath = filePath + "_tmp";

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const imgWidth = metadata.width;
    const imgHeight = metadata.height;

    // Ajustar tamaño de la marca de agua:
    // - Aquí se pone 25% del ancho y 25% de la altura de la imagen
    // - Cambiá 0.25 a otro valor para hacer la marca más grande o más chica
    const wmBuffer = await sharp(WATERMARK_PATH)
      .resize({
        width: Math.round(imgWidth * 0.30),
        height: Math.round(imgHeight * 0.30),
        fit: "inside", // mantiene proporción original del watermark
      })
      .toBuffer();

    await image
      .composite([
        {
          input: wmBuffer,
          gravity: "center", // marca de agua centrada
          blend: "over",
          opacity: 0.1, // transparencia de la marca
        },
      ])
      .toFile(tempPath);

    // Sobrescribir archivo original
    fs.renameSync(tempPath, filePath);
    console.log("✅ Sobrescrita:", filePath);
  } catch (err) {
    console.error("❌ Error procesando", filePath, err.message);
  }
}

// Función recursiva para recorrer carpetas y subcarpetas
async function walkFolder(folder) {
  const items = fs.readdirSync(folder);
  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await walkFolder(fullPath); // procesar subcarpeta
    } else if (IMAGE_EXTS.has(path.extname(item).toLowerCase())) {
      await processImage(fullPath);
    }
  }
}

// Ejecutar script
(async () => {
  console.log("🏁 Procesando imágenes en:", IMAGES_DIR);
  try {
    await walkFolder(IMAGES_DIR);
    console.log("🎉 Todas las imágenes procesadas con watermark centrada");
  } catch (err) {
    console.error("❌ Error general:", err);
  }
})();



//node watermark.cjs