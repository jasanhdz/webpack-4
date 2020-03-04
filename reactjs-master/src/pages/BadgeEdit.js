import React, { useEffect, useState } from "react";
import md5 from "md5";
import api from "../api";
import Heroe from "../components/Heroe";
import BadgeContainer from "../components/BadgeContainer";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import dotenv from "dotenv";
dotenv.config();
const BadgeEdit = props => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "example",
      jobTitle: "",
      twitter: "",
      avatarUrl:
        "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
    }
  });
  const handleChange = e => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleClick = e => {
    const hash = md5(state.form.email);
    const avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    setState({
      form: {
        ...state.form,
        avatarUrl: avatarUrl
      }
    });
  };

  const fetchData = async id => {
    try {
      const data = await api.badges.read(id);
      setState({ form: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {
      match: { params }
    } = props;
    fetchData(params.badgeId);
    return () => {
      console.log("componentDidMount");
    };
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(state.form);
    setState({ loading: true, error: null });
    try {
      console.log(state.form);
      await api.badges.update(props.match.params.badgeId, state.form);
      setState({ loading: false });

      props.history.push(process.env.PUBLIC_URL + "/badges");
    } catch (error) {
      setState({ loading: false, error: error });
    }
  };

  if (state.loading) {
    return <PageLoading />;
  }
  return (
    <React.Fragment>
      <Heroe />
      <BadgeContainer
        Badge={<Badge {...state.form} />}
        Form={
          <BadgeForm
            title="Edit Attendant"
            onChange={handleChange}
            handleClick={handleClick}
            handleSubmit={handleSubmit}
            {...state.form}
            error={state.error}
          />
        }
      />
    </React.Fragment>
  );
};

export default BadgeEdit;
