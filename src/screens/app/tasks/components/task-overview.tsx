import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, editTask } from "../../../../state";
import { Task } from "../../../../features";
import { Button } from "../../../../components";
import { TaskForm } from ".";

interface Props {
  taskId: string;
  onClose: () => void;
}

export const TaskOverview: React.FC<Props> = ({ taskId, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
    const currentTask = tasks.find((task) => task.id === taskId);

    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
      });
    }
  }, [taskId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(
      editTask({
        id: taskId,
        title: formData.title,
        description: formData.description,
      })
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form>
          <TaskForm formData={formData} onChange={handleChange} />
        </form>
        <div className="flex justify-end space-x-2">
          <Button label="Cancel" variant="secondary" onClick={onClose} />
          <Button label="Save" variant="primary" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};
