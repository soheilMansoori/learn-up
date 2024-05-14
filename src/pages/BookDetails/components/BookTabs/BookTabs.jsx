import { Tabs, Tab } from 'react-bootstrap'
import CommentBox from '../../../../components/Comments/CommentBox/CommentBox';
import SendComment from '../../../../components/Comments/SendComment/SendComment';
import './BookTabs.css';

export default function BookTabs({ description, specifications = [], comments = [] }) {
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
                                        <SendComment />
                                        {comments.length ? (
                                            <div className='reviews-comments-wrap'>
                                                {comments.map(comment => {
                                                    <CommentBox {...comment} key={comment.id} />
                                                })}
                                            </div>

                                        ) : (
                                            <div className="alert alert-success my-5">
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
        </section >
    );
}
