import Logo from "./logo";

const style1 = {
  display: "flex",
  height: 55,
  width: 845,
  top: 0,
  left: 0,
//   backgroundColor: "green",
};

const style2 = {
  height: 15,
  width: 220,
  top: 20,
  left: 265,
};

const textStyle = {
    // margin: '1rem',
    padding: '2rem'
}

const LogoConTextos = (props: any) => {
  const { text1, text2, text3, text4 } = props;
  return (
    <div style={style1}>
      <Logo></Logo>
      <div style={style2}>
        <b style={textStyle}>{text1}</b>
        <b style={textStyle}>{text2}</b>
        <b style={textStyle}>{text3}</b>
        <b style={textStyle}>{text4}</b>
      </div>
    </div>
  );
};
export default LogoConTextos;
