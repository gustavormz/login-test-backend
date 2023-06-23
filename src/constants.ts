const MAP_ERROR_BY_CODE_NAME = {
  DEFAULT: {
    message: 'Error default',
    code: 500,
    type: 'DEFAULT',
  },
  VALIDATION: {
    message: 'Validation Error',
    code: 400,
    type: 'VALIDATION',
  },
  AUTH_ERROR: {
    code: 401,
    message: 'Bad Credentails',
    type: 'AUTH_ERROR',
  },
  NOT_FOUND: {
    code: 404,
    message: 'Not found',
    type: 'NOT_FOUND',
  },
  DUPLICATED_PROFILE: {
    code: 400,
    message: 'Duplicated email',
    type: 'DUPLICATED_EMAIL',
  }
}

const MAP_SUCCESS_BY_CODE_NAME = {
  DEFAULT: {
    message: 'Success!',
    code: 200,
    type: 'DEFAULT',
  },
  CREATED: {
    message: 'Profile created',
    code: 201,
    type: 'CREATED',
  }
}

export {
  MAP_ERROR_BY_CODE_NAME,
  MAP_SUCCESS_BY_CODE_NAME,
}
