import validator from "validator"

const TeachersValidator = ({ obj }) => {
    const errors = {}
    if (validator.isEmpty(obj.name)) {
        errors["name"] = "this field is required"
    }
    if (validator.isEmpty(obj.class_num)) {
        errors["class"] = "this field is required"
    }
    if (validator.isEmpty(obj.section)) {
        errors["section"] = "this field is required"
    }
    if (validator.isEmpty(obj.subject)) {
        errors["subject"] = "this field is required"
    }
    return (
        errors
    )
}

export default TeachersValidator