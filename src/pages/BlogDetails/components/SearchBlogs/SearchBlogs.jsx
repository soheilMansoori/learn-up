import './SearchBlogs.css'

export default function SearchBlogs() {
    return (
        <div className="single_widgets widget_search">
            <h4 className="title">جستجو</h4>
            <form action="#" className="sidebar-search-form">
                <input type="search" name="search" placeholder="عنوان وبلاگ..." />
                <button type="submit">
                    <i className="fa fa-search" />
                </button>
            </form>
        </div>
    )
}
