"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AddedToQueue: () => AddedToQueue,
  Classic: () => Classic,
  ClassicPro: () => ClassicPro,
  Dynamic: () => Dynamic,
  Lyrics: () => Lyrics,
  Mini: () => Mini,
  QueueList: () => QueueList,
  Upcoming: () => Upcoming
});
module.exports = __toCommonJS(index_exports);

// src/themes/classic.ts
var import_canvas2 = require("@napi-rs/canvas");
var import_cropify = require("cropify");

// src/functions/generateSvg.ts
var generateSvg = (svgContent) => {
  return `data:image/svg+xml;base64,${Buffer.from(svgContent).toString("base64")}`;
};

// src/functions/registerFont.ts
var import_canvas = require("@napi-rs/canvas");
var import_node_fs = __toESM(require("fs"));
var import_node_path = __toESM(require("path"));
function registerFont(fontPath, fontName) {
  const rootFontsPath = import_node_path.default.join(__dirname, "../fonts", fontPath);
  if (import_node_fs.default.existsSync(rootFontsPath)) {
    import_canvas.GlobalFonts.registerFromPath(rootFontsPath, fontName);
  } else {
    const srcFontsPath = import_node_path.default.join(__dirname, "../fonts", fontPath);
    if (import_node_fs.default.existsSync(srcFontsPath)) {
      import_canvas.GlobalFonts.registerFromPath(srcFontsPath, fontName);
    } else {
      throw new Error(`Font file not found at ${rootFontsPath} or ${srcFontsPath}`);
    }
  }
}

