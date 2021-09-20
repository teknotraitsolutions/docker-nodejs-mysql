// ************
// Express validation code
// ************

const { body, check, query, param } = require('express-validator');


// Login validation
const loginValidate = [
    body("email").isEmail()
    .withMessage('Invalid email'),
    body("password").isLength({ min: 1 })
    .withMessage("Password is required")
];

// Registration validation
const registerValidate = [
    body("first_name").isLength({ min: 1 })
    .withMessage("First Name is required"),
    body("last_name").isLength({ min: 1 })
    .withMessage("Last Name is required")
];

// get user API validation
const getUserValidate = [
    param("id").isNumeric()
    .withMessage("Id is required and must be integer only"),
];

// Edit user validate
const edituserValidate = [
    param("id").isNumeric()
    .withMessage("Id is required and must be integer only"),
];

// Validation for start survey
const startSurveyValidate = [
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer"),
    check("user_id").isInt({ min: 1 })
    .withMessage("User id should be integer"),
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer")
];

// Validation for submit idea
const submitIdeaValidate = [
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer"),
    check("user_id").isInt({ min: 1 })
    .withMessage("User id should be integer"),
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer"),
    check("save_draft").isInt({ min: 0, max: 1 })
    .withMessage("Save Draft should be either 0 or 1"),
    check("question_id").isInt({ min: 1 })
    .withMessage("Question id should be integer")
];

// Validation for get idea
const getIdeaValidate = [
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer"),
    check("user_id").isInt({ min: 1 })
    .withMessage("User id should be integer"),
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer")
];

// getGroupIdeasValidate validation
const getGroupIdeasValidate = [
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer"),
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer")
];

// Validation for submit idea
const submitGroupIdeaValidate = [
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer"),
    check("user_id").isInt({ min: 1 })
    .withMessage("User id should be integer"),
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer"),
    check("idea")
    .custom((val, { req }) => {
        if (req.body.idea.length < 1) {
            throw new Error("Idea(s) required");
        } else {
            return true;
        }
    }),
    check("question_id").isInt({ min: 1 })
    .withMessage("Question id should be integer")
];

// getAdminGroupFinalListValidate validation
const getAdminGroupFinalListValidate = [
    check("group_id").isInt({ min: 1 })
    .withMessage("Group id should be integer")
];

// getClassFinalList validation
const getClassFinalListValidate = [
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey id should be integer")
];

// Add group validation
const addGroupValidate = [
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey Id is required")
];

// Add question validation
const addQuestionValidate = [
    body("question_title").isLength({ min: 1 })
    .withMessage("Question title is required"),
    body("description").isLength({ min: 1 })
    .withMessage("Description is required"),
    check("survey_id").isInt({ min: 1 })
    .withMessage("Survey Id is required")
];

// Add Survey Validation
const addSurveyValidate = [
    body("name").isLength({ min: 1 })
    .withMessage("Survey Name is required")
];

//Edit Survey validation
const editSurveyValidate = [
    param("id").isNumeric()
    .withMessage("Id is required and must be integer only")
];

// Login validation
const setPassword = [
    body("password").isLength({ min: 1 })
    .withMessage("Password is required"),
    body("conf_password").isLength({ min: 1 })
    .withMessage("Confirm Password is required")
];

module.exports = {
    submitIdeaValidate,
    startSurveyValidate,
    getIdeaValidate,
    getGroupIdeasValidate,
    submitGroupIdeaValidate,
    getAdminGroupFinalListValidate,
    getClassFinalListValidate,
    addGroupValidate,
    addQuestionValidate,
    addSurveyValidate,
    editSurveyValidate,
    loginValidate,
    registerValidate,
    getUserValidate,
    edituserValidate,
    setPassword
}