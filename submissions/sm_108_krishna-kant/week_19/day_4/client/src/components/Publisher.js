import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function Publisher({ data, handleChange }) {
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
        placeholder="Select a Publisher"
        optionFilterProp="children"
        onChange={value =>
          handleChange({ target: { name: "publisher", value } })
        }
        onFocus={onFocus}
        name="publisher"
        onBlur={onBlur}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.map(item => (
          <Option key={item._id} value={item._id}>
            {" "}
            {item.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
