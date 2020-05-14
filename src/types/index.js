import { func, bool, shape, number, string, arrayOf, objectOf, node } from "prop-types";

export const reposType = objectOf(
  arrayOf(
    shape({
      id: number,
      name: string,
      description: string,
      watchers: number,
    })
  )
);
export const usersType = arrayOf(shape({ id: number, name: string }));
export const usernameType = string;
export const queryType = string;
export const setQueryType = func;

export const childrenType = node;

export const fetchUsersReposType = func;
export const fetchDataType = func;
export const fetchStatusType = objectOf(bool);

export const placeholderType = string;
export const inputIdType = string;
export const inputValueType = string;
export const handleChangeType = func;
export const onClickType = func;
