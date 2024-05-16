import './CommentBox.css';

export default function CommentBox({ canReply = true, message, date, user: { username } = {} }) {
    return (
        <div className="reviews-comments-item">
            <div className="review-comments-avatar">
                <img src="/images/users/default.jpg" className="img-fluid" alt="" />
            </div>
            <div className="reviews-comments-item-text">
                <h4>
                    <a href="#">{username}</a>
                    <span className="reviews-comments-item-date">
                        <i className="fa fa-calendar theme-cl" />
                        {date}
                    </span>
                </h4>
                <div className="clearfix" />
                <p>{message}</p>
                {canReply ? (
                    <div className="pull-left reviews-reaction">
                        <a href="#" className='comment-like'>
                            <i className='fa fa-reply mx-2' />
                            پاسخ دادن
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
