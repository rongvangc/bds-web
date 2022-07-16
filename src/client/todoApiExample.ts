import axiosClient from './axiosClient';

type GetUsersResponse = {
  userId: number;
  id: number;
  title: string;
};

class TodoApi {
  getAllTodo = () => {
    const url = '/todos';
    return axiosClient.get<GetUsersResponse[]>(url);
  };
  getTodoItem = (id: string) => {
    const url = `/todos/${id}`;
    return axiosClient.get<GetUsersResponse>(url);
  };
}

const todoApi = new TodoApi();
export default todoApi;
