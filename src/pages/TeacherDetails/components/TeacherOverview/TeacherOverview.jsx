import './TeacherOverview.css';

export default function TeacherOverview({ socialsLinks = [], expertise, profileImage = "/images/users/default.jpg", username, comments = [], courses = [] }) {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // width: 100%;


    // caption
    // display: flex;
    // flex-direction: column;
    // width: 100%;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    return (
        <div className="image-cover ed_detail_head invers" style={{ background: "#f4f5f7" }}>
            <div className="container">
                {/* <div className="row align-items-center">
                    <div className="col-12"> */}
                <div className="viewer_detail_wraps d-flex flex-column flex-md-row justify-content-center">
                    <div className="viewer_detail_thumb mb-3 mb-md-0">
                        <img src={profileImage} className="img-fluid" />
                    </div>
                    <div className="caption text-center text-md-start d-flex flex-column align-items-center align-items-md-normal justify-content-center w-100">
                        <div className="viewer_header">
                            <h4>{username}</h4>
                            <span className="viewer_location">{expertise}</span>
                            <ul className="mt-2">
                                <li> تعداد دوره : <strong>{courses.length}</strong></li>
                                <li> تعداد کامنت : <strong>{comments.length}</strong></li>
                            </ul>
                        </div>
                        <div className="viewer_header">
                            <ul className="badge_info">
                                {socialsLinks.map(link => (
                                    <a href={link.link} key={link.id}>
                                        <li className={link.class}>
                                            <i className={link.icon} />
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     </div >
        // </div >
    );
}
