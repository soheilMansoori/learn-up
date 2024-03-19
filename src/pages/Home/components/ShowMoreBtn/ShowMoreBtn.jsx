import { Link } from 'react-router-dom'
import './ShowMoreBtn.css'

export default function ShowMoreBtn({ title, link }) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="text-center">
                    <Link to={link} className="btn btn-theme btn-browse-btn">
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    )
}
