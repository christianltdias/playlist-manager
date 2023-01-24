import "./Text.scoped.scss";

export type ITextType = 'title' | 'subtitle' | 'heading' | 'subheading' | 'caption';
export type ITextColor = 'primary' | 'secondary' | 'error' | 'white';

interface ITextProps {
  type?: ITextType,
  textStyle?: 'italic',
  size?: 'small' | 'medium' | 'large',
  align?: 'left' | 'center' | 'right',
  transform?: 'upper' | 'lower' | 'capitalize',  
  color?: ITextColor,
  className?: string,
  children?: React.ReactNode, 
}

const Text: React.FC<ITextProps> = (
  {
    children,
    type,
    textStyle,
    size = 'medium',
    align,
    transform,
    color,
    className,
  }
) => {

  const getClasses = () => {
    const classes: any[] = ['text', type, textStyle, className, align, transform, size, color];
    return classes.filter(item => item).join(" ");
  }

  return (
    <span 
      className={`${getClasses()}`}
    >
      {children}
    </span>
  )
}

export default Text;