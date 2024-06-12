import React from 'react';

export default function CurlyBrace({ leftUpside, rightUpside, right, straighLine, switchColor, isToggled }) {
    const strokeColor = switchColor ? '#9D71FD' : '#D7CEE6';
    const zIndex = isToggled ? 9999 : 'auto';

    return (
        <>
            {straighLine ? (
                <svg width="154" height="2" className={`-ml-[1px] ${isToggled ? 'relative' : ''}`} viewBox="0 0 154 2" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex }}>
                    <path d="M0.400391 0.720001H153.59" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            ) : leftUpside ? (
                <svg width="154" className={`-mt-[2px] -ml-[1px] ${isToggled ? 'relative' : ''}`} height="101" viewBox="0 0 154 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex }}>
                    <path d="M0.929688 99.82H57.9297C68.5197 99.82 77.0997 93.13 77.0997 84.88V20C77.0997 9.41001 86.0997 0.820007 97.0997 0.820007H153.53" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            ) : right ? (
                <svg width="154" className={`-mb-[2px] -mr-[1px] ${isToggled ? 'relative' : ''}`} height="101" viewBox="0 0 154 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex }}>
                    <path d="M0.929688 99.82H57.9297C68.5197 99.82 77.0997 93.13 77.0997 84.88V20C77.0997 9.41001 86.0997 0.820007 97.0997 0.820007H153.53" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            ) : rightUpside ? (
                <svg width="154" className={`-mt-[2px] -mr-[1px] ${isToggled ? 'relative' : ''}`} height="101" viewBox="0 0 154 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex }}>
                    <path d="M153.33 99.67H96.3305C85.7505 99.67 77.1705 92.98 77.1705 84.73V19.85C77.1705 9.25998 68.1705 0.669983 57.1105 0.669983H0.730469" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            ) : (
                <svg width="154" className={`-mb-[2px] -ml-[1px] ${isToggled ? 'relative' : ''}`} height="101" viewBox="0 0 154 101" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex }}>
                    <path d="M153.33 99.67H96.3305C85.7505 99.67 77.1705 92.98 77.1705 84.73V19.85C77.1705 9.25998 68.1705 0.669983 57.1105 0.669983H0.730469" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
                </svg>
            )}
        </>
    );
}
