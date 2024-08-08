import { Container, Photos, ReportInfoWrapper } from "@/components";
import { ReportHeader } from "@/styles/prinReport.styled";
import { SiGooglegemini } from "react-icons/si";

const PrintReport = () => {
  return (
    <Container>
      <ReportHeader>
        <div>
          <p>Patient</p>
          <p>Dele Obi</p>
        </div>
        <div>
          <p>Date</p>
          <p>25-05-2024</p>
        </div>
        <div>
          <p>Generated & Compiled With</p>
          <p className="gemini">
            <SiGooglegemini />
            <a href="https://gemini.google.com/">Gemini</a>
          </p>
        </div>
      </ReportHeader>

      {/* Photos */}
      <ReportInfoWrapper title="Photo">
        <img src="/images/rash_1.jpg" alt="skin_photo" />
      </ReportInfoWrapper>

      {/* Symptoms */}
      <ReportInfoWrapper title="Symptoms">
        <div className="paragraph-box">
          <h6>Nature of Symptoms</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo. Eu quis
            vulputate pellentesque ultrices molestie at fringilla. Odio nulla
            donec duis dui enim interdum sit sit erat.
          </p>
        </div>
        <div className="paragraph-box">
          <h6>Appearance</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo.illa. Odio
            nulla donec duis dui enim interdum sit sit erat.
          </p>
        </div>
        <div className="paragraph-box">
          <h6>Duration</h6>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="paragraph-box">
          <h6>Changes Over Time</h6>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </ReportInfoWrapper>

      {/* Personal Information */}
      <ReportInfoWrapper title="Personal Information">
        <div className="info-grid">
          <div className="paragraph-box">
            <h6>Age</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Gender</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Allergies</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Medications</h6>
            <p>Lorem</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Lifestyle */}
      <ReportInfoWrapper title="Lifestyle">
        <div className="info-grid">
          <div className="paragraph-box">
            <h6>Sun Exposure</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Dietary Habits</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Occupational Hazards</h6>
            <p>Lorem</p>
          </div>
          <div className="paragraph-box">
            <h6>Recent Travels</h6>
            <p>Lorem</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Additional Notes */}
      <ReportInfoWrapper title="Additional Notes">
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
          morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin non
          tempor nisl cursus bibendum vitae quis amet justo.Lorem ipsum dolor
          sit amet consectetur. Ac sodales est at et eget morbi dui aliquet.
          Lacus gravida neque quam viverra. Sollicitudin non tempor nisl cursus
          bibendum vitae quis amet justo.Lorem ipsum dolor sit amet consectetur.
          Ac sodales est at et eget morbi dui aliquet. Lacus gravida neque quam
          viverra. Sollicitudin non tempor nisl cursus bibendum vitae quis amet
          justo.
        </p>
      </ReportInfoWrapper>

      {/* AI Generated Notes */}
      <ReportInfoWrapper title="AI Generated Notes">
        <div className="paragraph-box">
          <h6>Possible Causes</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo.Lorem ipsum
            dolor sit amet consectetur. Ac sodales est at et eget morbi dui
            aliquet. Lacus gravida neque quam viverra. Sollicitudin non tempor
            nisl cursus bibendum vitae quis amet justo.Lorem ipsum dolor sit
            amet consectetur. Ac sodales est at et eget morbi dui aliquet. Lacus
            gravida neque quam viverra. Sollicitudin non tempor nisl cursus
            bibendum vitae quis amet justo.
          </p>
        </div>
        <div className="paragraph-box">
          <h6>Skin Care Routine</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo.Lorem ipsum
            dolor sit amet consectetur. Ac sodales est at et eget morbi dui
            aliquet. Lacus gravida neque quam viverra. Sollicitudin non tempor
            nisl cursus bibendum vitae quis amet justo.Lorem ipsum dolor sit
            amet consectetur. Ac sodales est at et eget morbi dui aliquet. Lacus
            gravida neque quam viverra. Sollicitudin non tempor nisl cursus
            bibendum vitae quis amet justo.
          </p>
        </div>
        <div className="paragraph-box">
          <h6>Possible Conditions</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo.Lorem ipsum
            dolor sit amet consectetur. Ac sodales est at et eget morbi dui
            aliquet. Lacus gravida neque quam viverra. Sollicitudin non tempor
            nisl cursus bibendum vitae quis amet justo.Lorem ipsum dolor sit
            amet consectetur. Ac sodales est at et eget morbi dui aliquet. Lacus
            gravida neque quam viverra. Sollicitudin non tempor nisl cursus
            bibendum vitae quis amet justo.
          </p>
        </div>
        <div className="paragraph-box">
          <h6>Product Suggestions</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac sodales est at et eget
            morbi dui aliquet. Lacus gravida neque quam viverra. Sollicitudin
            non tempor nisl cursus bibendum vitae quis amet justo.Lorem ipsum
            dolor sit amet consectetur. Ac sodales est at et eget morbi dui
            aliquet. Lacus gravida neque quam viverra. Sollicitudin non tempor
            nisl cursus bibendum vitae quis amet justo.Lorem ipsum dolor sit
            amet consectetur. Ac sodales est at et eget morbi dui aliquet. Lacus
            gravida neque quam viverra. Sollicitudin non tempor nisl cursus
            bibendum vitae quis amet justo.
          </p>
        </div>
      </ReportInfoWrapper>
    </Container>
  );
};

export default PrintReport;
