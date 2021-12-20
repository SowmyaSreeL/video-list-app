import "../scss/profile.scss";
const Profile = (props) => {
    return (
        <>
            <div className="user-prfile-info">
                <div className="form-control">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" className="video-form-input" />
                </div>
                <div className="form-control">
                    <label htmlFor="fullname">Last name</label>
                    <input type="text" id="lastname" className="video-form-input" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="video-form-input" />
                </div>
            </div>
        </>
    )
}

export default Profile;