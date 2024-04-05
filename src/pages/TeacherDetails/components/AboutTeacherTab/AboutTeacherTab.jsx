import './AboutTeacherTab.css';

export default function AboutTeacherTab({ teacherAchievements = [] }) {
    return (
        <>
            {teacherAchievements.length ? (
                <div className="details_single p-2">
                    <h2>درباره من</h2>
                    <ul className="skills_info">
                        {teacherAchievements.map((achievement, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: achievement }} />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='alert alert-success mt-3'>
                    اصلاعاتی از این مدرس در دسترس نیست
                </div>
            )}
        </>
    );
}
