import { useState } from "react";
import { Task } from "../../../../features";
import { AppWarning, Input, Button } from "../../../../components";
import { TaskItem } from ".";
import { TaskOverview } from ".";

type Props = {
  tasks: Task[];
};

export const TaskList = ({ tasks }: Props) => {
  const [displayTaskOverview, setDisplayTaskOverview] = useState(false);
  const [displayDeleteWarning, setDisplayDeleteWarning] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleCloseOverview = () => {
    setDisplayTaskOverview(false);
  };

  const handleCloseWarning = () => {
    setDisplayDeleteWarning(false);
  };

  const selectTask = (task: string) => {
    setSelectedTask(task);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createDate).getTime();
      const dateB = new Date(b.createDate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <Input
          id="search"
          name="search"
          label="Search by Title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Button
          label={`Sort by Date (${sortOrder === "asc" ? "Ascending" : "Descending"})`}
          variant="secondary"
          onClick={handleSortToggle}
        />
      </div>

      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          onEdit={() => {
            selectTask(task.id);
            setDisplayTaskOverview(true);
          }}
          onDelete={() => {
            selectTask(task.id);
            setDisplayDeleteWarning(true);
          }}
        />
      ))}

      {displayTaskOverview && (
        <TaskOverview taskId={selectedTask} onClose={handleCloseOverview} />
      )}

      {displayDeleteWarning && (
        <AppWarning
          taskId={selectedTask}
          onClose={handleCloseWarning}
          title="Delete Task"
          message="Are you sure you want to delete this task?"
        />
      )}
    </div>
  );
};
