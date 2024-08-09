import { useEffect, useState } from 'react';
import { Container, Photos, ReportInfoWrapper } from '@/components';
import { ReportHeader } from '@/styles/prinReport.styled';
import { SiGooglegemini } from 'react-icons/si';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PrintReport = () => {
  const router = useRouter();
  const [reportData, setReportData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedReportData = localStorage.getItem('reportData');

    if (!storedUserData || !storedReportData) {
      router.push('/'); // Redirect to home page if no report data
    } else {
      const userData = JSON.parse(storedUserData);
      const reportData = JSON.parse(storedReportData);
      setUserData(userData);
      setReportData(reportData);
    }
  }, []);

  return (
    <Container>
      <ReportHeader>
        <div>
          <p>Patient</p>
          <p>{userData?.name || 'N/A'}</p>
        </div>
        <div>
          <p>Date</p>
          <p>{userData?.date || 'N/A'}</p>
        </div>

        <div>
          <p>Generated & Compiled With</p>
          <p className='gemini'>
            <SiGooglegemini />
            <Link
              href='https://gemini.google.com/'
              target='_blank'
              className='link'
            >
              Gemini
            </Link>
          </p>
        </div>
      </ReportHeader>

      {/* Photos */}
      {userData?.imagePreview && (
        <ReportInfoWrapper title='Photo'>
          <img src={userData?.imagePreview} alt='skin_photo' />
        </ReportInfoWrapper>
      )}

      {/* Symptoms */}
      <ReportInfoWrapper title='Symptoms'>
        <div className='paragraph-box'>
          <h6>Nature of Symptoms</h6>
          <p>{userData?.nature || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Appearance</h6>
          <p>{userData?.appearance || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Duration</h6>
          <p>{userData?.duraion || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Changes Over Time</h6>
          <p>{userData?.changes || 'N/A'}</p>
        </div>
      </ReportInfoWrapper>

      {/* Personal Information */}
      <ReportInfoWrapper title='Personal Information'>
        <div className='info-grid'>
          <div className='paragraph-box'>
            <h6>Age</h6>
            <p>{userData?.age || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Gender</h6>
            <p>{userData?.gender || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Allergies</h6>
            <p>{userData?.allergies || 'N/A'}</p>
          </div>
          <div className='paragraph-box'>
            <h6>Medications</h6>
            <p>{userData?.medications || 'N/A'}</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Lifestyle */}
      <ReportInfoWrapper title='Lifestyle'>
        <div className='info-grid'>
          <div className='paragraph-box'>
            <h6>Sun Exposure</h6>
            <p>{userData?.sun_exposure || 'N/A'}</p>
          </div>
          <div className='paragraph-box'>
            <h6>Dietary Habits</h6>
            <p>{userData?.dietary_habit || 'N/A'}</p>
          </div>
          <div className='paragraph-box'>
            <h6>Location</h6>
            <p>{userData?.location || 'N/A'}</p>
          </div>
          <div className='paragraph-box'>
            <h6>Trigger</h6>
            <p>{userData?.trigger || 'N/A'}</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Additional Notes */}
      <ReportInfoWrapper title='Additional Notes'>
        <p>{reportData?.note || 'N/A'}</p>
      </ReportInfoWrapper>

      {/* AI Generated Notes */}
      <ReportInfoWrapper title='AI Generated Notes'>
        <div className='paragraph-box'>
          <h6>Possible Causes</h6>
          <p>
            {reportData?.possible_causes.length &&
              reportData?.possible_causes.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                  {item.likeliness && (
                    <span className='text-[14px] ml-2 text-gray-500'>
                      {item.likeliness}%
                    </span>
                  )}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Skin Care Routine</h6>
          <p>
            {reportData?.skin_care_routines.length &&
              reportData?.skin_care_routines.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Possible Conditions</h6>
          <p>
            {reportData?.possible_conditions.length &&
              reportData?.possible_conditions.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                  {item.likeliness && (
                    <span className='text-[14px] ml-2 text-gray-500'>
                      {item.likeliness}%
                    </span>
                  )}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Product Suggestions</h6>
          <p>
            {reportData?.product_suggestions.length &&
              reportData?.product_suggestions.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                </li>
              ))}
          </p>
        </div>
      </ReportInfoWrapper>
    </Container>
  );
};

export default PrintReport;
