import axios from "axios";

const GetList = axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/list`);

const PostList = ({ list }) =>
  axios.post(`${process.env.REACT_APP_BACKEND_ADDRESS}/list`, {
    list,
  });

export { GetList, PostList };
