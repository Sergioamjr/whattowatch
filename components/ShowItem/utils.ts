export const switchStyle = (
  state: string
): { opacity: number; transform: string } => {
  let style = { opacity: 1, transform: "" };
  switch (state) {
    case "entering":
      {
        style = { opacity: 1, transform: "translateY(0px)" };
      }
      break;
    case "entered":
      {
        style = { opacity: 1, transform: "translateY(0px)" };
      }
      break;
    case "exiting":
      {
        style = { opacity: 0, transform: "translateY(-30px)" };
      }
      break;
    case "exited":
      {
        style = { opacity: 0, transform: "translateY(30px)" };
      }
      break;
  }

  return style;
};
