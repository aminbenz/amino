import styles from "./button.module.scss";

/**
 * Button component props
 */
interface ButtonProps {
  /**
   * Icon element or component
   */
  icon?: string;
  /**
   * Background color of the button
   */
  bgColor?: string;
  /**
   * Text color of the button
   */
  color?: string;
  /**
   * Background hover color of the button
   */
  bgHoverColor?: string;
  /**
   * Size of the button
   */
  size?: string;
  /**
   * Text content of the button
   */
  children: any;
  /**
   * Border radius of the button
   */
  borderRadius?: string;
  /**
   * Width of the button
   */
  width?: string | number;
  /**
   * Height of the button
   */
  height?: string | number;
  /**
   * Href value for the button link
   */
  href?: string;
  /**
   * Type of the button
   */
  type?: "submit" | "reset" | "button";
  /**
   * Indicates if the button is in the loading state
   */
  isLoading?: boolean;
  /**
   * Indicates if the button is disabled
   */
  disabled?: boolean;
  /**
   * Click event handler
   */
  onClick?: () => void;
}

/**
 * Button component
 */
const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  children,
  borderRadius,
  disabled,
  width,
  height,
  href,
  type,
  onClick,
  isLoading,
  ...rest
}: ButtonProps) => {
  /**
   * Click event handler
   */
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type || "button"}
      disabled={isLoading || disabled}
      style={{
        backgroundColor: bgColor,
        width,
        height,
        color,
        borderRadius,
        cursor: (isLoading && "wait") || "auto ",
      }}
      className={styles.button}
      onClick={handleClick}
      {...rest}
    >
      {icon} {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
