import Image from "next/image";
import { AnchorHTMLAttributes, MouseEventHandler, RefAttributes } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface CardProps {
    title: string;
    title2: string;
    imgSrc: string;
    cardAlt: string;
    live: RefAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>["href"];
    code: RefAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>["href"];
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}