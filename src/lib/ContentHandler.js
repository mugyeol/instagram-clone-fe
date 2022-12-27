
import StLink from "../components/elem/Link";

export const modify = (text) => {
  return text.split(" ").map((string) => {
    if (string.includes("#") || string.includes("@")) {
      return (
        <>
          <StLink to={`/${string}`}>{string+`\n`}</StLink>
          <span> </span>
        </>
      );
    } else {
      return string + " ";
    }
  });
};
