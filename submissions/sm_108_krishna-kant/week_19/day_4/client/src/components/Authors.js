import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function Authors({ data, handleChange }) {
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
    <div style={{ margin: "0.8rem 0" }}>
      <Select
        mode="tags"
        // showSearch
        style={{ width: "100%", marginLeft: ".5rem", textAlign: "left" }}
        placeholder="Select a Author"
        optionFilterProp="children"
        onChange={value => handleChange({ target: { name: "authors", value } })}
        onFocus={onFocus}
        onBlur={onBlur}
        name="authors"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.map(item => (
          <Option key={item._id} value={`${item._id} tag`}>
            {" "}
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