// src/themes/classic.ts
registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
var Classic = async (option) => {
  if (!option.progress) option.progress = 3;
  if (!option.name) option.name = "Musicard";
  if (!option.author) option.author = "By Unburn";
  if (!option.startTime) option.startTime = "0:00";
  if (!option.endTime) option.endTime = "0:00";
  if (!option.progressBarColor) option.progressBarColor = "#5F2D00";
  if (!option.progressColor) option.progressColor = "#FF7A00";
  if (!option.backgroundColor) option.backgroundColor = "#070707";
  if (!option.nameColor) option.nameColor = "#FF7A00";
  if (!option.authorColor) option.authorColor = "#FFFFFF";
  if (!option.timeColor) option.timeColor = "#FFFFFF";
  if (!option.imageDarkness) option.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="837" height="837" viewBox="0 0 837 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="837" height="837" fill="${option.progressColor}"/>
    <path d="M419.324 635.912C406.035 635.912 394.658 631.18 385.195 621.717C375.732 612.254 371 600.878 371 587.589C371 574.3 375.732 562.923 385.195 553.46C394.658 543.997 406.035 539.265 419.324 539.265C432.613 539.265 443.989 543.997 453.452 553.46C462.915 562.923 467.647 574.3 467.647 587.589C467.647 600.878 462.915 612.254 453.452 621.717C443.989 631.18 432.613 635.912 419.324 635.912ZM371 490.941V201H467.647V490.941H371Z" fill="${option.backgroundColor}"/>
    </svg>`);
  if (!option.thumbnailImage) {
    option.thumbnailImage = noImageSvg;
  }
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas2.loadImage)(
      await (0, import_cropify.cropImage)({
        imagePath: option.thumbnailImage,
        borderRadius: 50,
        width: 837,
        height: 837,
        cropCenter: true
      })
    );
  } catch {
    thumbnail = await (0, import_canvas2.loadImage)(
      await (0, import_cropify.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 50,
        width: 837,
        height: 837,
        cropCenter: true
      })
    );
  }
  if (option.progress > 100) {
    option.progress = 100;
  }
  if (option.imageDarkness < 0) {
    option.imageDarkness = 0;
  } else if (option.imageDarkness > 100) {
    option.imageDarkness = 100;
  }
  if (option.name.length > 18) {
    option.name = `${option.name.slice(0, 18)}...`;
  }
  if (option.author.length > 18) {
    option.author = `${option.author.slice(0, 18)}...`;
  }
  try {
    const canvas = (0, import_canvas2.createCanvas)(2458, 837);
    const ctx = canvas.getContext("2d");
    if (option.backgroundImage) {
      try {
        const image = await (0, import_cropify.cropImage)({
          imagePath: option.backgroundImage,
          width: 1568,
          height: 837,
          cropCenter: true
        });
        await (0, import_cropify.cropImage)({
          // @ts-ignore
          imagePath: image,
          x: 0,
          y: -170,
          width: 1568,
          height: 512,
          borderRadius: 50
        }).then(async (x) => {
          const img = await (0, import_canvas2.loadImage)(x);
          ctx.filter = "blur(20px)";
          ctx.drawImage(img, 0, 0);
          ctx.filter = "none";
        });
        await (0, import_cropify.cropImage)({
          // @ts-ignore
          imagePath: image,
          x: 0,
          y: -845,
          width: 1568,
          height: 272,
          borderRadius: 50
        }).then(async (x) => {
          const img = await (0, import_canvas2.loadImage)(x);
          ctx.filter = "blur(20px)";
          ctx.drawImage(img, 0, 565);
          ctx.filter = "none";
        });
        const darknessSvg = generateSvg(`<svg width="1568" height="837" viewBox="0 0 1568 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1568" height="512" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
                <rect y="565" width="1568" height="272" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
                </svg>`);
        ctx.drawImage(await (0, import_canvas2.loadImage)(darknessSvg), 0, 0);
      } catch (_err) {
        const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1568" height="512" rx="50" fill="${option.backgroundColor}"/>
                <rect y="565" width="1568" height="272" rx="50" fill="${option.backgroundColor}"/>
                </svg>`);
        const background = await (0, import_canvas2.loadImage)(backgroundSvg);
        ctx.drawImage(background, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1568" height="512" rx="50" fill="${option.backgroundColor}"/>
    <rect y="565" width="1568" height="272" rx="50" fill="${option.backgroundColor}"/>
    </svg>`);
      const background = await (0, import_canvas2.loadImage)(backgroundSvg);
      ctx.drawImage(background, 0, 0);
    }
    ctx.drawImage(thumbnail, 1621, 0);
    const completed = 1342 * option.progress / 100;
    const progressBarSvg = generateSvg(`<svg width="1342" height="76" viewBox="0 0 1342 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="13" width="1342" height="47" rx="20" fill="${option.progressBarColor}"/>
        <rect y="13" width="${completed}" height="47" rx="20" fill="${option.progressColor}"/>
        <rect x="${completed - 40}" y="3" width="69.4422" height="69.4422" rx="34.7211" fill="${option.progressColor}" stroke="${option.backgroundColor}" stroke-width="6"/>
        </svg>`);
    const progressBar = await (0, import_canvas2.loadImage)(progressBarSvg);
    ctx.drawImage(progressBar, 113, 635);
    ctx.fillStyle = `${option.nameColor}`;
    ctx.font = "124px extrabold";
    ctx.fillText(option.name, 113, 230);
    ctx.fillStyle = `${option.authorColor}`;
    ctx.font = "87px regular";
    ctx.fillText(option.author, 113, 370);
    ctx.fillStyle = `${option.timeColor}`;
    ctx.font = "50px semibold";
    ctx.fillText(option.startTime, 113, 768);
    ctx.fillStyle = `${option.timeColor}`;
    ctx.font = "50px semibold";
    ctx.fillText(option.endTime, 1332, 768);
    return canvas.toBuffer("image/png");
  } catch (e) {
    throw new Error(e.message);
  }
};

// src/themes/classicpro.ts
var import_canvas3 = require("@napi-rs/canvas");
var import_cropify2 = require("cropify");
var ClassicPro = async (option) => {
  if (!option.progress) option.progress = 3.6;
  if (!option.name) option.name = "Musicard";
  if (!option.author) option.author = "By Unburn";
  if (!option.startTime) option.startTime = "0:00";
  if (!option.endTime) option.endTime = "0:00";
  if (!option.progressBarColor) option.progressBarColor = "#5F2D00";
  if (!option.progressColor) option.progressColor = "#FF7A00";
  if (!option.backgroundColor) option.backgroundColor = "#070707";
  if (!option.nameColor) option.nameColor = "#FF7A00";
  if (!option.authorColor) option.authorColor = "#FFFFFF";
  if (!option.timeColor) option.timeColor = "#FFFFFF";
  if (!option.imageDarkness) option.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="837" height="837" viewBox="0 0 837 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="837" height="837" fill="${option.progressColor}"/>
    <path d="M419.324 635.912C406.035 635.912 394.658 631.18 385.195 621.717C375.732 612.254 371 600.878 371 587.589C371 574.3 375.732 562.923 385.195 553.46C394.658 543.997 406.035 539.265 419.324 539.265C432.613 539.265 443.989 543.997 453.452 553.46C462.915 562.923 467.647 574.3 467.647 587.589C467.647 600.878 462.915 612.254 453.452 621.717C443.989 631.18 432.613 635.912 419.324 635.912ZM371 490.941V201H467.647V490.941H371Z" fill="${option.backgroundColor}"/>
    </svg>`);
  if (!option.thumbnailImage) {
    option.thumbnailImage = noImageSvg;
  }
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas3.loadImage)(
      await (0, import_cropify2.cropImage)({
        imagePath: option.thumbnailImage,
        borderRadius: 50,
        width: 331,
        height: 331,
        cropCenter: true
      })
    );
  } catch {
    thumbnail = await (0, import_canvas3.loadImage)(
      await (0, import_cropify2.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 50,
        width: 331,
        height: 331,
        cropCenter: true
      })
    );
  }
  if (option.progress > 100) {
    option.progress = 100;
  }
  if (option.name.length > 12) {
    option.name = `${option.name.slice(0, 12)}...`;
  }
  if (option.author.length > 12) {
    option.author = `${option.author.slice(0, 12)}...`;
  }
  try {
    const canvas = (0, import_canvas3.createCanvas)(1252, 708);
    const ctx = canvas.getContext("2d");
    if (option.backgroundImage) {
      try {
        const darknessSvg = generateSvg(`<svg width="1252" height="708" viewBox="0 0 1252 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1252" height="708" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
                </svg>`);
        const image = await (0, import_cropify2.cropImage)({
          imagePath: option.backgroundImage,
          width: 1252,
          height: 708,
          borderRadius: 50,
          cropCenter: true
        });
        ctx.filter = "blur(10px)";
        ctx.drawImage(await (0, import_canvas3.loadImage)(image), 0, 0);
        ctx.drawImage(await (0, import_canvas3.loadImage)(darknessSvg), 0, 0);
        ctx.filter = "none";
      } catch (_error) {
        const backgroundSvg = generateSvg(`<svg width="1252" height="708" viewBox="0 0 1252 708" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1252" height="708" rx="50" fill="${option.backgroundColor}"/>
                </svg>`);
        const background = await (0, import_canvas3.loadImage)(backgroundSvg);
        ctx.drawImage(background, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="1252" height="708" viewBox="0 0 1252 708" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1252" height="708" rx="50" fill="${option.backgroundColor}"/>
            </svg>`);
      const background = await (0, import_canvas3.loadImage)(backgroundSvg);
      ctx.drawImage(background, 0, 0);
    }
    ctx.drawImage(thumbnail, 87, 91);
    const completed = 1083 * option.progress / 100;
    const progressBarSvg = generateSvg(`<svg width="1083" height="77" viewBox="0 0 1083 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="19" width="1083" height="40" rx="20" fill="${option.progressBarColor}"/>
        <rect y="19" width="${completed}" height="40" rx="20" fill="${option.progressColor}"/>
        <rect x="${completed - 40}" y="5" width="65" height="65" rx="35.5" fill="${option.progressColor}" stroke="${option.backgroundColor}" stroke-width="5"/>
        </svg>`);
    const progressBar = await (0, import_canvas3.loadImage)(progressBarSvg);
    ctx.drawImage(progressBar, 87, 490);
    ctx.fillStyle = `${option.nameColor}`;
    ctx.font = "90px extrabold";
    ctx.fillText(option.name, 486, 240);
    ctx.fillStyle = `${option.authorColor}`;
    ctx.font = "60px semibold";
    ctx.fillText(option.author, 486, 330);
    ctx.fillStyle = `${option.timeColor}`;
    ctx.font = "40px semibold";
    ctx.fillText(option.startTime, 85, 630);
    ctx.fillStyle = `${option.timeColor}`;
    ctx.font = "40px semibold";
    ctx.fillText(option.endTime, 1070, 630);
    return canvas.toBuffer("image/png");
  } catch (e) {
    throw new Error(e.message);
  }
};

// src/themes/dynamic.ts
var import_canvas4 = require("@napi-rs/canvas");
var import_cropify3 = require("cropify");
var Dynamic = async (option) => {
  if (!option.progress) option.progress = 0.618;
  if (!option.name) option.name = "Musicard";
  if (!option.author) option.author = "By Unburn";
  if (!option.progressBarColor) option.progressBarColor = "#5F2D00";
  if (!option.progressColor) option.progressColor = "#FF7A00";
  if (!option.backgroundColor) option.backgroundColor = "#070707";
  if (!option.nameColor) option.nameColor = "#FF7A00";
  if (!option.authorColor) option.authorColor = "#FFFFFF";
  if (!option.imageDarkness) option.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="837" height="837" viewBox="0 0 837 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="837" height="837" fill="${option.progressColor}"/>
    <path d="M419.324 635.912C406.035 635.912 394.658 631.18 385.195 621.717C375.732 612.254 371 600.878 371 587.589C371 574.3 375.732 562.923 385.195 553.46C394.658 543.997 406.035 539.265 419.324 539.265C432.613 539.265 443.989 543.997 453.452 553.46C462.915 562.923 467.647 574.3 467.647 587.589C467.647 600.878 462.915 612.254 453.452 621.717C443.989 631.18 432.613 635.912 419.324 635.912ZM371 490.941V201H467.647V490.941H371Z" fill="${option.backgroundColor}"/>
    </svg>`);
  if (!option.thumbnailImage) {
    option.thumbnailImage = noImageSvg;
  }
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas4.loadImage)(
      await (0, import_cropify3.cropImage)({
        imagePath: option.thumbnailImage,
        borderRadius: 210,
        width: 400,
        height: 400,
        cropCenter: true
      })
    );
  } catch {
    thumbnail = await (0, import_canvas4.loadImage)(
      await (0, import_cropify3.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 210,
        width: 400,
        height: 400,
        cropCenter: true
      })
    );
  }
  if (option.progress >= 100) {
    option.progress = 99.999;
  }
  if (option.name.length > 20) {
    option.name = `${option.name.slice(0, 20)}...`;
  }
  if (option.author.length > 20) {
    option.author = `${option.author.slice(0, 20)}...`;
  }
  try {
    const canvas = (0, import_canvas4.createCanvas)(2367, 520);
    const ctx = canvas.getContext("2d");
    if (option.backgroundImage) {
      try {
        const bgImage = await (0, import_canvas4.loadImage)(option.backgroundImage);
        const canvasWidth = 2367;
        const canvasHeight = 520;
        const imgWidth = bgImage.width;
        const imgHeight = bgImage.height;
        const canvasRatio = canvasWidth / canvasHeight;
        const imgRatio = imgWidth / imgHeight;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (imgRatio > canvasRatio) {
          drawHeight = canvasHeight;
          drawWidth = imgWidth * (canvasHeight / imgHeight);
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = imgHeight * (canvasWidth / imgWidth);
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, canvasHeight, 260);
        ctx.clip();
        ctx.filter = "blur(15px)";
        ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
        ctx.filter = "none";
        ctx.fillStyle = `rgba(7, 7, 7, ${option.imageDarkness / 100})`;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.restore();
      } catch (_error) {
        const backgroundSvg = generateSvg(`<svg width="2367" height="520" viewBox="0 0 2367 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 260C0 116.406 116.406 0 260 0H2107C2250.59 0 2367 116.406 2367 260V260C2367 403.594 2250.59 520 2107 520H260C116.406 520 0 403.594 0 260V260Z" fill="${option.backgroundColor}"/>
        </svg>`);
        const background = await (0, import_canvas4.loadImage)(backgroundSvg);
        ctx.drawImage(background, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="2367" height="520" viewBox="0 0 2367 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 260C0 116.406 116.406 0 260 0H2107C2250.59 0 2367 116.406 2367 260V260C2367 403.594 2250.59 520 2107 520H260C116.406 520 0 403.594 0 260V260Z" fill="${option.backgroundColor}"/>
    </svg>`);
      const background = await (0, import_canvas4.loadImage)(backgroundSvg);
      ctx.drawImage(background, 0, 0);
    }
    ctx.drawImage(thumbnail, 69, 61);
    ctx.beginPath();
    ctx.arc(2100, 260, 155, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.lineWidth = 35;
    ctx.strokeStyle = `${option.progressBarColor}`;
    ctx.stroke();
    const angle = option.progress / 100 * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(2100, 260, 155, -Math.PI / 2, -Math.PI / 2 + angle, false);
    ctx.lineWidth = 35;
    ctx.strokeStyle = option.progressColor;
    ctx.stroke();
    ctx.fillStyle = `${option.nameColor}`;
    ctx.font = "100px extrabold";
    ctx.fillText(option.name, 550, 240);
    ctx.fillStyle = `${option.authorColor}`;
    ctx.font = "70px semibold";
    ctx.fillText(option.author, 550, 350);
    return canvas.toBuffer("image/png");
  } catch (e) {
    throw new Error(e.message);
  }
};

// src/themes/mini.ts
var import_canvas5 = require("@napi-rs/canvas");
var import_cropify4 = require("cropify");
var Mini = async (option) => {
  if (!option.progress) option.progress = 2.618;
  if (!option.progressBarColor) option.progressBarColor = "#5F2D00";
  if (!option.progressColor) option.progressColor = "#FF7A00";
  if (!option.backgroundColor) option.backgroundColor = "#070707";
  if (!option.menuColor) option.menuColor = "#FF7A00";
  if (!option.imageDarkness) option.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="837" height="837" viewBox="0 0 837 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="837" height="837" fill="${option.progressColor}"/>
    <path d="M419.324 635.912C406.035 635.912 394.658 631.18 385.195 621.717C375.732 612.254 371 600.878 371 587.589C371 574.3 375.732 562.923 385.195 553.46C394.658 543.997 406.035 539.265 419.324 539.265C432.613 539.265 443.989 543.997 453.452 553.46C462.915 562.923 467.647 574.3 467.647 587.589C467.647 600.878 462.915 612.254 453.452 621.717C443.989 631.18 432.613 635.912 419.324 635.912ZM371 490.941V201H467.647V490.941H371Z" fill="${option.backgroundColor}"/>
    </svg>`);
  if (!option.thumbnailImage) {
    option.thumbnailImage = noImageSvg;
  }
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas5.loadImage)(
      await (0, import_cropify4.cropImage)({
        imagePath: option.thumbnailImage,
        borderRadius: 50,
        width: 544,
        height: 544,
        cropCenter: true
      })
    );
  } catch {
    thumbnail = await (0, import_canvas5.loadImage)(
      await (0, import_cropify4.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 50,
        width: 544,
        height: 544,
        cropCenter: true
      })
    );
  }
  if (option.progress > 100) {
    option.progress = 100;
  }
  try {
    const canvas = (0, import_canvas5.createCanvas)(613, 837);
    const ctx = canvas.getContext("2d");
    if (option.backgroundImage) {
      try {
        const darknessSvg = generateSvg(`
        <svg width="618" height="837" viewBox="0 0 618 837" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="618" height="837" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
        </svg>`);
        const image = await (0, import_cropify4.cropImage)({
          imagePath: option.backgroundImage,
          width: 613,
          height: 837,
          borderRadius: 50,
          cropCenter: true
        });
        ctx.filter = "blur(10px)";
        ctx.drawImage(await (0, import_canvas5.loadImage)(image), 0, 0);
        ctx.filter = "none";
        ctx.drawImage(await (0, import_canvas5.loadImage)(darknessSvg), 0, 0);
      } catch (_error) {
        const backgroundSvg = generateSvg(`
        <svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="613" height="837" rx="50" fill="${option.backgroundColor}" />
        </svg>`);
        const background = await (0, import_canvas5.loadImage)(backgroundSvg);
        ctx.drawImage(background, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`
    <svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="613" height="837" rx="50" fill="${option.backgroundColor}" />
    </svg>`);
      const background = await (0, import_canvas5.loadImage)(backgroundSvg);
      ctx.drawImage(background, 0, 0);
    }
    ctx.drawImage(thumbnail, 34, 29);
    const completed = 544 * option.progress / 100;
    const progressBarSvg = generateSvg(`<svg width="544" height="34" viewBox="0 0 544 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="544" height="34" rx="17" fill="${option.progressBarColor}" />
        <rect width="${completed}" height="34" rx="17" fill="${option.progressColor}" />
        </svg>`);
    const progressBar = await (0, import_canvas5.loadImage)(progressBarSvg);
    ctx.drawImage(progressBar, 34, 611);
    let middleMenu;
    if (option.paused) {
      middleMenu = `<path d="M145 69.6L178.6 48L145 26.4V69.6ZM157 96C150.36 96 144.12 94.74 138.28 92.22C132.44 89.7 127.36 86.28 123.04 81.96C118.72 77.64 115.3 72.56 112.78 66.72C110.26 60.88 109 54.64 109 48C109 41.36 110.26 35.12 112.78 29.28C115.3 23.44 118.72 18.36 123.04 14.04C127.36 9.72 132.44 6.3 138.28 3.78C144.12 1.26 150.36 0 157 0C163.64 0 169.88 1.26 175.72 3.78C181.56 6.3 186.64 9.72 190.96 14.04C195.28 18.36 198.7 23.44 201.22 29.28C203.74 35.12 205 41.36 205 48C205 54.64 203.74 60.88 201.22 66.72C198.7 72.56 195.28 77.64 190.96 81.96C186.64 86.28 181.56 89.7 175.72 92.22C169.88 94.74 163.64 96 157 96Z" fill="${option.menuColor}" />`;
    } else {
      middleMenu = `<path d="M142.6 67.2H152.2V28.8H142.6V67.2ZM161.8 67.2H171.4V28.8H161.8V67.2ZM157 96C150.36 96 144.12 94.74 138.28 92.22C132.44 89.7 127.36 86.28 123.04 81.96C118.72 77.64 115.3 72.56 112.78 66.72C110.26 60.88 109 54.64 109 48C109 41.36 110.26 35.12 112.78 29.28C115.3 23.44 118.72 18.36 123.04 14.04C127.36 9.72 132.44 6.3 138.28 3.78C144.12 1.26 150.36 0 157 0C163.64 0 169.88 1.26 175.72 3.78C181.56 6.3 186.64 9.72 190.96 14.04C195.28 18.36 198.7 23.44 201.22 29.28C203.74 35.12 205 41.36 205 48C205 54.64 203.74 60.88 201.22 66.72C198.7 72.56 195.28 77.64 190.96 81.96C186.64 86.28 181.56 89.7 175.72 92.22C169.88 94.74 163.64 96 157 96Z" fill="${option.menuColor}" />`;
    }
    const menuSvg = generateSvg(
      `<svg width="315" height="96" viewBox="0 0 315 96" fill="none" xmlns="http://www.w3.org/2000/svg">${middleMenu}<path d="M263.2 62.8H270.6V33.2H263.2V62.8ZM278 62.8L300.2 48L278 33.2V62.8ZM278 85C272.882 85 268.072 84.0287 263.57 82.0862C259.068 80.1437 255.153 77.5075 251.822 74.1775C248.492 70.8475 245.856 66.9317 243.914 62.43C241.971 57.9283 241 53.1183 241 48C241 42.8817 241.971 38.0717 243.914 33.57C245.856 29.0683 248.492 25.1525 251.822 21.8225C255.153 18.4925 259.068 15.8563 263.57 13.9138C268.072 11.9712 272.882 11 278 11C283.118 11 287.928 11.9712 292.43 13.9138C296.932 15.8563 300.848 18.4925 304.178 21.8225C307.508 25.1525 310.144 29.0683 312.086 33.57C314.029 38.0717 315 42.8817 315 48C315 53.1183 314.029 57.9283 312.086 62.43C310.144 66.9317 307.508 70.8475 304.178 74.1775C300.848 77.5075 296.932 80.1437 292.43 82.0862C287.928 84.0287 283.118 85 278 85Z" fill="${option.menuColor}" /><path d="M51.8 33.2L44.4 33.2L44.4 62.8H51.8L51.8 33.2ZM37 33.2L14.8 48L37 62.8L37 33.2ZM37 11C42.1183 11 46.9283 11.9713 51.43 13.9138C55.9317 15.8563 59.8475 18.4925 63.1775 21.8225C66.5075 25.1525 69.1437 29.0683 71.0862 33.57C73.0288 38.0717 74 42.8817 74 48C74 53.1183 73.0288 57.9283 71.0862 62.43C69.1437 66.9317 66.5075 70.8475 63.1775 74.1775C59.8475 77.5075 55.9317 80.1437 51.43 82.0862C46.9283 84.0288 42.1183 85 37 85C31.8817 85 27.0717 84.0288 22.57 82.0862C18.0683 80.1437 14.1525 77.5075 10.8225 74.1775C7.4925 70.8475 4.85625 66.9317 2.91375 62.43C0.97125 57.9283 -9.53674e-07 53.1183 -9.53674e-07 48C-9.53674e-07 42.8817 0.97125 38.0717 2.91375 33.57C4.85625 29.0683 7.4925 25.1525 10.8225 21.8225C14.1525 18.4925 18.0683 15.8563 22.57 13.9138C27.0717 11.9713 31.8817 11 37 11Z" fill="${option.menuColor}" /></svg>`
    );
    const menu = await (0, import_canvas5.loadImage)(menuSvg);
    ctx.drawImage(menu, 143, 693);
    return canvas.toBuffer("image/png");
  } catch (e) {
    throw new Error(e.message);
  }
};

