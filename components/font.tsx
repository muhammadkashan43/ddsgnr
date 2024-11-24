// In your component or _app.js
import { Roboto } from "next/font/google";

export const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Example of multiple weights
});
