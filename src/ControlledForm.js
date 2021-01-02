import * as React from "react";

const ControlledForm = () => {
  const [arrays, setArrays] = React.useState([]);
  const [data, setData] = React.useState({
    key: 0,
    nama: "",
    umur: "",
    kelamin: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.key !== 0) {
      let arr = arrays.filter(function (arraysHasil) {
        return arraysHasil.key === data.key;
      });
      let [{ key }] = arr;
      let arrFill = arrays.filter(function (arraysHasil) {
        return arraysHasil.key !== key;
      });
      console.log(arrFill);
      arrFill.push({
        key: data.key,
        nama: data.nama,
        umur: data.umur,
        kelamin: data.kelamin,
      });
      setArrays(arrFill);
    } else {
      let arr = [...arrays];
      arr.push({
        key: Math.random(),
        nama: data.nama,
        umur: data.umur,
        kelamin: data.kelamin,
      });
      setArrays(arr);
    }
  };

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  const singgle = (key, nama, umur, kelamin) => {
    setData({ ...data, key: key, nama: nama, umur: umur, kelamin: kelamin });
  };

  const handleDelete = (key) => {
    let arr = arrays.filter(function (arraysHasil) {
      return arraysHasil.key !== key;
    });
    setArrays(arr);
  };

  return (
    <>
      <label>
        Key:{" "}
        <input
          type="text"
          value={data.key}
          name="key"
          onChange={handleChange}
          disabled
        />{" "}
        NAMA:{" "}
        <input
          type="text"
          value={data.nama}
          name="nama"
          onChange={handleChange}
        />
        UMUR:{" "}
        <input
          type="text"
          value={data.umur}
          name="umur"
          onChange={handleChange}
        />
        JENIS KELAMIN:{" "}
        <input
          type="text"
          value={data.kelamin}
          name="kelamin"
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>NO</th>
            <th>KEY</th>
            <th>NAMA</th>
            <th>USIA</th>
            <th>JENIS KELAMIN</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {arrays.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.key}</td>
                <td>{data.nama}</td>
                <td>{data.umur}</td>
                <td>{data.kelamin}</td>
                <td>
                  <button
                    onClick={() =>
                      singgle(data.key, data.nama, data.umur, data.kelamin)
                    }
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(data.key)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ControlledForm;
