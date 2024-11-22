import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store/store";
import { deleteTask } from "../../state/tasks";
import { Button } from "..";

interface Props {
  taskId: string;
  title: string;
  message: string;
  onClose: () => void;
}

export const AppWarning = ({ taskId, onClose, title, message }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-red-600">{title}</h2>
        <p className="text-gray-800 mb-6">{message}</p>
        <div className="flex justify-end space-x-2">
          <Button label="Cancel" variant="secondary" onClick={onClose} />
          <Button label="Delete" variant="danger" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};
