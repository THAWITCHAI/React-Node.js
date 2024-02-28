
import { Link } from "react-router-dom"
function navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">หน้าหลัก</Link></li>
        <li><Link to="/login">เข้าสู่ระบบ</Link></li>
      </ul>
    </div>
  )
}

export default navbar
