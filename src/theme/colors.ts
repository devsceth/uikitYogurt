import { Colors } from "./types";

export const baseColors = {
  failure: "#ED7F10",
  primary: "#33bbe5",
  primaryBright: "#33bbe5",
  primaryDark: "#33bbe5",
  secondary: "#33bbe5",
  success: "#32D9C8",
  successalt: "#e2f4ff",
  warning: "#33bbe5",
  soon: "#33bbe5",
};

export const brandColors = {
  binance: "#33bbe5",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#33bbe5",
  textDisabled: "#BDC2C4",
  textSubtle: "#33bbe5",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#33bbe5",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#011A27",
  inputSecondary: "#66578D",
  primaryDark: "#33bbe5",
  tertiary: "#353547",
  text: "#e2effc",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a4654 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};
