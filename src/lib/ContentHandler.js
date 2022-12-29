import StLink from "../components/elem/Link";
import { PATH } from "../Router";

export const handleContent = (text,nickname) => {
  return text.split(" ").map((string) => {
    if (string.includes("#") || string.includes("@")) {
      return (
        <>
          <StLink to={`${PATH.hashtag}/${string}`}>{string}</StLink>
          <span> </span>
        </>
      );
    } else {
      return string + " ";
    }
  });
};
