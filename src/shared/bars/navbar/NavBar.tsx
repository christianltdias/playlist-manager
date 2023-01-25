import "./NavBar.scoped.scss";

interface INavButton {
  element: React.ReactNode;
  key: string;
  isDisabled?: boolean;
}

interface INavBarProps {
  navButtons: INavButton[];
  direction?: "row" | "col";
  className?: string,
}

const NavBar: React.FC<INavBarProps> = ({ navButtons, direction = "row", className }) => {
  return (
    <nav className={`nav-bar dir-${direction} ${className}`}>
      {navButtons.map((button) => button.element)}
    </nav>
  );
};

export default NavBar;
