export const ADD_VAL = "ADD_VAL";
export const DEC_VAL = "DEC_VAL";
export const ADD_VAL_TYPE = "ADD_VAL_TYPE";
export const MUL_VAL = "MUL_VAL";
export const DIV_VAL = "DIV_VAL";
export const REM_VAL = "REM_VAL";

export const addVal = (val) => ({
    type: ADD_VAL,
    factor: val
});

export const decVal = (val) => ({
    type: DEC_VAL,
    factor: val
});

export const addValType = (val) => ({
    type: ADD_VAL_TYPE,
    factor: val
});

export const mulVal = (val) => ({
    type: MUL_VAL,
    factor: val
});

export const divVal = (val) => ({
    type: DIV_VAL,
    factor: val
});

export const remVal = (val) => ({
    type: REM_VAL,
    factor: val
});