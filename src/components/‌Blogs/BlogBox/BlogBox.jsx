import './BlogBox.css'

export default function BlogBox() {
    return (
        <div className="articles_grid_style" dir='rtl'>
            <div className="articles_grid_thumb">
                <a href="blog-detail.html">
                    <img src="./images/blogs/blog-1.jpg" className="img-fluid" />
                </a>
            </div>

            <div className="articles_grid_caption">
                <h4>چطور زبان انگلیسی را سریع یاد بگیریم؟</h4>
                <div className="articles_grid_author">
                    <div className="articles_grid_author_img">
                        <img src="./images/teachers/teacher-1.jpg" className="img-fluid" />
                    </div>
                    <h4>مسعود صالحی</h4>
                </div>
            </div>
        </div>
    )
}
