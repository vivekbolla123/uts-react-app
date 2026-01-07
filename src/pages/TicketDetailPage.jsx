import { Link, useLocation } from 'react-router-dom'

function TicketDetailPage() {
    const location = useLocation();
    const { source, destination, journeyDate, bookingTime } = location.state || {};

    const ticketData = {
        source: source?.name || 'LOWER PAREL',
        sourceHindi: source?.hindi || 'लोअर परेल',
        sourceMarathi: source?.marathi || 'लोअर परळ',
        destination: destination?.name || 'DOMBIVLI',
        destinationHindi: destination?.hindi || 'डोंबीवली',
        destinationMarathi: destination?.marathi || 'डोम्बिवली',
        via: 'DDR',
        adult: 1,
        child: 0,
        classCode: 'FIRST (FC)',
        classHindi: 'प्रथम',
        classMarathiLabel: 'प्र श्री',
        trainType: 'AC EMU TRAIN (U)',
        trainHindi: 'एसी ईएमयू',
        trainMarathi: 'एसी इमु',
        fare: '100.00',
        phoneNo: '9398221291',
        journeyDate: journeyDate || '07/01/2026',
        bookingTime: bookingTime || '07/01/2026 16:46',
        utsNo: 'X08SE9E06F',
        sacCode: '996411',
        irCode: '27AAAGM0289C2ZI',
        gst: 'Rs.4.56',
        trainNo: 'R17027',
        distance: '42km'
    }

    return (
        <div className="ticket-detail-page">
            {/* Simple Header */}
            <header className="header-simple">
                <Link to="/" className="back-btn">&lt;</Link>
                <h1>TICKET</h1>
            </header>

            {/* Scrolling Header with Logos */}
            <div className="ticket-detail-header">
                <img src="/assets/cris-logo.png" alt="CRIS" className="cris-logo" />
                <div className="scrolling-text-container">
                    <span className="scrolling-text">IR UNRESERVED TICKETING</span>
                </div>
                <img src="/assets/indian-railways-logo.png" alt="Indian Railways" className="ir-logo" />
            </div>

            {/* Full Ticket */}
            <div className="full-ticket">
                {/* Happy Journey Header */}
                <div className="happy-journey-header">
                    <span>HAPPY JOURNEY</span>
                </div>

                {/* Journey Info Row */}
                <div className="ticket-info-row">
                    <div className="info-left">
                        <span className="label">JOURNEY (J)</span>
                    </div>
                    <div className="info-right">
                        <span className="value">{ticketData.journeyDate}</span>
                    </div>
                </div>

                <div className="ticket-info-row">
                    <div className="info-left">
                        <span className="fare-text">Rs. {ticketData.fare} /-</span>
                    </div>
                    <div className="info-right">
                        <span className="value">{ticketData.phoneNo}</span>
                    </div>
                </div>

                <div className="ticket-info-row border-bottom">
                    <div className="info-left">
                        <span className="label">UTS NO.: </span>
                        <span className="value-bold">{ticketData.utsNo}</span>
                    </div>
                </div>

                {/* Source Station */}
                <div className="station-row">
                    <div className="station-hindi">{ticketData.sourceHindi}</div>
                    <div className="station-main">
                        <span className="station-badge source-badge">S</span>
                        <span className="station-name">{ticketData.source}</span>
                    </div>
                    <div className="station-marathi">{ticketData.sourceMarathi}</div>
                </div>

                {/* Destination Station */}
                <div className="station-row border-bottom">
                    <div className="station-hindi">{ticketData.destinationHindi}</div>
                    <div className="station-main">
                        <span className="station-badge dest-badge">D</span>
                        <span className="station-name">{ticketData.destination}</span>
                    </div>
                    <div className="station-marathi">{ticketData.destinationMarathi}</div>
                </div>

                {/* Adult Child Row */}
                <div className="adult-child-row border-bottom">
                    <span><strong>ADULT :</strong> {ticketData.adult}</span>
                    <span style={{ marginLeft: '20px' }}><strong>CHILD :</strong> {ticketData.child}</span>
                </div>

                {/* Class and Train Row */}
                <div className="class-train-row border-bottom">
                    <div className="class-col">
                        <div className="hindi-text">{ticketData.classHindi}</div>
                        <div className="main-label">CLASS: <span className="main-value">{ticketData.classCode}</span></div>
                        <div className="hindi-text">{ticketData.classMarathiLabel}</div>
                    </div>
                    <div className="train-col">
                        <div className="hindi-text">{ticketData.trainHindi}</div>
                        <div className="main-label">TRAIN: <span className="main-value">{ticketData.trainType}</span></div>
                        <div className="hindi-text">{ticketData.trainMarathi}</div>
                    </div>
                </div>

                {/* VIA Row */}
                <div className="via-row border-bottom">
                    <span><strong>VIA : </strong>{ticketData.via}</span>
                </div>

                {/* SAC Row */}
                <div className="sac-row border-bottom">
                    <span><strong>SAC:</strong>{ticketData.sacCode}</span>
                    <span style={{ marginLeft: '20px' }}><strong>IR:</strong>{ticketData.irCode}</span>
                </div>

                {/* GST Row */}
                <div className="gst-row border-bottom">
                    <span><strong>Total GST:</strong>{ticketData.gst}</span>
                </div>

                {/* Journey Commence Notice */}
                <div className="commence-row border-bottom">
                    <span>Journey Should Commence within 1 hour</span>
                </div>

                {/* Train Details Row */}
                <div className="train-details-row">
                    <div className="train-no"><strong>{ticketData.trainNo}</strong></div>
                    <div className="distance"><strong>Distance:</strong> {ticketData.distance}</div>
                </div>
                <div className="booking-time-row">
                    <span><strong>Booking Time:</strong> {ticketData.bookingTime}</span>
                </div>

                {/* Watermark */}
                <div className="watermark">
                    <img src="/assets/indian-railways-logo.png" alt="" className="watermark-logo" />
                </div>
            </div>

            {/* Notice Section */}
            <div className="notice-section">
                <p>It is recommended not to perform factory reset or change your handset whenever you are having valid ticket in the mobile.</p>
                <p>Click for <a href="#">Changing Handset with Valid Ticket</a></p>
                <div className="emergency-notice">
                    FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET<br />
                    STAFF | GUARD OR DIAL 139
                </div>
            </div>

            {/* Action Buttons */}
            <div className="detail-action-buttons">
                <button className="detail-btn btn-primary">OPEN QR CODE</button>
                <button className="detail-btn btn-secondary">NEXT TRAINS FROM PL</button>
                <Link to="/" className="detail-btn btn-tertiary">OK</Link>
            </div>
        </div>
    )
}

export default TicketDetailPage
