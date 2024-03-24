import './SimilarBlogs.css'

export default function SimilarBlogs() {
  return (
    <div className="single_widgets widget_thumb_post">
      <h4 className="title">پرمخاطب</h4>
      <ul>
        <li>
          <span className="left">
            <img src="/images/blogs/blog-1.jpg" />
          </span>
          <span className="right">
            <a className="feed-title" href="#">در الکامپ امسال چه خبر است؟</a>
            <span className="post-date"><i className="fa fa-calendar"></i>10دقیقه پیش</span>
          </span>
        </li>
        <li>
          <span className="left">
            <img src="/images/blogs/blog-1.jpg" />
          </span>
          <span className="right">
            <a className="feed-title" href="#">چگونه بهانه آوردن را متوقف کنید؟</a>
            <span className="post-date"><i className="fa fa-calendar"></i>2ساعت پیش</span>
          </span>
        </li>
        <li>
          <span className="left">
            <img src="/images/blogs/blog-1.jpg" />
          </span>
          <span className="right">
            <a className="feed-title" href="#">مشخصات اولین تبلت فراسو</a>
            <span className="post-date"><i className="fa fa-calendar"></i>4ساعت پیش</span>
          </span>
        </li>
        <li>
          <span className="left">
            <img src="/images/blogs/blog-1.jpg" />
          </span>
          <span className="right">
            <a className="feed-title" href="#">مالزی به دنبال دانشجویان آمریکایی</a>
            <span className="post-date"><i className="fa fa-calendar"></i>7ساعت پیش</span>
          </span>
        </li>
        <li>
          <span className="left">
            <img src="/images/blogs/blog-1.jpg" />
          </span>
          <span className="right">
            <a className="feed-title" href="#">فیلترینگ 100 هزار واژه از سوی گوگل</a>
            <span className="post-date"><i className="fa fa-calendar"></i>3روز پیش</span>
          </span>
        </li>
      </ul>
    </div>
  )
}
