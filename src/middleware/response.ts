import { MAP_ERROR_BY_CODE_NAME, MAP_SUCCESS_BY_CODE_NAME } from '../constants'

interface IGetErrorProps {
  errorCodeName?: string
  successCodeName?: string
}

const getErrorResponse = ({
  errorCodeName
}: IGetErrorProps) => MAP_ERROR_BY_CODE_NAME[errorCodeName] ?? MAP_ERROR_BY_CODE_NAME.DEFAULT

const getSuccessResponse = ({
  successCodeName
}: IGetErrorProps) => MAP_SUCCESS_BY_CODE_NAME[successCodeName] ?? MAP_SUCCESS_BY_CODE_NAME.DEFAULT

interface IBuildErrorResponse {
  codeName: string
}

interface IBuildSuccessResponse {
  codeName: string
  data?: { [key: string]: string } | any
}

const buildErrorResponse = ({
  codeName = ''
}): IBuildErrorResponse => {
  const response = getErrorResponse({ errorCodeName: codeName })
  return response
}

const buildSuccessResponse = ({
  codeName = '',
  data = {}
}: {
  codeName: string
  data?: any
}): IBuildSuccessResponse => {
  const response = getSuccessResponse({ successCodeName: codeName })
  return {
    ...response,
    data,
  }
}

export {
  buildErrorResponse,
  buildSuccessResponse,
}