// src/themes/upcoming.ts
var import_canvas6 = require("@napi-rs/canvas");
var import_cropify5 = require("cropify");
registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
var Upcoming = async (options) => {
  if (!options.title) options.title = "Musicard";
  if (!options.titleColor) options.titleColor = "#d0d5d6";
  if (!options.author) options.author = "By Unburn";
  if (!options.authorColor) options.authorColor = "#FFFFFF";
  if (!options.trackIndex) options.trackIndex = 1;
  if (!options.trackIndexTextColor) options.trackIndexTextColor = "#000000";
  if (!options.trackIndexBackgroundColor) options.trackIndexBackgroundColor = "#d0d5d6";
  if (!(options.trackIndexBackgroundRadii || !Array.isArray(options.trackIndexBackgroundRadii))) options.trackIndexBackgroundRadii = 10;
  if (!options.backgroundColor) options.backgroundColor = "#070707";
  if (!options.imageDarkness) options.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);
  if (!options.thumbnailImage) {
    options.thumbnailImage = noImageSvg;
  }
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas6.loadImage)(
      await (0, import_cropify5.cropImage)({
        //@ts-ignore
        imagePath: options.thumbnailImage,
        borderRadius: 20,
        width: 150,
        height: 150,
        cropCenter: true
      })
    );
  } catch (_e) {
    thumbnail = await (0, import_canvas6.loadImage)(
      await (0, import_cropify5.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 20,
        width: 150,
        height: 150,
        cropCenter: true
      })
    );
  }
  if (options.imageDarkness < 0) {
    options.imageDarkness = 0;
  } else if (options.imageDarkness > 100) {
    options.imageDarkness = 100;
  }
  if (options.title.length > 18) {
    options.title = `${options.title.slice(0, 18)}...`;
  }
  if (options.author.length > 19) {
    options.author = `${options.author.slice(0, 19)}...`;
  }
  try {
    const canvas = (0, import_canvas6.createCanvas)(690, 194);
    const ctx = canvas.getContext("2d");
    if (options.backgroundImage) {
      try {
        const darknessSvg = generateSvg(`<svg width="690" height="194" viewBox="0 0 690 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="194" rx="30" fill="#070707" fill-opacity="${options.imageDarkness / 100}"/>
                </svg>`);
        const image = await (0, import_cropify5.cropImage)({
          // @ts-ignore
          imagePath: options.backgroundImage,
          width: 690,
          height: 194,
          borderRadius: 35,
          cropCenter: true
        });
        ctx.drawImage(await (0, import_canvas6.loadImage)(image), 0, 0);
        ctx.drawImage(await (0, import_canvas6.loadImage)(darknessSvg), 0, 0);
      } catch (_error) {
        const backgroundSvg = generateSvg(`<svg width="690" height="194" viewBox="0 0 690 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="194" rx="35" fill="${options.backgroundColor}"/>
                </svg>`);
        const backgroundColor = await (0, import_canvas6.loadImage)(backgroundSvg);
        ctx.drawImage(backgroundColor, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="690" height="194" viewBox="0 0 690 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="690" height="194" rx="35" fill="${options.backgroundColor}"/>
            </svg>`);
      const backgroundColor = await (0, import_canvas6.loadImage)(backgroundSvg);
      ctx.drawImage(backgroundColor, 0, 0);
    }
    ctx.drawImage(thumbnail, 22, 22);
    ctx.font = "33px extrabold";
    ctx.fillStyle = options.titleColor;
    ctx.fillText(options.title, 200, canvas.height / 2);
    ctx.font = "23px medium";
    ctx.fillStyle = options.authorColor;
    ctx.fillText(options.author, 200, canvas.height / 2 + 35);
    ctx.fillStyle = options.trackIndexBackgroundColor;
    ctx.beginPath();
    ctx.roundRect(canvas.width - 65, canvas.height - 63, 50, 50, options.trackIndexBackgroundRadii);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = options.trackIndexTextColor;
    ctx.font = "30px bold";
    ctx.fillText(options.trackIndex.toString(), canvas.width - 47, canvas.height - 26);
    return canvas.toBuffer("image/png");
  } catch (error) {
    throw new Error(error.message);
  }
};

// src/themes/queue.ts
var import_canvas7 = require("@napi-rs/canvas");
var import_cropify6 = require("cropify");
registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "badge");
var QueueList = async (options) => {
  if (!options.title) options.title = "Queue List";
  if (!options.titleColor) options.titleColor = "#FFFFFF";
  if (!options.backgroundColor) options.backgroundColor = "#070707";
  if (!options.imageDarkness) options.imageDarkness = 10;
  const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);
  try {
    const canvas = (0, import_canvas7.createCanvas)(690, 700);
    const ctx = canvas.getContext("2d");
    if (options.backgroundImage) {
      try {
        const darknessSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="700" rx="100" fill="#070707" fill-opacity="${options.imageDarkness / 100}"/>
                </svg>`);
        const image = await (0, import_cropify6.cropImage)({
          //@ts-ignore
          imagePath: options.backgroundImage,
          width: 690,
          height: 700,
          borderRadius: 50,
          cropCenter: true
        });
        ctx.drawImage(await (0, import_canvas7.loadImage)(image), 0, 0);
        ctx.drawImage(await (0, import_canvas7.loadImage)(darknessSvg), 0, 0);
      } catch (_error) {
        const backgroundSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="700" rx="100" fill="${options.backgroundColor}"/>
                </svg>`);
        const backgroundColor = await (0, import_canvas7.loadImage)(backgroundSvg);
        ctx.drawImage(backgroundColor, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="690" height="700" rx="100" fill="${options.backgroundColor}"/>
            </svg>`);
      const backgroundColor = await (0, import_canvas7.loadImage)(backgroundSvg);
      ctx.drawImage(backgroundColor, 0, 0);
    }
    ctx.font = "25px badge";
    const badgeText = options.title;
    const padX = 12;
    const padY = 8;
    const textWidth = ctx.measureText(badgeText).width;
    const textHeight = 30;
    const badgeX = 20;
    const badgeY = 25;
    const badgeW = textWidth + padX * 2;
    const badgeH = textHeight + padY * 2;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = "#5865F2";
    ctx.beginPath();
    ctx.moveTo(badgeX + 12, badgeY);
    ctx.lineTo(badgeX + badgeW - 12, badgeY);
    ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + 12);
    ctx.lineTo(badgeX + badgeW, badgeY + badgeH - 12);
    ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - 12, badgeY + badgeH);
    ctx.lineTo(badgeX + 12, badgeY + badgeH);
    ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - 12);
    ctx.lineTo(badgeX, badgeY + 12);
    ctx.quadraticCurveTo(badgeX, badgeY, badgeX + 12, badgeY);
    ctx.closePath();
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.fillStyle = options.titleColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(badgeText, badgeX + badgeW / 2, 52);
    ctx.textAlign = "start";
    ctx.textBaseline = "alphabetic";
    const tracksToShow = options.tracks.slice(0, 10);
    for (let i = 0; i < tracksToShow.length; i++) {
      const track = tracksToShow[i];
      const y = 90 + i * 60;
      let thumbnail;
      try {
        thumbnail = await (0, import_canvas7.loadImage)(
          await (0, import_cropify6.cropImage)({
            //@ts-ignore
            imagePath: track.thumbnailImage || noImageSvg,
            borderRadius: 10,
            width: 48,
            height: 48,
            cropCenter: true
          })
        );
      } catch {
        thumbnail = await (0, import_canvas7.loadImage)(
          await (0, import_cropify6.cropImage)({
            imagePath: noImageSvg,
            borderRadius: 10,
            width: 48,
            height: 48,
            cropCenter: true
          })
        );
      }
      ctx.drawImage(thumbnail, 20, y);
      ctx.font = "18px semibold";
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(
        track.title.length > 28 ? track.title.slice(0, 28) + "\u2026" : track.title,
        80,
        y + 20
      );
      ctx.font = "14px regular";
      ctx.fillStyle = "#CCCCCC";
      ctx.fillText(
        track.author.length > 22 ? track.author.slice(0, 22) + "\u2026" : track.author,
        80,
        y + 40
      );
      ctx.fillStyle = "#5865F2";
      ctx.font = "16px bold";
      ctx.fillText(`${i + 1}`, canvas.width - 40, y + 28);
      ctx.beginPath();
      ctx.moveTo(20, y + 55);
      ctx.lineTo(canvas.width - 20, y + 55);
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    return canvas.toBuffer("image/png");
  } catch (error) {
    throw new Error(error.message);
  }
};

