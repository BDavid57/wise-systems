import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchTasks, logout, RootState } from "../../../../state";
import { Button } from "../../../../components";
import { CreateTask, TaskList } from "../components";

export const TasksScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    tasks: { tasks },
    auth: { isAuthenticated },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      dispatch(fetchTasks());
    }
  }, [isAuthenticated, dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl w-full mx-auto flex justify-end">
        <Button label="Logout" variant="secondary" onClick={handleLogout} />
      </div>

      <div className="max-w-4xl w-full mx-auto p-6">
        <CreateTask />
      </div>

      <div className="max-w-4xl w-full mx-auto p-6">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};
