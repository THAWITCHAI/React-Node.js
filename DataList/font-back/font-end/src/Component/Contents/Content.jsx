import "./login.css";

function Content() {
  var data = [
    {
      name: "Thawitchai",
      last: "Boonsong",
      Email: "Thawitchai285@gmail.com",
      Phone_Number: "0652974104",
    },
    {
      name: "Thawitchai",
      last: "Boonsong",
      Email: "Thawitchai285@gmail.com",
      Phone_Number: "0652974104",
    },

  ];
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
            {data.map((item, index) => {
              return (
                <tr key={index} className="tt">
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.last}</td>
                  <td>{item.Email}</td>
                  <td>{item.Phone_Number}</td>
                  <td>
                    <button
                      type="button"
                      className="btn-sm btn btn-outline-warning"
                    >
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
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Content;
