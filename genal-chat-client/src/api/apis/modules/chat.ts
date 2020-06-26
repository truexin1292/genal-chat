import fetch from '@/api/fetch';

/**
 * 发送消息
 * @param Chat
 */
export const sendChat = (params: Chat) => {
  return fetch.post('/chat', {
    ...params,
  });
};

/**
 * 获取消息
 * @param Chat
 */
export const getChat = () => {
  return fetch.get('/chat');
};