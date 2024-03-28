import Logo from "./logo";
import LogoConTextos from "./logoConTextos";
import Button from "./button";

const style1 = {
  display: "flex",
  height: 103,
  width: '100%',
  top: 0,
  left: 0,
  padding: 83,
//   backgroundColor: "white",
};

const style2 = {
    display: "flex",
    height: 39,
    width: 88,
    top: 32,
    left: 1152,
    // backgroundColor: "white",
  };

const NavBar = (props: any) => {
  const { text1, text2, text3, text4 } = props;
  return (
    <div style={style1}>
      <LogoConTextos
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
      ></LogoConTextos>
      {/* <Logo></Logo> */}
      <div style={style2}>
        <Button text="qwerty"></Button>
      </div>
      
    </div>
  );
};
export default NavBar;
