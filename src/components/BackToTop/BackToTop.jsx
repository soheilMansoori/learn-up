import { useState, useEffect } from 'react'
import './BackToTop.css'
export default function BackToTop() {
    const [isShowBackToTop, setIsShowBackToTop] = useState(false);
    useEffect(() => {
        const scrollHandler = () => {
            const scrollLocation = window.scrollY
            if (scrollLocation > 50) {
                setIsShowBackToTop(true)
            } else {
                setIsShowBackToTop(false)
            }
        }
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler)
    }, []);
    return (
        <a href="#root" className={`back-to-top-btn ${isShowBackToTop ? "d-block" : "d-none"}`} title="Back to top">
            <i className="fa fa-arrow-up" />
        </a>
    )
}
