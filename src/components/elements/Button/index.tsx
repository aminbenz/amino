"use client";
import styles from "./button.module.scss";

interface ButtonProps {
  icon?: string;
  bgColor?: string;
  color?: string;
  bgHoverColor?: string;
  isDisable: boolean;
  size?: string;
  children: string;
  borderRadius?: string;
  width?: string | number;
  height?: string | number;
  href?: string;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  children,
  borderRadius,
  width,
  height,
  isDisable,
  href,
  type,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={isLoading || isDisable}
      style={{
        backgroundColor: bgColor,
        width,
        height,
        color: color,
        borderRadius,
        cursor: isLoading && "wait",
      }}
      className={styles.button}
      {...rest}
    >
      {icon} {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
