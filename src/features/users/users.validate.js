import { checkSchema } from "express-validator";

const updateUserValidation = () => {
  return checkSchema({
    id: {
      notEmpty: true,
    },
    data: {
      name: {
        optional: true,
      },
      password: {
        optional: true,
        isStrongPassword: true,
        isLength: {
          options: { min: 8 },
          errorMessage: "Password must be at least 8 characters.",
        },
        errorMessage:
          "Password must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character.",
      },
      balance: {
        optional: true,
        isDecimal: true,
      },
      email: {
        optional: true,
        isEmail: true,
        errorMessage: "Invalid email",
      },
    },
    stateCode: {
      optional: true,
    },
    townshipCode: {
      optional: true,
    },
    adminId: {
      optional: true,
    },
  });
};

const createUserValidation = () => {
  return checkSchema({
    name: {
      notEmpty: true,
    },
    password: {
      notEmpty: true,
      isStrongPassword: true,
      isLength: {
        options: { min: 8 },
        errorMessage: "Password must be at least 8 characters.",
      },
      errorMessage:
        "Password must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character.",
    },
    email: {
      notEmpty: {
        errorMessage: "Email must not empty.",
      },
      isEmail: true,
      errorMessage: "Invalid email",
    },
    stateCode: {
      notEmpty: true,
      errorMessage: "StateCode must not empty.",
    },
    townshipCode: {
      notEmpty: true,
      errorMessage: "TownshipCode must not empty.",
    },
    adminId: {
      notEmpty: true,
      errorMessage: "AdminId must not empty.",
    },
  });
};

const userActionsValidation = () => {
  return checkSchema({
    id: {
      notEmpty: true,
      errorMessage: "User id is required.",
    },
    data: {
      notEmpty: true,
      errorMessage: "Data is required.",
    },
    "data.name": {
      notEmpty: true,
      errorMessage: "Action name is required.",
    },
  });
};

const deleteUserValidation = () => {
  return checkSchema({
    id: {
      notEmpty: true,
      errorMessage: "User id is required.",
    },
  });
};

export {
  createUserValidation,
  updateUserValidation,
  userActionsValidation,
  deleteUserValidation,
};
