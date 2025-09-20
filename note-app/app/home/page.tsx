import ProtectedRoute from "../utils/ProtectedRoute";


export default function HomePage() {
    return <ProtectedRoute><h1>Welcome to Home Page 🏠</h1></ProtectedRoute>;
  }