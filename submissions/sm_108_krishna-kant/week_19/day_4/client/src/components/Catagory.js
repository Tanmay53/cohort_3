import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function Categories({ data, handleChange }) {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <div style={{ margin: "0.5rem 0" }}>
      <Select
        // showSearch
        style={{ width: "100%", marginLeft: ".5rem" }}
        placeholder="Select a Categories"
        optionFilterProp="children"
        onChange={value =>
          handleChange({ target: { name: "catagory", value } })
        }
        onFocus={onFocus}
        onBlur={onBlur}
        name="catagory"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.map(item => (
          <Option key={item._id} value={item._id}>
            {" "}
            {item.type}
          </Option>
        ))}
      </Select>
    </div>
  );
}
