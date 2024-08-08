import { Container, ReportCard } from "@/components";
import { ChatBox } from "@/components";
import { MdOutlineFileDownload } from "react-icons/md";
import { Box, StyledButton } from "@/styles/report.styled";

const Report = () => {
  return (
    <Container>
      <Box>
        <ReportCard title="Possible Conditions" output="Generating..." />
        <ReportCard title="Possible Causes" output="Generating..." />
        <ReportCard title="Skin Care Routines" output="Generating..." />
        <ReportCard title="Product Suggestion" output="Generating..." />
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
