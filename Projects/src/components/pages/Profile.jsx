import { useSearchParams } from "react-router-dom";

function Profile() {
  const [searchParams] = useSearchParams();

  const name =
    searchParams.get("name") || "Guest";

  return (
    <div className="page">
      <h1>Profile Page</h1>

      <h2>Welcome {name}</h2>
    </div>
  );
}

export default Profile;