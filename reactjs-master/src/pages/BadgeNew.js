import React from "react";
import Heroe from "../components/Heroe";
import BadgeContainer from "../components/BadgeContainer";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import md5 from "md5";
import PageLoading from "../components/PageLoading";
import dotenv from "dotenv";
dotenv.config();
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl:
        "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleClick = e => {
    console.log("Button was click");
    const hash = md5(this.state.form.email);
    const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    this.setState({
      form: {
        ...this.state.form,
        avatarUrl: avatarUrl
      }
    });
  };

  checkForm = () => {
    if (
      this.state.form.firstName === "" ||
      this.state.form.lastName === "" ||
      this.state.form.email === "" ||
      this.state.form.jobTitle === "" ||
      this.state.form.twitter === ""
    ) {
      throw new Error("Los campos no pueden ir vacios");
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({ loading: true, error: null });
    try {
      // this.checkForm();
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push(process.env.PUBLIC_URL + "/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <Heroe />
        <BadgeContainer
          Badge={<Badge {...this.state.form} />}
          Form={
            <BadgeForm
              title="New Attendant"
              onChange={this.handleChange}
              handleClick={this.handleClick}
              handleSubmit={this.handleSubmit}
              {...this.state.form}
              error={this.state.error}
            />
          }
        />
      </React.Fragment>
    );
  }
}

export default BadgeNew;
