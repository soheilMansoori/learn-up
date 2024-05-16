import { Tabs, Tab } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import CommentBox from '../../../../components/Comments/CommentBox/CommentBox';
import SendComment from '../../../../components/Comments/SendComment/SendComment';
import 'react-toastify/dist/ReactToastify.css';
import './BookTabs.css';

export default function BookTabs({ description, specifications = [], comments = [] }) {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const user = useSelector(store => store.user)
    const reFetchBookComments = () => queryClient.invalidateQueries([`book-comments-${id}`]);
    const sendCommentsSuccessNotify = () => toast.success("کامنت شما با موفقعیت ارسال شد", {
        position: "bottom-right",
        rtl: true,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })

    const sendFormToServer = ({ message }, restInput) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        let today = new Date().toLocaleDateString('fa-IR', options);
        const newCommentsData = {
            message,
            id: crypto.randomUUID(),
            userId: user.userID,
            bookId: id,
            date: today,
        }
        fetch(`${process.env.REACT_APP_BASE_URL}/comments`, {
            method: "POST",
            body: JSON.stringify(newCommentsData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(() => {
                restInput()
                sendCommentsSuccessNotify()
                reFetchBookComments()
            })
            .catch(error => console.log(error.message));
    }

    return (
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                        <div className="property_block_wrap_header">
                            <Tabs defaultActiveKey="descriptions-tab" className="nav nav-tabs customize-tab tabs_creative" id="myTab" role="tablist">
                                <Tab title="توضیحات" eventKey="descriptions-tab" className="nav-item">
                                    {description ? (
                                        <div className='edu_wraper'>{description}</div>
                                    ) : (
                                        <div className='alert alert-success'>توضیحاتی وجود ندارد</div>
                                    )}
                                </Tab>
                                <Tab title="مشخصات" eventKey="specifications-tab" className="nav-item">
                                    {specifications.length ? (
                                        <div className="table-responsive edu_wraper">
                                            <table className="table">
                                                <tbody>
                                                    {specifications.map(item => (
                                                        <tr key={item.id}>
                                                            <th scope="row">{item.th}</th>
                                                            <td>{item.td}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className='alert alert-success'>اطلاعاتی برای نمایش  وجود ندارد</div>
                                    )}
                                </Tab>
                                <Tab title="نظرات" eventKey="comments-tab" className="nav-item">
                                    <div className='edu_wraper'>
                                        <SendComment sendFormToServer={sendFormToServer} />
                                        {comments.length ? (
                                            <div className='reviews-comments-wrap w-100'>
                                                {comments.reverse().map(comment => (
                                                    <CommentBox {...comment} key={comment.id} />
                                                ))}
                                            </div>

                                        ) : (
                                            <div className="alert alert-danger my-5">
                                                هنوز نظری ثبت نشده است.
                                            </div>
                                        )}
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section >
    );
}
