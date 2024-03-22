import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import Link from "next/link";

function formatTimestamp(timestamp) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-GB", options);

  return formattedDate;
}

const TaskRow = ({ task }) => {
  const createdDateTime = formatTimestamp(task.createdAt);

  return (
    <tbody className="hover:bg-task-hover">
      <tr>
        <td>
          <input type="checkbox" className="checkbox" />
        </td>
        <td>
          <Link href={`/TaskPage/${task._id}`} className="flex">
            <PriorityDisplay priority={task.priority} />
          </Link>
        </td>
        <td>
          <Link href={`/TaskPage/${task._id}`} className="flex">
            {task.title}
          </Link>
        </td>
        <td>{task.description}</td>
        <td>{formatTimestamp(task.dueDate)}</td>
        <td>{createdDateTime}</td>
        <td>
          <StatusDisplay status={task.status} className="flex" />
        </td>
        <td>{task.category}</td>
        <td className="ml-auto flex flex-end m-3">
          <DeleteBlock id={task._id} />
        </td>
      </tr>
    </tbody>
  );
};

const TaskList = ({ tasks }) => {
  return (
    <div className="bg-task rounded-md shadow-lg flex flex-col">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Priority level</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due date</th>
            <th>Created</th>
            <th>Status</th>
            <th>Category</th>
          </tr>
        </thead>
        {tasks.map((task) => (
          <TaskRow task={task} />
        ))}
      </table>
    </div>
  );
};

export default TaskList;
