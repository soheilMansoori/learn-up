import './CommentBox.css';

export default function CommentBox({ canReply = true }) {
    return (
        <div className="reviews-comments-item">
            <div className="review-comments-avatar">
                <img src="/images/users/default.jpg" className="img-fluid" alt="" />
            </div>
            <div className="reviews-comments-item-text">
                <h4>
                    <a href="#">علی محسنی</a>
                    <span className="reviews-comments-item-date">
                        <i className="fa fa-calendar theme-cl" />
                        10 فروردین 1400
                    </span>
                </h4>
                <div className="clearfix" />
                <p>" ما برای امتحان ورودی مدرسه در استانبول ترکیه نیاز ب استادی توانمند داشتیم که به زبان انگلیسی ریاضی را اموزش دهد تا در امتحان قبول شود که استاد مجدی به خوبی از عهده ی این کار برامدند وبسیار دقیق و منظم و مسلط هستند و بسیار خوشحال و راضی ام "</p>
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
