import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `open` ANSI code and a `source` string and adds the open and close
 * ANSI codes to that string (for background color).
 *
 * @returns Curried function with `close` ANSI code for background in context.
 */
const backgroundColor = optionalFormat(49);

/**
 * Takes an `open` ANSI code and a `source` string and adds the open and close
 * ANSI codes to that string (for text color).
 *
 * @returns Curried function with `close` ANSI code for text color in context.
 */
const textColor = optionalFormat(39);

/**
 * Takes a `source` string and adds the ANSI codes for **black** background.
 *
 * @returns `source` string with **black** background.
 */
export const blackBackground = backgroundColor(40);

/**
 * Takes a `source` string and adds the ANSI codes for **red** background.
 *
 * @returns `source` string with **red** background.
 */
export const redBackground = backgroundColor(41);

/**
 * Takes a `source` string and adds the ANSI codes for **green** background.
 *
 * @returns `source` string with **green** background.
 */
export const greenBackground = backgroundColor(42);

/**
 * Takes a `source` string and adds the ANSI codes for **yellow** background.
 *
 * @returns `source` string with **yellow** background.
 */
export const yellowBackground = backgroundColor(43);

/**
 * Takes a `source` string and adds the ANSI codes for **blue** background.
 *
 * @returns `source` string with **blue** background.
 */
export const blueBackground = backgroundColor(44);

/**
 * Takes a `source` string and adds the ANSI codes for **magenta** background.
 *
 * @returns `source` string with **magenta** background.
 */
export const magentaBackground = backgroundColor(45);

/**
 * Takes a `source` string and adds the ANSI codes for **cyan** background.
 *
 * @returns `source` string with **cyan** background.
 */
export const cyanBackground = backgroundColor(46);

/**
 * Takes a `source` string and adds the ANSI codes for **white** background.
 *
 * @returns `source` string with **white** background.
 */
export const whiteBackground = backgroundColor(47);

/**
 * Takes a `source` string and adds the ANSI codes for **black** color.
 *
 * @returns `source` string with **black** color.
 */
export const blackText = textColor(30);

/**
 * Takes a `source` string and adds the ANSI codes for **red** color.
 *
 * @returns `source` string with **red** color.
 */
export const redText = textColor(31);

/**
 * Takes a `source` string and adds the ANSI codes for **green** color.
 *
 * @returns `source` string with **green** color.
 */
export const greenText = textColor(32);

/**
 * Takes a `source` string and adds the ANSI codes for **yellow** color.
 *
 * @returns `source` string with **yellow** color.
 */
export const yellowText = textColor(33);

/**
 * Takes a `source` string and adds the ANSI codes for **blue** color.
 *
 * @returns `source` string with **blue** color.
 */
export const blueText = textColor(34);

/**
 * Takes a `source` string and adds the ANSI codes for **magenta** color.
 *
 * @returns `source` string with **magenta** color.
 */
export const magentaText = textColor(35);

/**
 * Takes a `source` string and adds the ANSI codes for **cyan** color.
 *
 * @returns `source` string with **cyan** color.
 */
export const cyanText = textColor(36);

/**
 * Takes a `source` string and adds the ANSI codes for **white** color.
 *
 * @returns `source` string with **white** color.
 */
export const whiteText = textColor(37);

/**
 * Takes a `source` string and adds the ANSI codes for **gray** color.
 *
 * @returns `source` string with **gray** color.
 */
export const grayText = textColor(90);

/**
 * Alias for `grayText`.
 */
export const greyText = grayText;

/**
 * Takes a `source` string and adds the ANSI codes for **bold** text.
 *
 * @returns `source` string with **bold** format.
 */
export const bold = optionalFormat(22)(1);

/**
 * Takes a `source` string and adds the ANSI codes for **dimmed** text.
 *
 * @returns `source` string with **dimmed** format.
 */
export const dimmed = optionalFormat(22)(2);

/**
 * Takes a `source` string and adds the ANSI codes for **hidden** text.
 *
 * @returns `source` string with **hidden** format.
 */
export const hidden = optionalFormat(28)(8);

/**
 * Takes a `source` string and adds the ANSI codes for **inverse** text.
 *
 * @returns `source` string with **inverse** format.
 */
export const inverse = optionalFormat(27)(7);

/**
 * Takes a `source` string and adds the ANSI codes for **italic** text.
 *
 * @returns `source` string with **italic** format.
 */
export const italic = optionalFormat(23)(3);

/**
 * Takes a `source` string and adds the ANSI codes for **strikethrough** text.
 *
 * @returns `source` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(29)(9);

/**
 * Takes a `source` string and adds the ANSI codes for **underlined** text.
 *
 * @returns `source` string with **underlined** format.
 */
export const underlined = optionalFormat(24)(4);
