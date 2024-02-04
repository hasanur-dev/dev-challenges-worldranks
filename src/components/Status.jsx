import { useSelector, useDispatch } from "react-redux";

import {
  getIsIndependent,
  getIsUnMember,
  updateIsIndependent,
  updateIsUnMember,
} from "../countriesSlice";

function Status() {
  const dispatch = useDispatch();
  const isUnMember = useSelector(getIsUnMember);
  const isIndependent = useSelector(getIsIndependent);
  return (
    <div className="grid gap-2 ">
      <label className=" text-xs font-medium text-gray-light">Status</label>
      <div>
        <div className="mb-4 flex items-center">
          <input
            id="member"
            type="checkbox"
            value={isUnMember}
            onChange={() => dispatch(updateIsUnMember())}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="member"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Member of the United Nations
          </label>
        </div>
        <div className="mb-4 flex items-center ">
          <input
            id="independent"
            type="checkbox"
            value={isIndependent}
            onChange={() => dispatch(updateIsIndependent())}
            className="h-4 w-4 rounded border-gray-300 bg-gray-dark text-red-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="independent"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Independent
          </label>
        </div>
      </div>
    </div>
  );
}

export default Status;
