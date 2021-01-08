import { useSelector } from "react-redux";



export const ProfileInfo = () => {
	const profile = useSelector((state) => state.profile.profile);
  return (
    <>
      <div>
        <b>Contacts :</b> :
        {profile
          ? Object.keys(profile?.contacts).map((key) => {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })
          : null}
      </div>
      <div>
        <b>About me :</b> : {profile?.aboutMe}
      </div>
    </>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
	return (
	  <div>
		<b>{contactTitle}</b> : {contactValue}
	  </div>
	);
  };