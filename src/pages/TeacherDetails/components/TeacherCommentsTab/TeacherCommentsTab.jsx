import CommentBox from '../../../../components/Comments/CommentBox/CommentBox'
import './TeacherCommentsTab.css';

export default function TeacherCommentsTab({ comments = [] }) {
    return (
        <>
            {comments.length ? (
                <div className="reviews-comments-wrap">
                    {comments.map(comment => (
                        <CommentBox {...comment} canReply={false} key={comment.id} />
                    ))}
                </div>
            ) : (
                <div className="alert alert-success mt-3">
                    هنوز نظری نداشته است
                </div>
            )}
        </>
    );
}
