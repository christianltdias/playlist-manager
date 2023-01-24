import NavBar from "../../shared/bars/navbar/NavBar";
import Button from "../../shared/buttons/Button";
import Dropdown, { IDropdownItem } from "../../shared/dropdown/Dropdown";
import Icon from "../../shared/icon/Icon";
import FlexRow from "../../shared/layout/flex/flex-row/FlexRow";
import Text from "../../shared/texts/text/Text";
import "./Header.scoped.scss";

const Header: React.FC = () => {
  const dropdownItems: IDropdownItem[] = [
    {
      text: "teste",
      onClick: () => console.log("test1")
    },
    {
      text: "teste2",
      onClick: () => console.log("test2")
    },
    {
      text: "teste3",
      onClick: () => console.log("test3")
    },
  ];

  const navButtons = [
    {
      key: 'Test 1',
      element: <Button buttonType={"nav"} key={"test1"}>Primary</Button>
    },
    {
      key: 'Long Test',
      element: <Button buttonType={"nav"} key={"test2"}>Secondary</Button>
    },
    {
      key: 'Jujuba',
      element: <Button buttonType={"nav"} key={"test3"}>Tertiary</Button>
    },
    {
      key: 'Jujuba',
      element: <Button buttonType={"nav"} key={"test4"}>Red</Button>
    },
    {
      key: 'Jujuba',
      element: <Button buttonType={"nav"} key={"test5"}>Link</Button>
    },
    {
      key: 'Jujuba',
      element: <Button buttonType={"nav"} key={"test6"}>Nav</Button>
    },
    {
      key: 'Drop',
      element: <Dropdown key={"drop"} type="nav" items={dropdownItems}>Options</Dropdown>
    }
  ]

  return (
    <FlexRow 
      className="main-header"
      justify="space-between"
      wrap="nowrap"
      align="center"
    >
      <Text
        color="white"
        type="title"
        textStyle="italic"
      >
        Playlist Manager
      </Text>
      <NavBar navButtons={navButtons} />
      <Icon
        color="white">
        <span className="material-symbols-rounded">
          login
        </span>
      </Icon>
      
    </FlexRow>
  )
}

export default Header;

