import { Poppins } from "next/font/google";
import localfont from "next/font/local";

export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const satoshi = localfont({
    src: [
        {
            path: "../../public/fonts/satoshi/Satoshi-Regular.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/satoshi/Satoshi-Light.woff",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/satoshi/Satoshi-Bold.woff",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-satoshi",
    display: "swap",
});

export const integralCF = localfont({
    src: [
        {
            path: "../../public/fonts/integral-cf/Fontspring-DEMO-integralcf-bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-integral-cf",
    display: "swap",
});
