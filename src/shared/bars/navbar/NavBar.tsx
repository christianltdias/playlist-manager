import "./NavBar.scoped.scss";

interface INavButton {
  element: React.ReactNode;
  key: string;
  isDisabled?: boolean;
}

interface INavBarProps {
  navButtons: INavButton[];
  direction?: "row" | "col";
}

const NavBar: React.FC<INavBarProps> = ({ navButtons, direction = "row" }) => {
  return (
    <nav className={`nav-bar dir-${direction}`}>
      {navButtons.map((button) => button.element)}
    </nav>
  );
};

export default NavBar;
