import React from "react";
import PropTypes from "prop-types";
import Header from "../../parts/Header";
import Footer from "../../parts/Footer";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import convertTime from "../../components/public/ConvertTime";
import ButtonEdit from "../../components/public/ButtonEdit";

function UserHome(props) {
  const user = useSelector((state) => state.auth.user);
  let data = [
    {
      id: 1,
      field: "Full Name",
      value: user.name,
    },
    {
      id: 2,
      field: "Email",
      value: user.email,
    },
    {
      id: 3,
      field: "Date created",
      value: user.created_at,
    },
    {
      id: 4,
      field: "Lastest edited date",
      value: user.updated_at,
    },
  ];

  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <>
      <Header />
      <div className="container py-3">
        <Table striped>
          <thead>
            <tr>
              <th width="10%">#</th>
              <th width="20%">Field</th>
              <th width="50%">Imformation</th>
              <th width="20%">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <th>{item.field}</th>
                  <td>{item.value}</td>
                  <td>
                    <ButtonEdit handleClickEdit={() => handleEdit(item.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}

UserHome.propTypes = {};

export default UserHome;
