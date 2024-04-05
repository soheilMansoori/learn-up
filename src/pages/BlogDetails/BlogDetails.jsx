import Navbar from "../../components/Navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BackToTop from "../../components/BackToTop/BackToTop";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import SearchBlogs from "./components/SearchBlogs/SearchBlogs";
import SimilarBlogs from "./components/SimilarBlogs/SimilarBlogs";
import BlogTags from "./components/BlogTags/BlogTags";
import BlogsCategories from "./components/BlogsCategories/BlogsCategories";
import SendComment from "../../components/Comments/SendComment/SendComment";
import CommentBox from "../../components/Comments/CommentBox/CommentBox";
import BlogCreator from "./components/BlogCreator/BlogCreator";
import BlogImage from "./components/BlogImage/BlogImage";
import BlogDescription from "./components/BlogDescription/BlogDescription";

export default function BlogDetails() {
    return (
        <>
            <Navbar />
            <Breadcrumb title='لزوم یادگیری زبان در دنیای امروزی!' pageName='لزوم یادگیری زبان در دنیای امروزی!' />
            <section className="gray">
                <div className="container">
                    <div className="row">
                        {/* Blog Detail */}
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="article_detail_wrapss single_article_wrap format-standard">
                                <div className="article_body_wrap">
                                    {/* blog image */}
                                    <BlogImage />
                                    {/* blog info */}
                                    <div className="article_top_info">
                                        <ul className="article_middle_info">
                                            <li><a href="#"><span className="icons"><i className="fa fa-user" /></span>مسعود ناصری</a></li>
                                            <li><a href="#"><span className="icons"><i className="fa fa-comment-alt" /></span>45 دیدگاه</a></li>
                                        </ul>
                                    </div>
                                    {/* blog description */}
                                    <BlogDescription />
                                </div>
                            </div>
                            {/* blog creator  */}
                            <BlogCreator />
                            {/* Blog Comments */}
                            <div className="article_detail_wrapss single_article_wrap format-standard">
                                <div className="comment-area">
                                    {/* send comment */}
                                    <SendComment />
                                    {/* comments */}
                                    <div className="reviews-comments-wrap">
                                        <CommentBox />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* side bar */}
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            {/* Searchbard */}
                            <SearchBlogs />
                            {/* Categories */}
                            <BlogsCategories />
                            {/* Similar Blogs */}
                            <SimilarBlogs />
                            {/* blog tags */}
                            <BlogTags />
                        </div>
                    </div>
                </div>
            </section>
            <BackToTop />
            <NewsLetter />
            <Footer />
        </>
    )
}
