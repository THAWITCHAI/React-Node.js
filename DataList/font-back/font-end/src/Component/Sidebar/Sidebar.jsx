
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  return (
    <section id="sidebar">
      <div className="side-pmr">

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/1769/1769328.png" alt="" width={30} height={30} />
          </div>
          <div className="text">คุณ ธวิชชัย บุญส่ง <br />ADMIN</div>
        </a><hr />

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/66/66163.png" alt="" width={24} height={24} />
          </div>
          <div className="text">กำลังดำเนินการ...</div>
        </a>

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/2782/2782895.png" alt="" width={24} height={24} />
          </div>
          <div className="text">เสร็จสิ้น</div>
        </a>

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/562/562678.png" alt="" width={24} height={24} />
          </div>
          <div className="text">เพิ่มรายการอาหาร</div>
        </a>

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/1237/1237747.png" alt="" width={24} height={24} />
          </div>
          <div className="text">เพิ่มโต๊ะ</div>
        </a>

        <Link to="/contact" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/1602/1602309.png" alt="" width={24} height={24} />
          </div>
          <div className="text">ข้อมูลลูกค้า</div>
        </Link><hr />

        <a href="" className="item">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/128/1286/1286853.png" alt="" width={24} height={24} />
          </div>
          <div className="text">ออกจากระบบ</div>
        </a>

      </div>
    </section>
  )
}

export default Sidebar