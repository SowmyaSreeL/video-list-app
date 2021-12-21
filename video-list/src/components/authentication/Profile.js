
import {useState, useRef} from 'react';
import "../scss/profile.scss";
const Profile = (props) => {
    const userData = props.userLoginInfo;
    const userName = userData.name;
    let firstName,lastName;

    if(userName.substring(0, userName.indexOf(" ") < 0)) {
        firstName = userName;
    }
    else {
        var rest = userName.substring(0, userName.lastIndexOf(" "));
        var last = userName.substring(userName.lastIndexOf(" ") + 1, userName.length); 
        firstName = rest;
        lastName = last;
    }

    // const [fname, setFName] = useState(firstName);
    // const [lname, setLName] = useState(lastName);
    // const [email, setEmail] = useState(userData.email);
    const fnameRef = useRef('');
    const lnameRef = useRef('');
    const emailRef = useRef('');

    const uploadImg = (e) => {
        document.querySelector('#imageUpload').click();
    }

    const imageUploadPreview = (e) => {
        const uploader = e.target;
        if ( uploader.files && uploader.files[0] ){
            document.querySelector('#profileImage').setAttribute('src',window.URL.createObjectURL(uploader.files[0]));
        }
    }

    // const saveChangesHandler = (e) => {
    //     e.preventDefault();
    //     setFName(fnameRef.current.value);
    //     setLName(lnameRef.current.value);
    //     setEmail(emailRef.current.value);
    // }
    

    return (
        <>
            <div className="profile-icon__conatiner">
                <img id="profileImage" alt="profile-img" src="http://lorempixel.com/100/100" />
                <i className="fa fa-pencil upload-btn" onClick={uploadImg}>
                    <input id="imageUpload" type="file" name="profile_photo" onChange={imageUploadPreview} placeholder="Photo" required="" capture />
                </i>
                
            </div>
            
            <div className="user-profile-info">
                <div className="form-control">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" ref={fnameRef} className="video-form-input" defaultValue={firstName} />
                </div>
                <div className="form-control">
                    <label htmlFor="fullname">Last name</label>
                    <input type="text" id="lastname" ref={lnameRef} className="video-form-input" defaultValue={lastName} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" ref={emailRef} className="video-form-input" defaultValue={userData.email}/>
                </div>
            </div>
            <div className="form-control-btn">
                <button type="submit" className="video-form-button" >Save Changes</button>
            </div>
        </>
    )
}

export default Profile;