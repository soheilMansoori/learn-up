import './SectionTitle.css'

export default function SectionTitle({ sectionName, sectionTitle }) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="sec-heading center">
                    <p>{sectionName}</p>
                    <h2>{sectionTitle}</h2>
                </div>
            </div>
        </div>
    )
}
