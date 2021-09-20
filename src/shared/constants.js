const CONSTANTS = {};
CONSTANTS.ROLES = {};
CONSTANTS.CUSTOMS = {};
CONSTANTS.USERS = {};
CONSTANTS.SURVEYS = {};
CONSTANTS.QUESTIONS = {};
CONSTANTS.GROUPS = {};
CONSTANTS.IDEAS = {};

CONSTANTS.SECRETKEY_PATTERN =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\\s]).{8,16}$';
CONSTANTS.JWT_TOKEN_EXPIRY = '2d';
CONSTANTS.JWT_TOKEN_PREFIX = 'Bearer';
CONSTANTS.JWT_HEADER_STRING = 'Authorization';
CONSTANTS.JWT_ISSUER = "TEKNOTRAIT";
CONSTANTS.JWT_SECRET_KEY = "AJo7d6cjbc855hxshi08ybdc7tghsx45jlbf65";

// Roles
CONSTANTS.ROLES.SUPER_ADMIN = 1;
CONSTANTS.ROLES.ADMIN = 2;
CONSTANTS.ROLES.USER = 3;

// Custom Message
CONSTANTS.CUSTOMS.INVALID_CRED = "Invalid credentials";
CONSTANTS.CUSTOMS.USER_DEACTIVATED = "User is deactivated";
CONSTANTS.CUSTOMS.NOT_ACCESS = "You do not have access to perform this action";
CONSTANTS.CUSTOMS.FETCHED = "Fetched Successfully";
CONSTANTS.CUSTOMS.SOMETHING_WRONG = "Something Wrong";
CONSTANTS.CUSTOMS.SOME_ERROR = "Some error occured";
CONSTANTS.CUSTOMS.ITEM_SOLD = "Item Sold Successfully";
CONSTANTS.CUSTOMS.VALIDATION_ERROR = "Validation Error";
CONSTANTS.CUSTOMS.IS_DELETED = 1;
CONSTANTS.CUSTOMS.IS_NOT_DELETED = 0;
CONSTANTS.CUSTOMS.ADMINID = 1;
CONSTANTS.CUSTOMS.ERROR = 501;
CONSTANTS.CUSTOMS.SUCCESS = 200;
CONSTANTS.CUSTOMS.UNAUTHORIZE = 401;
CONSTANTS.CUSTOMS.PENDING = 0
CONSTANTS.CUSTOMS.ACTIVE = 1;
CONSTANTS.CUSTOMS.INACTIVE = 2;
CONSTANTS.CUSTOMS.GROUP_FINAL_IDEA_LIMIT = 5;
CONSTANTS.CUSTOMS.SURVEY_TIME_LIMIT = "00:05";

// User Message 
CONSTANTS.USERS.USER_REGISTER = "Registration Success";
CONSTANTS.USERS.UPDATED = "Updated Success";
CONSTANTS.USERS.ACTIVATED = "User Activated";
CONSTANTS.USERS.DEACTIVATED = "User De-activated";
CONSTANTS.USERS.STATUS_PENDING = "User Status Changes to pending";
CONSTANTS.USERS.USER_REGISTERED = "User already registered";
CONSTANTS.USERS.INVALID_USERID = "Invalid User Id Found";
CONSTANTS.USERS.INVALID_STATUS = "Invalid status found";
CONSTANTS.USERS.IS_DELETED_MSG = "Email or Password is incorrect";
CONSTANTS.USERS.IS_PENDING_MSG = "Your request has not been approved, please contact administrator";
CONSTANTS.USERS.IS_DEACTIVATED_MSG = "You do not have an active account with us";
CONSTANTS.USERS.USER_DELETED = "User deleted successfully";
CONSTANTS.USERS.ALL_USERS_NOT_SUBMITTED_IDEAS = "All users of your branch not submitted their ideas yet";
CONSTANTS.USERS.INVALID_EMAIL = "Please provide a valid email address";
CONSTANTS.USERS.PASSWORD_ERROR = "Password should be 8 characters long, combination of atlest one capital letter, one capital letter, one digit and one special character";
CONSTANTS.USERS.PASSWORD_CONF_PASSWORD_ERROR = "Password and Confirm Password don't match";
CONSTANTS.USERS.TOKEN_USER_INVALID = "Token is invalid";

// Survey
CONSTANTS.SURVEYS.SURVEY_ADDED = "Survey Addedd Successfully";
CONSTANTS.SURVEYS.SURVEY_UPDATED = "Survey Updated Successfully";
CONSTANTS.SURVEYS.SURVEY_ALREADY_EXIST = "Survey already exist";
CONSTANTS.SURVEYS.SURVEY_NOT_EXIST = "Survey id not exist in record";
CONSTANTS.SURVEYS.SURVEY_ACTIVATED = "Survey Activated";
CONSTANTS.SURVEYS.SURVEY_DEACTIVATED = "Survey De-activated";
CONSTANTS.SURVEYS.SURVEY_ARCHIVED = "Survey Archived";
CONSTANTS.SURVEYS.SURVEYS_CANT_ARCHIVE = "Active survey cant be archived";
CONSTANTS.SURVEYS.SURVEY_ALREADY_TAKEN = "Survey already taken by you";
CONSTANTS.SURVEYS.START_SURVEY_FIRST = "Before submit idea start the survey first";
CONSTANTS.SURVEYS.USER_NOT_PART_OF_SURVEY = "User is not the part of selected survey";
CONSTANTS.SURVEYS.INACTIVE = 0;
CONSTANTS.SURVEYS.ACTIVE = 1;
CONSTANTS.SURVEYS.ARCHIVE = 2;

// Question
CONSTANTS.QUESTIONS.QUESTION_ADDED = "Question Addedd Successfully";
CONSTANTS.QUESTIONS.QUESTION_ALREADY_EXIST = "Question title already exist";
CONSTANTS.QUESTIONS.QUESTION_NOT_EXIST = "Question id not exist in record";
CONSTANTS.QUESTIONS.QUESTION_UPDATED = "Question Updated Successfully";

// Group
CONSTANTS.GROUPS.GROUP_ADDED = "Group Addedd Successfully";
CONSTANTS.GROUPS.GROUP_ALREADY_EXIST = "Group title already exist";
CONSTANTS.GROUPS.GROUP_NOT_EXIST = "Group id not exist in record";
CONSTANTS.GROUPS.ASSIGN_TYPE_ERROR = "Assign type should be 1 or 2";
CONSTANTS.GROUPS.USER_ALREADY_ASSIGNED_TO_ANOTHER_GROUP = "User already assigned to another group";
CONSTANTS.GROUPS.ASSIGN_SUCCESS = "Assign Successfully";
CONSTANTS.GROUPS.USER_NOT_PART_OF_GROUP = "User is not the part of selected group";
CONSTANTS.GROUPS.GROUP_UPDATED = "Group details updated successfully";

// Idea
CONSTANTS.IDEAS.IDEA_SUBMITTED_AS_DRAFT = "Ideas have been saved as a draft";
CONSTANTS.IDEAS.IDEA_SUBMITTED = "Idea(s) submitted";

module.exports = CONSTANTS;