import { FiEdit, FiTrash } from "react-icons/fi";
import { Button } from "../../../../components";

type Props = {
  id: string;
  title: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskItem = ({ id, title, onEdit, onDelete }: Props) => {
  return (
    <div
      key={id}
      className="bg-gray-100 p-4 my-2 rounded-lg shadow flex items-center justify-between hover:bg-gray-200 transition duration-200"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      <div className="flex space-x-4">
        <Button
          className={"pl-4 pr-2"}
          onClick={() => onEdit(id)}
          variant="primary"
          icon={<FiEdit size={20} />}
        />
        <Button
          className={"pl-4 pr-2"}
          onClick={() => onDelete(id)}
          variant="danger"
          icon={<FiTrash size={20} />}
        />
      </div>
    </div>
  );
};
