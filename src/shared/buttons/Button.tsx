import "./Button.scoped.scss";

export interface IButtonProps {
  /** The unique id of the button. */
  id?: string;
  /** The style of the button. */
  buttonType?: "primary" | "secondary" | "tertiary" | "link" | "red" | "nav";
  /** Optional. The url of the image to display in the button. The image should include only black stroke fills. */
  img?: string;
  /** Optional. The alt text for the button. */
  imgAlt?: string;
  /** Optional. The alignment of the image. Default = right. */
  imgPlacement?: "right" | "left";
  /** The function to call when the user clicks the button. */
  onClick?: () => void;
  /** Optional. The tooltip shown when the cursor hovers it.*/
  tooltip?: string;
  /** Optional. Children to render inside the button. */
  children?: React.ReactNode;
  /** Optional. Determines if the button is disabled. */
  isDisabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  id,
  children,
  buttonType = "primary",
  img,
  imgAlt,
  imgPlacement = "right",
  tooltip,
  isDisabled,
  onClick,
}) => (
  <button
    className={`${buttonType} img-${imgPlacement}`}
    onClick={onClick}
    disabled={isDisabled}
    id={id}
    title={tooltip}
  >
    {children}
    {!!img && (
      <img
        alt={imgAlt}
        src={img}
      />
    )}
  </button>
);

export default Button;
