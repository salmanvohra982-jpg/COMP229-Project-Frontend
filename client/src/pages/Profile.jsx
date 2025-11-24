/* 
    File: Profile.jsx
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Shows logged-in user's profile details fetched from the backend. Currently read-only in Part 3.
    Date: November 23 2025
*/

import { useEffect, useState } from "react";
import { getProfile } from "../datasource/api-user";
import { getToken } from "../components/auth/auth-helper";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const token = getToken();
      const data = await getProfile(token);
      setProfile(data);
    }
    fetch();
  }, []);

  if (!profile) return <div className="container" style={{paddingTop:20}}>Loading...</div>;

  return (
    <div className="container" style={{ paddingTop:20 }}>
      <h2>Profile</h2>
      <div className="card p-3">
        <p><strong>Username:</strong> {profile.username}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>User Type:</strong> {profile.userType}</p>
        <p><strong>Created:</strong> {new Date(profile.createdAt).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Profile;