// src/themes/addedtoqueue.ts
var import_canvas8 = require("@napi-rs/canvas");
var import_cropify7 = require("cropify");
registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "badge");
var AddedToQueue = async (options) => {
  if (!options.titleColor) options.titleColor = "#FFFFFF";
  if (!options.authorColor) options.authorColor = "#FFFFFF";
  if (!options.message) options.message = "Added to Queue";
  if (!options.messageColor) options.messageColor = "#5865F2";
  if (!options.backgroundColor) options.backgroundColor = "#070707";
  if (!options.imageDarkness) options.imageDarkness = 10;
  if (!options.badgeBg) options.badgeBg = "#5865F2";
  if (!options.badgeBorder) options.badgeBorder = "#fff";
  if (!options.badgeText) options.badgeText = "#fff";
  const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas8.loadImage)(
      await (0, import_cropify7.cropImage)({
        //@ts-ignore
        imagePath: options.thumbnailImage || noImageSvg,
        borderRadius: 20,
        width: 100,
        height: 100,
        cropCenter: true
      })
    );
  } catch (_e) {
    thumbnail = await (0, import_canvas8.loadImage)(
      await (0, import_cropify7.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 20,
        width: 100,
        height: 100,
        cropCenter: true
      })
    );
  }
  if (options.imageDarkness < 0) {
    options.imageDarkness = 0;
  } else if (options.imageDarkness > 100) {
    options.imageDarkness = 100;
  }
  if (options.title.length > 18) {
    options.title = `${options.title.slice(0, 18)}...`;
  }
  if (options.author.length > 19) {
    options.author = `${options.author.slice(0, 19)}...`;
  }
  try {
    const canvas = (0, import_canvas8.createCanvas)(500, 150);
    const ctx = canvas.getContext("2d");
    if (options.backgroundImage) {
      try {
        const bgImage = await (0, import_canvas8.loadImage)(options.backgroundImage);
        const canvasWidth = 500;
        const canvasHeight = 150;
        const imgWidth = bgImage.width;
        const imgHeight = bgImage.height;
        const canvasRatio = canvasWidth / canvasHeight;
        const imgRatio = imgWidth / imgHeight;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (imgRatio > canvasRatio) {
          drawHeight = canvasHeight;
          drawWidth = imgWidth * (canvasHeight / imgHeight);
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = imgHeight * (canvasWidth / imgWidth);
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, canvasHeight, 25);
        ctx.clip();
        ctx.filter = "blur(10px)";
        ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
        ctx.filter = "none";
        ctx.fillStyle = `rgba(7, 7, 7, ${options.imageDarkness / 100})`;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.restore();
      } catch (_error) {
        const backgroundSvg = generateSvg(`<svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="150" rx="25" fill="${options.backgroundColor}"/>
        </svg>`);
        const backgroundColor = await (0, import_canvas8.loadImage)(backgroundSvg);
        ctx.drawImage(backgroundColor, 0, 0);
      }
    } else {
      const backgroundSvg = generateSvg(`<svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="150" rx="25" fill="${options.backgroundColor}"/>
    </svg>`);
      const backgroundColor = await (0, import_canvas8.loadImage)(backgroundSvg);
      ctx.drawImage(backgroundColor, 0, 0);
    }
    ctx.drawImage(thumbnail, 20, 15);
    ctx.font = "22px extrabold";
    ctx.fillStyle = options.titleColor;
    ctx.fillText(options.title, 150, 55);
    ctx.font = "17px medium";
    ctx.fillStyle = options.authorColor;
    ctx.fillText(options.author, 150, 85);
    ctx.font = "15px badge";
    const badgeText = options.message;
    const padX = 10;
    const padY = 6;
    const textWidth = ctx.measureText(badgeText).width;
    const textHeight = 20;
    const badgeX = canvas.width - textWidth - padX * 2 - 25;
    const badgeY = 20;
    const badgeW = textWidth + padX * 2;
    const badgeH = textHeight + padY * 2;
    ctx.beginPath();
    ctx.moveTo(badgeX + 10, badgeY);
    ctx.lineTo(badgeX + badgeW - 10, badgeY);
    ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + 10);
    ctx.lineTo(badgeX + badgeW, badgeY + badgeH - 10);
    ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - 10, badgeY + badgeH);
    ctx.lineTo(badgeX + 10, badgeY + badgeH);
    ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - 10);
    ctx.lineTo(badgeX, badgeY + 10);
    ctx.quadraticCurveTo(badgeX, badgeY, badgeX + 10, badgeY);
    ctx.closePath();
    ctx.fillStyle = options.badgeBg;
    ctx.fill();
    ctx.strokeStyle = options.badgeBorder;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = options.badgeText;
    ctx.fillText(badgeText, badgeX + padX, badgeY + badgeH - padY - 2);
    return canvas.toBuffer("image/png");
  } catch (error) {
    throw new Error(error.message);
  }
};

