import React from "react";
import { Input, Textarea } from "../../../../components";

type Props = {
  formData: { title: string; description: string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const TaskForm = ({ formData, onChange }: Props) => {
  return (
    <div>
      <Input
        id="title"
        name="title"
        label="Title"
        value={formData.title}
        onChange={onChange}
      />
      <Textarea
        id="description"
        name="description"
        label="Description"
        value={formData.description}
        onChange={onChange}
      />
    </div>
  );
};
