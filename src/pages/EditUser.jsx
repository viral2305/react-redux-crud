import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const EditUser = () => {
  const { user } = useSelector((state) => state.data);
  const classes = useStyles();
  let { id } = useParams();
  console.log("id", id);
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    age: "",
    number: "",
    birth_date: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { name, email, contact, address, age, number, birth_date, gender } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("please input all input field");
    } else {
      dispatch(updateUser(state, id));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>

      <h2>Edit User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name || ""}
          type="text"
          onChange={handleInputChange}
          name="name"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email || ""}
          type="text"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact || ""}
          type="text"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address || ""}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Age"
          value={age || ""}
          type="text"
          name="age"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Mobile No."
          value={number || ""}
          type="number"
          name="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Birth-Date"
          value={birth_date || ""}
          type="date"
          name="birth_date"
          onChange={handleInputChange}
        />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender || ""}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br />

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