// src/themes/lyrics.ts
var import_canvas9 = require("@napi-rs/canvas");
var import_cropify8 = require("cropify");
registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("DmSans-Medium.ttf", "lyrics");
var Lyrics = async (options) => {
  if (!options.titleColor) options.titleColor = "#FFFFFF";
  if (!options.authorColor) options.authorColor = "#FFFFFF";
  if (!options.lyricsColor) options.lyricsColor = "#FFFFFF";
  if (!options.backgroundColor) options.backgroundColor = "#070707";
  if (!options.imageDarkness) options.imageDarkness = 10;
  const canvasWidth = 720;
  const canvasHeight = 1280;
  const noImageSvg = generateSvg(`<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="${options.backgroundColor}" />
    </svg>`);
  let thumbnail;
  try {
    thumbnail = await (0, import_canvas9.loadImage)(
      await (0, import_cropify8.cropImage)({
        //@ts-ignore
        imagePath: options.thumbnailImage || noImageSvg,
        borderRadius: 14,
        width: 100,
        height: 100,
        cropCenter: true
      })
    );
  } catch (_e) {
    thumbnail = await (0, import_canvas9.loadImage)(
      await (0, import_cropify8.cropImage)({
        imagePath: noImageSvg,
        borderRadius: 14,
        width: 100,
        height: 100,
        cropCenter: true
      })
    );
  }
  if (options.imageDarkness < 0) options.imageDarkness = 0;
  else if (options.imageDarkness > 100) options.imageDarkness = 100;
  const maxTitleWidth = canvasWidth - 200;
  const maxAuthorWidth = canvasWidth - 200;
  try {
    const canvas = (0, import_canvas9.createCanvas)(canvasWidth, canvasHeight);
    const ctx = canvas.getContext("2d");
    if (options.backgroundImage) {
      try {
        const bgImage = await (0, import_canvas9.loadImage)(options.backgroundImage);
        const imgWidth = bgImage.width;
        const imgHeight = bgImage.height;
        const canvasRatio = canvasWidth / canvasHeight;
        const imgRatio = imgWidth / imgHeight;
        let drawWidth, drawHeight, offsetX, offsetY;
        if (imgRatio > canvasRatio) {
          drawHeight = canvasHeight;
          drawWidth = imgWidth * (canvasHeight / imgHeight);
          offsetX = (canvasWidth - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = imgHeight * (canvasWidth / imgWidth);
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        }
        ctx.beginPath();
        ctx.roundRect(0, 0, canvasWidth, canvasHeight, 50);
        ctx.clip();
        ctx.filter = "blur(10px)";
        ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
        ctx.filter = "none";
        ctx.fillStyle = `rgba(7, 7, 7, ${options.imageDarkness / 100})`;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      } catch (_error) {
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }
    } else {
      ctx.fillStyle = options.backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }
    ctx.drawImage(thumbnail, 50, 50);
    ctx.font = "30px extrabold";
    ctx.fillStyle = options.titleColor;
    let title = options.title;
    let titleWidth = ctx.measureText(title).width;
    while (titleWidth > maxTitleWidth && title.length > 3) {
      title = title.slice(0, -4) + "...";
      titleWidth = ctx.measureText(title).width;
    }
    ctx.fillText(title, 180, 90);
    ctx.font = "20px medium";
    ctx.fillStyle = options.authorColor;
    let author = options.author;
    let authorWidth = ctx.measureText(author).width;
    while (authorWidth > maxAuthorWidth && author.length > 3) {
      author = author.slice(0, -4) + "...";
      authorWidth = ctx.measureText(author).width;
    }
    ctx.fillText(author, 180, 120);
    ctx.fillStyle = options.lyricsColor;
    ctx.font = "18px lyrics";
    const lyricsLines = options.lyrics.split("\n");
    const maxLyricsWidth = canvasWidth - 100;
    const lineHeight = 30;
    const startY = 200;
    const maxLines = Math.floor((canvasHeight - startY - 50) / lineHeight);
    let currentY = startY;
    let lineCount = 0;
    for (let i = 0; i < lyricsLines.length && lineCount < maxLines; i++) {
      let line = lyricsLines[i].trim();
      if (line === "") {
        currentY += lineHeight;
        lineCount++;
        continue;
      }
      let words = line.split(" ");
      let currentLine = "";
      for (let word of words) {
        let testLine = currentLine + (currentLine ? " " : "") + word;
        let testWidth = ctx.measureText(testLine).width;
        if (testWidth > maxLyricsWidth && currentLine) {
          ctx.fillText(currentLine, 50, currentY);
          currentY += lineHeight;
          lineCount++;
          currentLine = word;
          if (lineCount >= maxLines) break;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine && lineCount < maxLines) {
        ctx.fillText(currentLine, 50, currentY);
        currentY += lineHeight;
        lineCount++;
      }
      if (lineCount >= maxLines) break;
    }
    return canvas.toBuffer("image/png");
  } catch (error) {
    throw new Error(error.message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddedToQueue,
  Classic,
  ClassicPro,
  Dynamic,
  Lyrics,
  Mini,
  QueueList,
  Upcoming
});
