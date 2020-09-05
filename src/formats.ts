import { format } from "./format";

const backgroundColor = format(49);
const textColor = format(39);

// Background colors
export const blackBackground = backgroundColor(40);
export const redBackground = backgroundColor(41);
export const greenBackground = backgroundColor(42);
export const yellowBackground = backgroundColor(43);
export const blueBackground = backgroundColor(44);
export const magentaBackground = backgroundColor(45);
export const cyanBackground = backgroundColor(46);
export const whiteBackground = backgroundColor(47);

// Text colors
export const blackText = textColor(30);
export const redText = textColor(31);
export const greenText = textColor(32);
export const yellowText = textColor(33);
export const blueText = textColor(34);
export const magentaText = textColor(35);
export const cyanText = textColor(36);
export const whiteText = textColor(37);
export const grayText = textColor(90);
export const greyText = grayText;

// Text modifiers
export const bold = format(22)(1);
export const dimmed = format(22)(2);
export const hidden = format(28)(8);
export const inverse = format(27)(7);
export const italic = format(23)(3);
export const strikethrough = format(29)(9);
export const underlined = format(24)(4);
