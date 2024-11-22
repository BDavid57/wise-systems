import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, addTask } from "../../../../state";
import { CreateTaskDto } from "../../../../features";
import { Button } from "../../../../components";
import { TaskForm } from ".";

export const CreateTask: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<CreateTaskDto>({
    title: "",
    description: "",
    createDate: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Both title and description are required.");
      return;
    }

    dispatch(
      addTask({
        title: formData.title,
        description: formData.description,
        createDate: new Date().toISOString(),
      })
    );

    setFormData({ title: "", description: "", createDate: "" });
    setError(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Create Task</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <TaskForm formData={formData} onChange={handleChange} />
        <Button
          type="submit"
          label="Add Task"
          variant="primary"
          className="mt-4"
        />
      </form>
    </div>
  );
};
