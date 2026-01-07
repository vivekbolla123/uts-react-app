import { useState } from 'react'
import { Link } from 'react-router-dom'

const STATIONS = [
    { name: 'LOWER PAREL', hindi: 'लोअर परेल', marathi: 'लोअर परळ', code: 'PL' },
    { name: 'DOMBIVLI', hindi: 'डोंबीवली', marathi: 'डोम्बिवली', code: 'DI' },
    { name: 'DADAR', hindi: 'दादर', marathi: 'दादर', code: 'DR' },
    { name: 'CHURCHGATE', hindi: 'चर्चगेट', marathi: 'चर्चगेट', code: 'CCG' },
    { name: 'VIRAR', hindi: 'विरार', marathi: 'विरार', code: 'VR' },
    { name: 'ANDHERI', hindi: 'अंधेरी', marathi: 'अंधेरी', code: 'ADH' },
    { name: 'BORIVALI', hindi: 'बोरिवली', marathi: 'बोरिवली', code: 'BVI' }
];

function HomePage() {
    const [sourceName, setSourceName] = useState('LOWER PAREL');
    const [destName, setDestName] = useState('DOMBIVLI');
    // Default to future date matching screenshot or current date
    const [journeyDate, setJourneyDate] = useState('2026-01-07');

    const sourceStation = STATIONS.find(s => s.name === sourceName) || STATIONS[0];
    const destStation = STATIONS.find(s => s.name === destName) || STATIONS[1];

    const formatDateForDisplay = (dateStr) => {
        // Input is YYYY-MM-DD
        const [y, m, d] = dateStr.split('-');
        return `${d}/${m}/${y}`;
    }

    const getBookingTime = () => {
        // Return a mock time or current time
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        // If the selected date is today, use current time, otherwise use 10:00 default? 
        // Let's just use the selected date + current time for realism
        const [y, m, d] = journeyDate.split('-');
        return `${d}/${m}/${y} ${hours}:${minutes}`;
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <button className="back-btn">&lt;</button>
                    <img src="/assets/indian-railways-logo.png" alt="Indian Railways" className="railway-logo" />
                    <div className="header-title">
                        <h1>UTS</h1>
                        <div className="marquee-container">
                            <div className="marquee-text">IR UNRESERVED TICKETING</div>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <span className="home-badge">HOME</span>
                    <button className="menu-btn">⋮</button>
                </div>
            </header>

            {/* Show Ticket Bar */}
            <div className="show-ticket-bar">
                <span className="ticket-icon">🎫</span>
                <span>SHOW TICKET</span>
            </div>

            {/* Main Content */}
            <main className="main-content">
                {/* Ticket Card */}
                <div className="ticket-card">
                    {/* Ticket Header */}
                    <div className="ticket-header">
                        <div className="journey-type">JOURNEY(M-TICKET)</div>
                        <div className="fare">FARE: ₹ 100.00</div>
                    </div>

                    {/* Source and Destination Inputs */}
                    <div className="route-section">
                        <div className="station source">
                            <span className="station-badge source-badge">S</span>
                            <div className="select-wrapper">
                                <select
                                    className="station-select"
                                    value={sourceName}
                                    onChange={(e) => setSourceName(e.target.value)}
                                >
                                    {STATIONS.map(s => (
                                        <option key={s.name} value={s.name}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="station destination">
                            <span className="station-badge dest-badge">D</span>
                            <div className="select-wrapper">
                                <select
                                    className="station-select"
                                    value={destName}
                                    onChange={(e) => setDestName(e.target.value)}
                                >
                                    {STATIONS.map(s => (
                                        <option key={s.name} value={s.name}>{s.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Via */}
                    <div className="via-section">
                        <span className="via-label">Via:</span>
                        <span className="via-value">DDR</span>
                    </div>

                    {/* Passenger Details */}
                    <div className="passenger-details">
                        <div className="detail-row">
                            <div className="detail-item">
                                <span className="detail-label">ADULT</span>
                                <span className="detail-separator">:</span>
                                <span className="detail-value">1</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">CHILD</span>
                                <span className="detail-separator">:</span>
                                <span className="detail-value">0</span>
                            </div>
                            <div className="detail-item">
                                <span className="class-value">FIRST</span>
                            </div>
                            <div className="detail-item">
                                <span className="train-type">AC EMU TRAIN</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Info with Date Picker */}
                    <div className="booking-info">
                        <div className="info-row">
                            <div className="info-item">
                                <span className="info-label">JOURNEY DATE</span>
                                <span className="info-separator">:</span>
                                <input
                                    type="date"
                                    className="date-input"
                                    value={journeyDate}
                                    onChange={(e) => setJourneyDate(e.target.value)}
                                />
                            </div>
                            <div className="info-item">
                                <span className="info-label">UTS NO.</span>
                                <span className="info-separator">:</span>
                                <span className="info-value orange">X08SE9E06F</span>
                            </div>
                        </div>
                    </div>

                    {/* Watermark */}
                    <div className="watermark">
                        <img src="/assets/indian-railways-logo.png" alt="" className="watermark-logo" />
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <Link
                            to="/ticket"
                            state={{
                                source: sourceStation,
                                destination: destStation,
                                journeyDate: formatDateForDisplay(journeyDate),
                                bookingTime: getBookingTime()
                            }}
                            className="action-btn view-ticket"
                        >
                            <span className="arrow">→</span>
                            VIEW TICKET
                        </Link>
                        <button className="action-btn next-trains">
                            <span className="search-icon">🔍</span>
                            NEXT TRAINS
                        </button>
                    </div>
                </div>
            </main>

            {/* Bottom Icon */}
            <div className="bottom-icon">
                <div className="circle-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28">
                        <circle cx="12" cy="12" r="9" stroke="#E57C3A" strokeWidth="2" fill="none" />
                        <circle cx="12" cy="12" r="4" stroke="#E57C3A" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default HomePage
