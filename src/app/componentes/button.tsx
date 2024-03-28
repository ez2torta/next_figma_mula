const ButtonStyle = {
  height: 39,
  width: "10rem",
  backgroundColor: "#490FED",
  padding: "0.5rem",
};

const ButtonText = {
  fill: "white",
  color: "white",
  //   padding: '1rem'
};

const Button = (props: any) => {
  const { text } = props;
  return (
    <div style={ButtonStyle}>
      <span style={ButtonText}>{text}</span>
    </div>
  );
};

export default Button;
