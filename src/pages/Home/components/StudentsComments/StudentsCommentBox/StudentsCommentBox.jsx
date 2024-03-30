export default function StudentsCommentBox({ comment:commentBody, user: { task='کاربر', username: studentName, profileImage = "/images/users/default.jpg" } = {} }) {
    return (
        <div className="testimonial-detail">
            <div className="client-detail-box">
                <div className="pic">
                    <img src={profileImage} />
                </div>
                <div className="client-detail">
                    <h3 className="testimonial-title">{studentName}</h3>
                    <span className="post">{task}</span>
                </div>
            </div>
            <p className="description">
                {commentBody}
            </p>
        </div>
    )
}
