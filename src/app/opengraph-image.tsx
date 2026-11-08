import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ankit Kumar Sahu — Mission Control Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#040711',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern border */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '1px solid rgba(0, 240, 255, 0.25)',
            borderRadius: '24px',
            pointerEvents: 'none',
          }}
        />

        {/* Header Telemetry */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#00F0FF',
              }}
            />
            <span
              style={{
                color: '#00F0FF',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              MISSION CONTROL // SECTOR 01
            </span>
          </div>

          <span
            style={{
              color: '#8493A8',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            NIST UNIVERSITY • B-TECH CSE [DATA SCIENCE]
          </span>
        </div>

        {/* Central Identity Callout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1
            style={{
              color: '#F8FAFC',
              fontSize: '64px',
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Ankit Kumar <span style={{ color: '#00F0FF' }}>Sahu</span>
          </h1>

          <p
            style={{
              color: '#CBD5E1',
              fontSize: '26px',
              margin: 0,
              fontWeight: 400,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Data Science & Applied Machine Learning • Predictive Healthcare AI • CanSat Aerospace Telemetry
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#8493A8', fontSize: '13px', textTransform: 'uppercase' }}>
                ACADEMIC STANDING
              </span>
              <span style={{ color: '#00F0FF', fontSize: '28px', fontWeight: 700 }}>
                8.75 / 10 CGPA
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#8493A8', fontSize: '13px', textTransform: 'uppercase' }}>
                RECOGNITION
              </span>
              <span style={{ color: '#F59E0B', fontSize: '28px', fontWeight: 700 }}>
                Google Prompt Wars Finalist
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#8493A8', fontSize: '13px', textTransform: 'uppercase' }}>
                EXPERIENCE
              </span>
              <span style={{ color: '#F8FAFC', fontSize: '28px', fontWeight: 700 }}>
                Unified Mentor & India Space Lab
              </span>
            </div>
          </div>

          <span style={{ color: '#00F0FF', fontSize: '16px', fontWeight: 600 }}>
            ankitsahu.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
