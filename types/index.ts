import Image from "next/image";
import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface CardProps {
    title: string;
    image: typeof Image;
    href: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}