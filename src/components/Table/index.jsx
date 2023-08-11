import React from "react";
import Style from "./style.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import { THEMES } from "../../constants";

const Table = ({ isLoading, columns, data, onRowClick = () => {} }) => {
  const { theme } = useThemeContext();

  const tableClassName = `${theme === THEMES.LIGHT ? Style.table_dark : Style.table_light}`;
  const loadingClassName = `${theme === THEMES.LIGHT ? Style.loading_dark : Style.loading_light}`;

  return (
    <>
      <table className={tableClassName}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column.key + index}>{column.title}</th>
            ))}
          </tr>
        </thead>

        {!isLoading && (
          <tbody>
            {data?.map((row, index) => (
              <tr key={row._id + index} onClick={() => onRowClick(row)} className={Style.row}>
                {columns.map((column, index) => (
                  <td key={`${row._id + column.key + index}`}>
                    {column.render ? column.render(row) : Array.isArray(row[column.key]) ? row[column.key].join(" - ") : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {isLoading && <h1 className={loadingClassName}>Loading...</h1>}
    </>
  );
};

export default Table;
