import { Link } from 'react-router-dom'
import './Breadcrumb.css'

export default function Breadcrumb({ title, pageName }) {
    return (
        <section className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                        <div className="breadcrumbs-wrap">
                            <h1 className="breadcrumb-title">{title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">خانه</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
