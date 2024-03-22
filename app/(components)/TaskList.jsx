import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import Link from "next/link";

const TaskList = ({ task }) => {
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

  const createdDateTime = formatTimestamp(task.createdAt);

  return (
    <div className="hover:bg-task-hover bg-task rounded-md shadow-lg flex flex-col">
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
          </tr>
        </thead>
        <tbody>
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
            <td>Due date</td>
            <td>{createdDateTime}</td>
            <td>
              <StatusDisplay status={task.status} />
            </td>
            <td className="ml-auto flex flex-end m-3">
              <DeleteBlock id={task._id} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
