import { authInstance, noAuthInstance } from './instance';

const USER_API = '/api/users';

const userApi = {
  // 로그인
  login: ({ email, password }) => noAuthInstance.post(USER_API + '/login', { email, password }),
  // 회원가입
  signup: ({ email, password }) => noAuthInstance.post(USER_API + '/signup', { email, password }),
  // 회원 상세 정보 조회
  getUserInfo: (userId) => authInstance.get(USER_API + '/' + userId),
  // 회원 정보 수정
  updateUserInfo: ({ userId, name, userName }) => authInstance.put(USER_API + '/' + userId, { name, userName }),
};

export default userApi;
