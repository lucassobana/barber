import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "outline";
    href?: string;
};

export default function Button({
    children,
    variant = "primary",
    href,
}: ButtonProps) {
    const base =
        "px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300";

    const styles = {
        primary:
            "bg-primary text-white hover:bg-primaryHover",
        outline:
            "border border-primary text-primary hover:bg-primary hover:text-white",
    };

    if (href) {
        return (
            <a href={href} className={clsx(base, styles[variant])}>
                {children}
            </a>
        );
    }

    return (
        <button className={clsx(base, styles[variant])}>
            {children}
        </button>
    );
}