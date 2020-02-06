import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function EditPage(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/user").then(res => setData(res.data));
  }, []);
  const editHandler = () => {
    let id = props.match.params.id;
    setOpen(false);
    axios
      .put("http://localhost:5000/user/" + id, {
        name,
        email,
        mobile,
        age
      })
      .then(res => alert("Edited page"));
  };
  console.log(data);
  return (
    <div>
      <h2>Edit User Info</h2>
      <div className="m-auto col-md-5 p-4 border border-danger rounded">
        <label>Name</label>
        <input
          placeholder="Enter Your Name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          placeholder="Enter Your Email"
          value={email}
          className="form-control"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Mobile</label>
        <input
          placeholder="Enter Mobile Number"
          className="form-control"
          value={mobile}
          onChange={e => setMobile(e.target.value)}
        />
        <label>Name</label>
        <select
          className="form-control"
          value={age}
          onChange={e => setAge(e.target.value)}
        >
          <option></option>
          <option>21</option>
          <option>22</option>
          <option>23</option>
          <option>24</option>
          <option>25</option>
          <option>26</option>
          <option>27</option>
        </select>
      </div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Page
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Comformation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to edit your data? You , will lose your
            current data .
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={editHandler} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
