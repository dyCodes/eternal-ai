import { Container, ResultCard, ChatBox } from "@/components";
import { MdOutlineFileDownload } from "react-icons/md";
import { Box, StyledButton } from "./styles";

const Report = () => {
  return (
    <Container>
      <Box>
        <ResultCard title="Possible Conditions" output="Generating..." />
        <ResultCard title="Possible Causes" output="Generating..." />
        <ResultCard title="Skin Care Routines" output="Generating..." />
        <ResultCard title="Product Suggestion" output="Generating..." />
      </Box>

      <StyledButton className="fx-center">
        <span>Download Report</span>
        <MdOutlineFileDownload />
      </StyledButton>

      <ChatBox />
    </Container>
  );
};

export default Report;
