import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/listings").then(res => setData(res.data));
  }, []);

  const Purchase = () => {
    return (
      <div>
        <h2>Delete a File</h2>
      </div>
    );
  };
  console.log(data);
  return (
    <div>
      <h2 className="bg-success display-5 py-4">Groccery List</h2>
      {/* table */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Purchased</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, idx) => {
            return (
              <tr key={ele.quantity}>
                <td>{ele.items}</td>
                <td>{ele.quantity}</td>
                <td>
                  <Link to={`/purchase/${idx}`}>
                    <button className="btn btn-danger">Purchase</button>
                  </Link>
                </td>
                <td>
                  <div>
                    <Button
                      variant="outlined"
                      className="btn btn-warning text-light"
                      onClick={handleClickOpen}
                    >
                      Delete
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Conformation?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Are You Sure You Want To Delete This ?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Disagree
                        </Button>
                        <Link to={`/delete/${idx}`}>
                          <Button
                            onClick={handleClose}
                            color="primary"
                            autoFocus
                          >
                            Agree
                          </Button>
                        </Link>
                      </DialogActions>
                    </Dialog>
                  </div>
                </td>
                <td>
                  <Link to={`/edit/${idx}`}>
                    <button className="btn btn-primary">Edit Data</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
