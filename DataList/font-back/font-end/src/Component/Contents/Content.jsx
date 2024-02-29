import "./login.css";

function Content() {
  return (
    <section id="contact" className="text-center">
      <h1>ข้อมูลลูกค้า</h1>
      <br />
      <div className="scoll">
        <table className="table table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อ</th>
              <th scope="col">นามสกุล</th>
              <th scope="col">อีเมลล์</th>
              <th scope="col">เบอร์</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="tt">
              <th scope="row">1</th>
              <td>นาย ธวิชชัย</td>
              <td>บุญส่ง</td>
              <td>Thawitchai@gmail.com</td>
              <td>0652974104</td>
              <td>
                <button type="button" className="btn-sm btn btn-outline-warning">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="btn-sm btn btn-outline-danger"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Content;
